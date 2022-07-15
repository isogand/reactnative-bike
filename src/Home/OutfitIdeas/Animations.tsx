import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    SafeAreaView,
    Animated, TouchableOpacity,
} from "react-native";
import { HomeNavigationProps} from "../../components/Navigation";
import events from "../../../events";
import {SharedElement} from "react-native-shared-element";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.77;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ALTURA_BACKDROP = height * 0.5;



export default function Animations({ navigation ,...props}: HomeNavigationProps<"Animations">) {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [data,setData] = useState(events);
    return (
        <SafeAreaView style={styles.container}>
                <Animated.FlatList
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    horizontal={true}
                    snapToAlignment="start"
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingTop: 200,
                        paddingHorizontal: ESPACIO_CONTENEDOR,
                    }}
                    snapToInterval={ANCHO_CONTENEDOR}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    data={data}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item, index:i }) => {
                        const inputRange = [
                            (i - 1) * ANCHO_CONTENEDOR,
                            i * ANCHO_CONTENEDOR,
                            (i + 1) * ANCHO_CONTENEDOR,
                        ];

                        const scrollY = scrollX.interpolate({
                            inputRange,
                            outputRange: [0, -50, 0],
                        });
                        const opacity = scrollX.interpolate({
                          inputRange,
                          outputRange: [0, 1, 0],
                        });
                        return (
                            <View style={{ width: ANCHO_CONTENEDOR }}>
                                <Animated.View
                                    style={{
                                        alignItems: "center",
                                        transform: [{ translateY: scrollY }],
                                        opacity
                                    }}
                                >
                                    <View style={styles.flex}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.model}>{item.model}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.background}
                                        onPress={() => {
                                            // @ts-ignore
                                            navigation.navigate('Animations', { screen: 'AnimationsDetail',params : {item: events[i]}});
                                            // navigation.navigate("AnimationsDetail", {item: events[i]})
                                        }}
                                    >
                                        <SharedElement id={`item.${item.key}.image`}>
                                            <Image  source={item.picture} style={styles.posterImage} />
                                        </SharedElement>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                        );
                    }}
                />
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop:hp(3),
    },
    posterImage: {
        width: wp(70),
        height: hp(30),
        marginLeft:wp(-5)
    },
    background: {
        backgroundColor:'#313131',
        borderRadius:200,
        width:wp(70),
        padding:30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius:30,
    },
    flex: {
        // flex:1,
        flexDirection:"row",
        marginTop: wp('-10'),
        justifyContent: "center",
        textAlign:'center',
        position:'absolute',
        // borderRadius: 15,
        // borderWidth: 2,
        // borderColor: "#5F5F5F",

    },
    title: {
        fontFamily: "Pacifico-Regular",
        color:'#ffc701',
        textAlign:'right',
        fontSize: hp('1.65'),
        flex:0.3
    },
    model: {
        fontFamily: "BlakaHollow-Regular",
        color:'#fff',
        flex:0.3,
        textAlign:'right',
        fontSize: hp('2.4'),
        marginTop:wp(0.25)
    }
});
