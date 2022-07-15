import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Text } from "./Theme";
import RoundIconButton from "./RoundIconButton";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

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

const Header = ({ left, title, right }: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const image = require("../../assets/7.png");
    return (
        <Box
            backgroundColor="secondary"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            padding="m"
            style={{ marginTop: insets.top }}
        >
            <RoundIconButton
                name={left.icon}
                iconRatio={0.4}
                onPress={left.onPress}
                size={44}
                align="center"
                color="background"
            />
            <Text style={{color:'white'}}  variant="header" >
                {title.toUpperCase()}
            </Text>
            {right ? (
                <TouchableOpacity
                    onPress={() => navigation.navigate("EditProfile")}
                >
                    <Image
                        style={styles.ImageUser}
                        source={image}
                    />
                </TouchableOpacity>
            ) : (
                <View style={{ width: 44}} />
            )}
        </Box>
    );
};

Header.defaultProps = { dark: false };

const styles = StyleSheet.create({
    ImageUser: {
        width:wp(10.5),
        height:hp(9),
        borderRadius: 50,
        alignItems: "center",
        flex: 1,
        margin: 3,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#a9a9a9",
    },

});
export default Header;
