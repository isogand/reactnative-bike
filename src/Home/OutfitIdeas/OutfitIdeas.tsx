import React, {useEffect} from 'react';
import {Box} from "../../components";
import Header from "../../components/Header";
import Background from "./Background";
import {HomeNavigationProps} from "../../components/Navigation";
import Animations from "./Animations";
import TabBar from "../Tabar/TabBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getUrl} from "../../utils";



const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {

    useEffect(() => {

        (async()=>{
            let result = await fetch(getUrl("/api/user"), {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                    "Authorization" : "Bearer " + await AsyncStorage.getItem("user-token")
                },

            });
            result = await result.json();
            console.log(result);
        })()
    }, []);


    return (
        <Box flex={1} backgroundColor="background">
            <Header
                title="Outfit Ideas"
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "shopping-bag", onPress: () => true }}
                navigation={navigation}
            />

            <Box flex={1}>
                <Background/>

                <Animations navigation={navigation}/>
                {/*<Fluid/>*/}
                <TabBar />

            </Box>
        </Box>
    );
};

export default OutfitIdeas;


