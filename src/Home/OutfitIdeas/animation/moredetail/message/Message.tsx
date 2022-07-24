import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    SafeAreaView,
    Animated,
} from "react-native";
import event from "./eventdata";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Box} from "../../../../../../Theme";



const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.77;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;


export default function Animations() {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [data, setData] = useState(event);

    return (
        <Box justifyContent="center" alignItems="center">
            <SafeAreaView>
                <Animated.FlatList
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                        {useNativeDriver: true}
                    )}
                    horizontal={true}
                    snapToAlignment="start"
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: ESPACIO_CONTENEDOR * 0.65,
                    }}
                    snapToInterval={ANCHO_CONTENEDOR}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    data={data}
                    keyExtractor={(item) => item.key}
                    renderItem={({item, index: i}) => {
                        const inputRange = [
                            (i - 1) * ANCHO_CONTENEDOR,
                            i * ANCHO_CONTENEDOR,
                            (i + 1) * ANCHO_CONTENEDOR,
                        ];
                        const scrollY = scrollX.interpolate({
                            inputRange,
                            outputRange: [0, 0, 0],
                        });
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.5, 1, 0.5],
                        });
                        return (
                            <View style={{width: ANCHO_CONTENEDOR}}>
                                <Animated.View
                                    style={{
                                        margin: 10,
                                        transform: [{translateY: scrollY}],
                                        opacity
                                    }}
                                >
                                    <Box style={styles.container}>
                                        <Box flexDirection="row">
                                            <Box flex={1}>
                                                <Text style={styles.name}>{item.people}</Text>
                                            </Box>
                                            <Box flex={0.28}>
                                                <Text style={styles.data}>{item.time}</Text>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Text style={styles.title}>{item.title}</Text>
                                        </Box>
                                        <Text style={styles.text}>{item.description}</Text>
                                    </Box>
                                </Animated.View>
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        </Box>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#313131',
        display: 'flex',
        borderRadius:15

    },
    posterImage: {
        width: wp(60),
        height: hp(20),
    },
    text: {
        color: 'white',
        textAlign: 'left',
        padding: 10,
        fontSize:hp(1.4)
    },
    data: {
        color: 'white',
        textAlign: 'left',
        padding: 10

    },
    title: {
        color: '#444444',
        textAlign: 'left',
        paddingLeft: 10
    },
    name: {
        color:'#BF710F',
        textAlign: 'left',
        padding: 10
    }
});
