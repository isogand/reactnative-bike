import React, {useEffect, useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Box, Text} from "./Theme";
import RoundIconButton from "./RoundIconButton";
import {DRAWER_WIDTH} from "../Home/Drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {getUrl} from "../utils";

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right?: {
        icon: string;
        onPress: () => void;
    };
    dark: boolean;
}

const Header = ({left, title, right, dark}: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const color = dark ? "background" : "secondary";
    const image = require("../../assets/7.png");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        (async () => {
            let result = await fetch(getUrl("/api/user"), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization:
                        "Bearer " + (await AsyncStorage.getItem("user-token")),
                },
            });
            result = await result.json();
            setName(JSON.stringify(result.name));
            setEmail(JSON.stringify(result.email));
            // console.log(result);
        })();
    }, []);

    return (
        <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal="m"
            style={{marginTop: insets.top}}
        >
            <RoundIconButton
                name={left.icon}
                iconRatio={0.4}
                onPress={left.onPress}
                size={44}
                align="center"
                {...{color}}
            />
            <Text variant="header" {...{color}}>
                {title.toUpperCase()}
            </Text>
            {right ? (
                <RoundIconButton
                    name={right.icon}
                    iconRatio={0.4}
                    onPress={right.onPress}
                    size={44}
                    align="center"
                    {...{color}}
                />
            ) : (
                <View style={{width: 44}} />
            )}
            <Box
                style={styles.box}

            >
                <Box
                    flexDirection="row"
                    alignItems="center"
                    paddingHorizontal="m"
                    style={{marginTop: -5, marginLeft: -10}}
                >
                    <View
                        style={styles.backgroundImage}
                    >
                        <Image
                            style={styles.img}
                            source={image}
                        />
                    </View>
                    <View style={{margin: 20}}>
                        <Text
                            style={styles.name}
                            variant="title1"
                            textAlign="left"
                        >
                            {name}
                        </Text>
                        <Text
                            style={styles.email}
                            variant="body3"
                            textAlign="left"
                        >
                            {email}
                        </Text>
                    </View>
                </Box>
            </Box>
        </Box>
    );
};
const styles = StyleSheet.create({
    box: {
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#5F5F5F",
        justifyContent:'center',
        alignItems:'center',
        left:wp('6'),
        top:hp('6'),
        position:'absolute',
       // position:'relative',
        width:wp(55),
        height:hp(7),
        flexDirection:'row',
    },
    backgroundImage: {
        backgroundColor: "#a9a9a9",
        right:wp('21'),
        position:'absolute',
        top:hp('0.08'),
        flex:1,
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    img: {
        width:wp( 9),
        height:hp( 9),
        borderRadius: 50,
        alignItems: "center",
        flex: 1,
        margin: 3,
        justifyContent: "center",
    },
    name: {
        left:wp('-10'),
        position:'absolute',
        bottom:hp('-0.5'),
        flex: 1,
        color: "#171616",
        fontSize: hp('1.70%'),
    },
    email: {
        position:'absolute',
        left:wp('-10'),
        flex: 1,
        color: "#807e7e",
        fontSize: hp('1.3%'),
    }
});
Header.defaultProps = {dark: false};

export default Header;
