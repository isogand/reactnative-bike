import { AntDesign } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
const ICON_SIZE = 20

const  clamp = (value:number, min:number, max:number) => {
    'worklet';
    return Math.min(Math.max(value , min), max);
};
const BUTTON_WIDTH = 117
export default function SlidingCounter() {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const [count, setCount] = useState(0);
    const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 0.3;

    const incrementCount = useCallback(() => {
        setCount((currentCount) => currentCount + 1);
    }, []);
    const decrementCount = useCallback(() => {
        setCount((currentCount) => currentCount - 1);
    }, []);
    const resetCount = useCallback(() => {
        setCount(0);
    }, []);


    const onPanGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onActive : (event) => {
            translateX.value = clamp(
                event.translationX,
                -MAX_SLIDE_OFFSET,
                MAX_SLIDE_OFFSET
            );
            translateY.value = clamp(
                event.translationY,
                0,
                MAX_SLIDE_OFFSET,
            );
        },
        onEnd: () => {
            if (translateX.value === MAX_SLIDE_OFFSET) {
                runOnJS(incrementCount)();
            }else if (translateX.value === -MAX_SLIDE_OFFSET) {
                runOnJS(decrementCount)();
            }else if (translateY.value === MAX_SLIDE_OFFSET) {
                runOnJS(resetCount)();
            }
            translateX.value = withSpring(0,{stiffness:400});
            translateY.value = withSpring(0,{stiffness:400});
        },
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            transform : [{translateX: translateX.value}, {translateY: translateY.value}],
        };
    },[]);

    const rPlusMinusIconStyle = useAnimatedStyle(() => {
        const opacityX = interpolate(
            translateX.value,
            [-MAX_SLIDE_OFFSET, 0, MAX_SLIDE_OFFSET],
            [0.4, 0.8, 0.4]
        );

        const opacityY = interpolate(
            translateY.value,
            [0, MAX_SLIDE_OFFSET],
            [1, 0]
        );

        return {
            opacity: opacityX * opacityY,
        };
    }, []);

    const rCloseIconStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateY.value,
            [0, MAX_SLIDE_OFFSET],
            [0, 0.8]
        );
        return {
            opacity,
        };
    }, [])
    const rButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: translateX.value * 0.1
            },{translateY: translateY.value * 0.1}]
        }
    });

    return (
        <Animated.View style={[styles.button, rButtonStyle]}>
            <Animated.View style={rPlusMinusIconStyle}>
                <AntDesign name='minus' color={'white'} size={ICON_SIZE}/>
            </Animated.View>

            <Animated.View style={rCloseIconStyle}>
                <AntDesign name='close' color={'white'} size={ICON_SIZE}/>
            </Animated.View>

            <Animated.View style={rPlusMinusIconStyle}>
                <AntDesign name='plus' color={'white'} size={ICON_SIZE}/>
            </Animated.View>

            <View style={{...StyleSheet.absoluteFillObject,justifyContent:'center',alignItems:'center'}}>
                <PanGestureHandler onGestureEvent={onPanGestureEvent}>
                    <Animated.View style={[rStyle , styles.circle]}>
                        <Text style={styles.text}>{count}</Text>
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    button : {height:58,width:BUTTON_WIDTH,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',backgroundColor:'#1e1e1e',borderRadius:20,borderWidth:2,borderColor:'#3a3939'},
    circle : {height:30,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#4f4f4f',width:30,position:'absolute',borderRadius:25,backgroundColor:'#232323'},
    text : {fontSize:20,color:'white'}
});

