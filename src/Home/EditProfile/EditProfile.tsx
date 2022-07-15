import React, {useEffect, useState} from "react";
import {Dimensions, View} from "react-native";
import {HomeNavigationProps} from "../../components/Navigation";
import {DrawerActions} from "@react-navigation/native";
import {Box, Text, useTheme} from "../../components";
import Header from "../../components/Header";

import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFormik} from "formik";
import employeeServices from "./Employee";
import Test from "../OutfitIdeas/bike/Test";
import Tabs2 from "./Tabs2";
import {getUrl} from "../../utils";

const {width} = Dimensions.get("window");
const tabs = [
    {id: "config", title: "Configuration"},
    {id: "info", title: "Personal Info"},
];

const EditProfile = ({navigation}: HomeNavigationProps<"EditProfile">) => {
    const theme = useTheme();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        (async () => {
            let result = await fetch(getUrl("/api/profile/"), {
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
            //console.log(result);
        })();
    }, []);

    return (
        <Box flex={1} backgroundColor="background6">
            <Box
                flex={0.2}
                borderBottomRightRadius="xl"
                backgroundColor="background"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius="xl"
                    backgroundColor="secondary"
                >
                    <Header
                        title="Edit Profile"
                        left={{
                            icon: "menu",
                            onPress: () =>
                                navigation.dispatch(DrawerActions.openDrawer()),
                        }}
                        dark
                    />
                </Box>
            </Box>
            <Box>
                <Box
                    position="absolute"
                    left={width / 2 - 50}
                    top={-50}
                    backgroundColor="primary"
                    style={{borderRadius: 50}}
                    width={100}
                    height={100}
                />
                <Box
                    marginVertical="m"
                    style={{marginTop: 50 + theme.spacing.m}}
                >
                    <Text variant="title1" textAlign="center">
                        {name}
                    </Text>
                    <Text variant="body3" textAlign="center">
                        {email}
                    </Text>
                </Box>
            </Box>

            {/*<Tabs2 tabs={tabs}>*/}
            {/*    <Configuration />*/}
            {/*    <PersonalInfo />*/}
            {/*</Tabs2>*/}

            <View>
                <Test />
            </View>
        </Box>
    );
};

export default EditProfile;
