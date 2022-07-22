import {Image, Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import React, {useCallback, useRef} from "react";
import BottomSheet, {BottomSheetRefProps} from "../../BottomSheet";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';
import SelectOptions from "../../bike/SelectOptions";
import ScrollDetail from "../../bike/ScrollDetail";
import {SharedElement} from "react-native-shared-element";

interface Contex {
    item:any,
}
function Backdrop() {
    return (
        <View
            style={[
                StyleSheet.absoluteFill,
                {alignItems: "center",width: wp(100), height: hp(34), justifyContent: "flex-start", flex: 1, marginTop:hp(1)},
            ]}
        >
            <Image
                style={{flex:1,  width: wp(70), height: hp(30),marginRight:wp(30)}}
                source={require("../../../../../assets/image/Bike/6.png")}
            />
        </View>
    );
}
export default function Contex({item}:Contex) {
    const ref = useRef<BottomSheetRefProps>(null);
    const translateY = useSharedValue(0);
    const rotate = useSharedValue(0);
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const onPress = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
            translateY.value = withSpring(0);
            rotate.value = withSpring(180);
            scale.value = withSpring(1.18);
            opacity.value = withSpring(1);
        } else {
            ref?.current?.scrollTo(-280);
            translateY.value = withSpring(-150);
            rotate.value = withSpring(0);
            scale.value = withSpring(1);
            opacity.value = withSpring(0);
        }
    }, []);

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: translateY.value,
                },
                // {
                //     scale:scale.value
                // }
            ]
        }
    })
    const MStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: (translateY.value)-20,
                },
                {
                    scale:scale.value
                }
            ]
        }
    })


    const Style = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: `${rotate.value}deg`,
                },
                {
                    translateY: translateY.value,
                },
            ]
        }
    })





    return (
        <View style={styles.container}>
            <Animated.View
                style={MStyle}
            >
                <Backdrop/>

                <SharedElement  Backdrop={Backdrop} id={`item.${item.key}.image`}>
                    <Image source={item.picture} style={[styles.Image]} />
                </SharedElement>
            </Animated.View>

            <Animated.View
                style={[styles.container2,rStyle]}
            >
                <SelectOptions/>
            </Animated.View>

            <Animated.View style={[Style]}>
                <TouchableOpacity onPress={onPress}>
                    <LottieView
                        source={require('../../image/2.json')}
                        autoPlay
                        loop

                        style={[styles.sheetContainer,{width : 50}]}
                        onPress={onPress}
                    />
                </TouchableOpacity>
            </Animated.View>

            <BottomSheet style={styles.sheetContainer} ref={ref}>
                <ScrollDetail item={item} />
            </BottomSheet>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: wp(68),
        height:hp(27),
        marginTop: hp(6),
    },
    container2: {
        width: wp(100),
        height:hp(10),
        position: "relative",
        padding:10,
    },
    button: {
        height: 50,
        borderRadius: 25,
        aspectRatio: 1,
        backgroundColor: 'white',
        opacity: 0.6,
        justifyContent:"center",
        display:'flex',
        alignItems:'center'
    },
    box: {
        flex: 0.17,
        height:150,
        width:80,
        borderRadius: 10,
        backgroundColor:'pink',
        transform:[{rotate:'45deg'}],
    },
    sheetContainer: {
        marginTop:0,

    },
});
