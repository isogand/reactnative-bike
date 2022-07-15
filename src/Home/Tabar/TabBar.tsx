import React from 'react'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import { Feather as Icon } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from "react-native";
import {BORDER_RADIUS} from "../../Authentication/Onboarding/Slide";




const tabs =(navigation)=> ([
    {
        name: 'Home',
        activeIcon: <Icon onPress={() => navigation.navigate("OutfitIdeas")} name="home" color="#fff" size={25} />,
        inactiveIcon: <Icon  name="home" color="#4d4d4d" size={20} />,
    },
    {
        name: 'search',
        activeIcon: <Icon name="search" color="#fff" size={25} />,
        inactiveIcon: <Icon name="search" color="#4d4d4d" size={20} />
    },
    {
        name: 'plus-product',
        activeIcon: <Icon name="plus-square" color="#fff" size={25} />,
        inactiveIcon: <Icon name="plus-square" color="#4d4d4d" size={20} />
    },
    {
        name: 'heart',
        activeIcon: <Icon name="heart" color="#fff" size={25} />,
        inactiveIcon: <Icon name="heart" color="#4d4d4d" size={20} />
    },
    {
        name: 'Profile',
        activeIcon: <Icon name="user" color="#fff" size={25} />,
        inactiveIcon: <Icon onPress={() => navigation.navigate("EditProfile")} name="user" color="#4d4d4d" size={20} />,
        // console.log(tabs);
        onPress: () => console.log("tabs"),
    },

]);

const TabBar = () => {
    const navigation = useNavigation();
    console.log(tabs);
    return (
        <Tabbar
            tabs={tabs(navigation)}
            tabBarContainerBackground='#1F1F1F'
            tabBarBackground='#313131'
            activeTabBackground='#1F1F1F'
            labelStyle={styles.container}
        />
    );

}
const styles = StyleSheet.create({
    container: {
        color: '#4d4d4d',
        fontWeight: '500',
        fontSize: hp('1')
    },
})
export default TabBar
