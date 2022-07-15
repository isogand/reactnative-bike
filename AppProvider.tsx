import {PropsWithChildren} from "react";
import {Dimensions, View} from "react-native";
import SpoofStatusBar from "./local_modules/SpoofStatusBar";
import CustomSafeAreaProvider from "./local_modules/CustomSafeAreaProvider";

export default ({children} : PropsWithChildren<any>) => {
    const iphoneXStatusBarHeight = (48 * Dimensions.get("window").height) / 896;
    const iphoneXStatusBarWidth = (34 * Dimensions.get("window").width) / 414;


    return (
        <View
            style={{
                flex: 1,
                marginTop: 0,
            }}
        >
            <CustomSafeAreaProvider
                customInsets={{
                    top: iphoneXStatusBarHeight,
                    bottom: iphoneXStatusBarWidth,
                    left: 0,
                    right: 0,
                }}
            >
                {children}
            </CustomSafeAreaProvider>
            {/*******************/}
            {/*<Text style={tailwind`text-red-500 p-9`}>ff</Text>*/}
            <SpoofStatusBar
                color={"black"}
                width={iphoneXStatusBarWidth}
                height={iphoneXStatusBarHeight}
            />
        </View>);
}

