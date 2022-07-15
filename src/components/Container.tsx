import React, {ReactNode} from "react";
import {Box, useTheme} from "./Theme";
import {Dimensions, Image, Platform, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import {BORDER_RADIUS} from "../Authentication/Onboarding/Slide";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 1023 / 1535;
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    pattern: 0 | 1 | 2;
}
const assets = [
    require("../../assets/image/13.png"),
]
const assets2 = [
    require("../../assets/image/icon.png")
]
const Container = ({ children, footer, pattern }: ContainerProps) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box  flex={1} height={wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)}>

                <Box backgroundColor="secondary" flex={1} overflow="hidden">
                    <Image style={styles.icon} source={assets2[0]}/>
                    <Box
                        flex={1}
                        backgroundColor="secondary"
                        justifyContent="center"
                        padding="xl"
                    >
                        <Image
                            source={assets[0]}
                            style={styles.imgBackground}
                        />
                       {children}
                    </Box>
                    {footer}
                    <Box height={Math.max(insets.bottom, 16)} />
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    );
};
const styles = StyleSheet.create({
    icon: {
        width:150,
        height:150,
        alignSelf:'flex-end'
    },
    imgBackground: {
        ...StyleSheet.absoluteFillObject,
        top: -height * 0.12,
        width:wp(width /4.5),
        marginLeft:wp('7%'),
        height:hp(height/3.5 ),
        justifyContent:'center',
        // borderTopLeftRadius: theme.borderRadii.xl,
    }
})
export default Container;
