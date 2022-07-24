import React, {PropsWithChildren} from "react";
import {Image, StyleSheet, Text, View, Dimensions} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {TouchableOpacity} from "react-native-gesture-handler";
import RoundIcon from "../../../../components/RoundIcon";
import Ratin from "./Ratings";
import {useTheme} from "../../../../components";
import {Box} from "../../../../../Theme";



export const MARGIN = "xl";

function Logo() {
    const theme = useTheme();
    const Wheel = require("../../../../../assets/image/Bike/icon/Group1.png");
    return (
        <Box backgroundColor="background3" flex={0.75}>
            <Box style={styles.Box} flexDirection="row" width={theme.spacing[MARGIN] * 4} backgroundColor="i1">

                <Text style={styles.namebike}>
                    C O W E B O Y
                </Text>
                <View style={styles.container}>
                    <Image style={styles.image} source={Wheel}/>
                </View>
            </Box>
        </Box>
    );
}

function Backdrop() {

    return (
        <Box backgroundColor="background3" flexDirection="row" style={{marginBottom: wp(20)}} flex={0.3}>
            <View style={styles.d}/>
            <View style={styles.m}/>
        </Box>
    );
}

type Props = {
    item: string | number
}
export default function TopInformation({item}:PropsWithChildren<Props>) {
    const data = [
        { icon: "share" },
        { icon: "heart" },
        { icon: "more-vertical"},
    ]

    return (

            <Box flex={1}>
                <Box style={styles.w} flex={1.5}>
                    <Logo/>
                    <Backdrop/>
                    <Box flexDirection="row">
                        <Box flex={1} style={styles.constructor}>
                            <Ratin/>
                        </Box>
                        <Box style={styles.constructor}>
                            <Text>AGE</Text>
                            <Text>+{item.age}</Text>
                        </Box>
                        <Box style={styles.constructor}>
                            <View style={styles.cast}>
                                <TouchableOpacity style={{flexDirection:'row'}}>
                                    {data.map(items =>
                                        // <View style={styles.icons}/>

                                        <RoundIcon
                                            key={items.icon}
                                            name={items.icon}
                                            iconRatio={0.5}
                                            color="background5"
                                            size={26}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </Box>
                    </Box>

                </Box>

                <Box flex={0.35}>
                    <Image source={item.picture} style={[styles.Image]}/>
                </Box>

            </Box>
    );
}

const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
    },
    namebike: {
        color: '#c5c5c5',
        padding: 15,
        flex: 1
    },
    image: {
        width: 45,
        height: 45,
        marginTop: hp(0.5),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 30,
    },
    Box: {
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,

    },
    w: {
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70,
        backgroundColor: '#4A4A4A'
    },
    d: {
        backgroundColor: '#313131',
        flex: 0.75,
        height: 200,
        borderRadius: 100,
    },
    m: {
        backgroundColor: '#4A4A4A',
        flex: 0.75,
        height: 200,
        borderRadius: 100,
    },
    Image: {
        width: wp(110),
        height: hp(35),
        marginTop: hp(-45),
        marginLeft: wp(-3)
    },
    constructor: {
        marginBottom: hp(1),
        padding: 15,
        margin: 15,

    },
    cast: {
        backgroundColor: 'rgba(51,51,51,0.58)',
        width: 90,
        height: 30,
        borderRadius: 10,
        marginTop: hp(1.5),
        flexDirection: "row",
    }
});
