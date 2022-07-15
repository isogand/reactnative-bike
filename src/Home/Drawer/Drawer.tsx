import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import { useNavigation, DrawerActions, CommonActions } from '@react-navigation/native';
import { Box, useTheme } from '../../components';
import DrawerItem, { DrawerItemProps } from './DrawerItem';
import Header2 from "../../components/Header2";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import RoundIcon from "../../components/RoundIcon";

export const assets = [require("./assets/drawer.png")];
const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 769 / 1531;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
    { icon: "zap", label: "Outfit Ideas",text: "Confirmed hello@sep.com", screen: "OutfitIdeas", color: "b1" },
    { icon: "heart", label: "Favorite Outfits",text: "Strorage used", screen: "FavoriteOutfits", color: "b2" },
    { icon: "user", label: "Edit Profile",text: "No Scheduled events", screen: "EditProfile", color: "b3" },
    { icon: "clock", label: "Transaction History",text: "Transaction History", screen: "TransactionHistory", color: "b4" },
    { icon: "settings", label: "Notification Settings",text: "No payment profile", screen: "Settings", color: "b5" },
    { icon: "log-out", label: "Logout",text: "Push notifications",
        onPress: (navigation) => navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Authentication' }]
        })), color: "b6"
    },
]
const data = [
    { icon: "instagram", color: "i1" },
    { icon: "twitter",  color: "i2" },
    { icon: "youtube",  color: "i3" },
    { icon: "dribbble",  color: "i4" },
]

const Drawer = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="background">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="secondary"
                >
                   <View style={{marginTop:10}}>
                       <Header2
                           title="Menu"
                           left={{ icon: 'x', onPress: () => navigation.dispatch(DrawerActions.closeDrawer()) }}
                           right={{ icon: 'shopping-bag', onPress: () => navigation.navigate("Cart") }}
                           dark
                       />
                   </View>
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="secondary"
                    justifyContent="center"
                    padding="xl"
                >
                    {items.map(item => <DrawerItem key={item.icon} {...item} />)}
                </Box>
            </Box>
            <Box
                backgroundColor="secondary"
                // width={wp(DRAWER_WIDTH/1.37)}
                // DRAWER_WIDTH/1.37
                overflow="hidden"
                height={height * 0.61}
            >
                <View
                    style={{
                        // width: DRAWER_WIDTH/1.37,
                        height,
                        borderTopRightRadius: theme.borderRadii.xl,
                        backgroundColor:'rgba(16,16,16,0.35)'
                    }}
                >
                    <View style={styles.icon}>
                        {data.map(item =>
                            // <View style={styles.icons}/>
                            <RoundIcon
                             name={item.icon}
                             backgroundColor={item.color}
                             iconRatio={0.5}
                             color="background4"
                             size={35}
                            />
                        )}
                    </View>
                </View>
            </Box>
        </Box>
    )
}

export default Drawer;
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#1F1F1F'
    },
    icon: {
        alignItems: "center",
        justifyContent: 'center',
        display: 'flex',
        flexDirection:'row',
        marginTop: hp(5),
        flex:0.25,
    },
    icons: {
        alignItems: "center",
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: 'yellow',
        padding:20,
        borderRadius:50,
        margin:hp(0.25),
    }
});