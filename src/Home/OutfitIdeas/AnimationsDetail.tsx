import React from "react";
import {Image, StyleSheet,Text, View, Dimensions} from "react-native";
import {HomeNavigationProps} from "../../components/Navigation";
import Header3 from "../../components/Header3";
import {Box} from "../../../Theme";
import {SharedElement} from "react-native-shared-element";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Contex from "./ButtomSheetDetail";



export default function AnimationsDetail({
    navigation,
    route,
}: HomeNavigationProps<"AnimationsDetail">) {
    // @ts-ignore
    const {item} = route.params;

    return (
        <Box  flex={1} backgroundColor="background3">
            <Header3
                dark
                title="Detail Product"
                left={{
                    icon: "arrow-left",
                    onPress: () => {
                        console.log("s");
                        navigation.goBack();
                    },
                }}
                right={{icon: "shopping-bag", onPress: () => true}}
            />


            <Box flex={1}>

                <GestureHandlerRootView style={{flex:15}}>
                    <Contex item={item}/>
                </GestureHandlerRootView>

            </Box>
        </Box>
    );
}

const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    Image: {
        width: wp(70),
        height:hp(25),
        marginTop: hp(8),
    },
    background: {
        backgroundColor: "#1F1F1F",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        top:hp( 65),
    },
    container: {
        width: wp(100),
        height:hp(100),
        position: "relative",
        // backgroundColor:'red',
        padding:10,
    },
});
