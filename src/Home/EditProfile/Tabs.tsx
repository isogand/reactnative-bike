import React, {useState, ReactNode, Children} from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import {RectButton} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle} from "react-native-reanimated";
import {mix, useTiming} from "react-native-redash";
import {Box, Text, useTheme} from "../../components";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const {width} = Dimensions.get("window");

interface Tab {
    id: string;
    title: string;
    picture: string;
}

interface TabsProps {
    tabs: Tab[];
    children: ReactNode;
}

const Tabs = ({tabs, children}: TabsProps) => {
    const theme = useTheme();
    const [index, setIndex] = useState(0);
    const transition = useTiming(index);
    const dot = useAnimatedStyle(() => ({
        transform: [
            {translateX: mix(transition.value, width * 0.25, width * 0.75)},
        ],
    }));
    const content = useAnimatedStyle(() => ({
        transform: [{translateX: -width * transition.value}],
    }));

    return (
        <Box flex={1}>
            <Box flexDirection="row">
                {tabs.map((tab, i) => (
                    <RectButton
                        key={i}
                        onPress={() => setIndex(i)}
                        style={{flex: 1}}
                    >
                        <Box
                            padding="m"
                            style={{paddingBottom: theme.spacing.m + 10,}}
                        >
                            <View style={styles.topButtons}>
                                <TouchableOpacity style={styles.button}>
                                    <Image
                                        style={{
                                            width: wp(10),
                                            height: hp(5),
                                            position:'absolute',

                                        }}
                                        source={tab.picture}
                                    />
                                </TouchableOpacity>
                            </View>
                        </Box>
                    </RectButton>
                ))}
                <Animated.View
                    style={[
                        {
                            position: "absolute",
                            bottom: 0,
                            left: -5,
                            //backgroundColor: theme.colors.primary,
                            width: wp(5),
                            height: hp(5),
                            borderRadius: 5,
                        },
                        dot,
                    ]}
                />
            </Box>
            <Animated.View
                style={[
                    {
                        flex: 1,
                        width: width * tabs.length,
                        flexDirection: "row",
                    },
                    content,
                ]}
            >
                {Children.map(children, (child, i) => (
                    <Box key={i} flex={1} width={width}>
                        {child}
                    </Box>
                ))}
            </Animated.View>
        </Box>
    );
};

export default Tabs;

const styles = StyleSheet.create({
    topButtons: {
        marginBottom:wp(-5),
        flexDirection: "row",

    },
    button: {
        flex: 1,
        alignSelf: "stretch",
        borderWidth: 2,
        borderColor: "#484747",
        alignItems: "center",
        justifyContent: "center",
        height: hp(8),
        width:wp(8),
        borderRadius: 20,

    },
});
