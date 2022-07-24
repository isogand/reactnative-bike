import React, {PropsWithChildren, useState} from "react";
import {Image, Animated, View, StyleSheet, Text, SafeAreaView} from "react-native";
import {Box} from "../../../../../../Theme";
import {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Dimensions} from "react-native";
import event from "../message/eventdata";

type Props = {
    item: string | number
}

const width = Dimensions.get("window").width;


export default function MoreImage({item}: PropsWithChildren<Props>) {

    const translateX = useSharedValue(0);

    const width = Dimensions.get("window").width;
    const ANCHO_CONTENEDOR = width * 0.77;
    const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const SLIDER_WIDTH = Dimensions.get('window').width + 80
    const [data, setData] = useState(event);
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            translateX.value = event.contentOffset.x;
        },
    });

    return (
        <Box justifyContent="center" alignItems="center">
            <SafeAreaView>
                <Box>
                    <Box style={styles.layout}/>
                </Box>

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
                            outputRange: [0, 1, 0],
                        });
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.5, 1, 0.5],
                        });
                        return (
                            <>
                                <View style={{width: ANCHO_CONTENEDOR}}>
                                    <Animated.View
                                        style={{
                                            margin: 10,
                                            transform: [{translateY: scrollY}],
                                            opacity
                                        }}
                                    >
                                        <Box  justifyContent="center" alignItems="center">
                                            <Image style={styles.image} source={item.picture}/>
                                        </Box>

                                    </Animated.View>
                                </View>

                            </>
                        );
                    }}
                />
                <Box alignItems="center" justifyContent="center">
                    <Box style={styles.cumin}/>
                </Box>
            </SafeAreaView>
        </Box>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 220,
        height: 120,
        backgroundColor: '#262626',
        marginTop: wp(10),
    },
    layout: {
        borderWidth: 0.75,
        position: 'absolute',
        width: 300,
        height: 200,
        borderColor: '#8F89A6',
        borderRadius: 25,
        marginLeft: wp(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    cumin: {
        height: 50,
        width: 300,
        marginBottom: wp(5),
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: 'rgba(223,223,223,0.15)',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
        zIndex:-1
    }

});
