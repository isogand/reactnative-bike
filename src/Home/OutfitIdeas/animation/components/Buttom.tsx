import React, {useEffect, useRef, useState} from "react";
import {Image, StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";
import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
    interpolate,
    interpolateColor,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import {clamp, snapPoint} from "react-native-redash";
import {scale} from "react-native-size-matters";
import {LinearGradient} from "expo-linear-gradient";

const SWITCH_CONTAINER_WIDTH = scale(220);
const SWITCH_CONTAINER_HEIGHT = scale(70);
const CIRCLE_WIDTH = scale(60);
const CIRCLE_HEIGHT = scale(70);
const BORDER = scale(1);
const TRACK_CIRCLE_WIDTH = 150;

type ContextType = {
    translateX: number,
}
type SwitchButtom = {
    value: boolean;
    onChange: (value: boolean) => void;
    style?: StyleProp<ViewStyle>;
    labelContainer: React.ReactNode;
    backgroundColor: string;
};
const SwitchButtom = ({value, onChange, backgroundColor}: SwitchButtom) => {
    const [isToggled, setIsToggled] = useState(value);
    console.log(isToggled);
    const translateX = useSharedValue(15);
    useEffect(() => {
        onChange(isToggled);
    }, [isToggled]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}],
            width: interpolate(
                translateX.value,
                [0, TRACK_CIRCLE_WIDTH, TRACK_CIRCLE_WIDTH],
                [CIRCLE_WIDTH, (CIRCLE_WIDTH), CIRCLE_WIDTH]
            ),
        };
    });

    const animatedContainerStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                translateX.value,
                [0, TRACK_CIRCLE_WIDTH],
                ["#474749", "#232323"]
            ),
        };
    });

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number }>({
        onStart: (_e, ctx) => {
            ctx.x = translateX.value;
        },
        onActive: ({translationX}, ctx) => {
            translateX.value = clamp(translationX + ctx.x, 0, TRACK_CIRCLE_WIDTH);
        },
        onEnd: ({velocityX}) => {
            const selectedSnapPoint = snapPoint(translateX.value, velocityX, [
                15,
                TRACK_CIRCLE_WIDTH,
            ]);
            translateX.value = withSpring(selectedSnapPoint);
            console.log(selectedSnapPoint !== 15, '654646');
            runOnJS(setIsToggled)(selectedSnapPoint !== 15);
        },
    });

    const panRef = useRef<PanGestureHandler>(null);

    return (
        <GestureHandlerRootView>
            <Animated.View style={[animatedContainerStyle, styles.switchContainer]}>
                <View style={styles.left}>
                    <View style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%"
                    }}>
                        <Text style={styles.texts}>ADD</Text>
                    </View>
                    <View>
                        <PanGestureHandler onGestureEvent={onGestureEvent} ref={panRef}>
                            <Animated.View
                                style={[animatedStyle]}
                            >
                                <LinearGradient style={[styles.circle, {borderColor: "transparent"}]}
                                                colors={['#AFA2B2', '#8F8CA8', '#935883']}>
                                    <View style={styles.back}>
                                        {!isToggled ?
                                            <Text style={styles.text}>ADD</Text>
                                            :
                                            <Image style={styles.icon} source={require("../assets/Vector.png")}
                                            />
                                        }
                                    </View>
                                </LinearGradient>
                            </Animated.View>
                        </PanGestureHandler>
                    </View>
                </View>
                <View style={styles.center}>
                    <Image style={{width: 40, height: 30}} source={require("../assets/right.png")}/>
                </View>
                <View style={styles.right}>
                    <Image style={{width: 35, height: 35}} source={require("../assets/Vector.png")}/>
                </View>
            </Animated.View>
        </GestureHandlerRootView>
    );
};
export default SwitchButtom;

const styles = StyleSheet.create({
    switchContainer: {
        width: SWITCH_CONTAINER_WIDTH,
        height: SWITCH_CONTAINER_HEIGHT,
        borderRadius: 20,
        flexDirection: "row",
    },
    circle: {
        alignSelf: "center",
        width: CIRCLE_WIDTH,
        height: CIRCLE_HEIGHT,
        borderRadius: 25,
        borderWidth: BORDER,
        elevation: 5,
        backgroundColor: "#9a9a9a",
        transform: [{rotate: '90deg'}],

    },
    back: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: "center",
        transform: [{rotate: '270deg'}],
        color: "rgba(17,17,17,0.82)",
        fontSize: 15
    },
    icon: {
        width: 35,
        height: 35,
        transform: [{rotate: '-90deg'}],
        tintColor: 'black'
    },
    texts: {
        textAlign: "center",
        color: "rgba(157,153,153,0.88)",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15
    },
    left: {
        alignItems: 'center',
        flex: 0.85,
        justifyContent: 'center',
        zIndex: 1,
        flexDirection: 'row',
        position: 'relative'
    },
    center: {
        alignItems: 'center',
        flex: 0.75,
        justifyContent: 'center'

    },
    right: {
        alignItems: 'center',
        flex: 0.85,
        justifyContent: 'center'

    }
});
