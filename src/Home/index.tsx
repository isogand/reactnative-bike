import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
export { assets } from "./Drawer";

import OutfitIdeas from "./OutfitIdeas/OutfitIdeas";
import FavoriteOutfits from "./FavoriteOutfits";
import TransactionHistory from "./TransactionHistory";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import Cart from "./Cart";
import Animations from "./OutfitIdeas/Animations";
import AnimationsDetail from "./OutfitIdeas/AnimationsDetail";
import {createStackNavigator} from "@react-navigation/stack";

const Drawer = createDrawerNavigator<HomeRoutes>();
const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Animations" component={Animations} />
            <Stack.Screen options={{headerShown: false}} name="AnimationsDetail" component={AnimationsDetail} />
        </Stack.Navigator>
    )
}
export const HomeNavigator = () => (
    <Drawer.Navigator
        drawerContent={() => <DrawerContent />}
        drawerStyle={{ width: DRAWER_WIDTH }}
    >
        <Drawer.Screen options={{headerShown: false}} name="OutfitIdeas" component={OutfitIdeas} />
        <Drawer.Screen options={{headerShown: false}} name="FavoriteOutfits" component={FavoriteOutfits} />
        <Drawer.Screen options={{headerShown: false}} name="TransactionHistory" component={TransactionHistory} />
        <Drawer.Screen options={{headerShown: false}} name="EditProfile" component={EditProfile} />
        <Drawer.Screen options={{headerShown: false}} name="Settings" component={Settings} />
        <Drawer.Screen options={{headerShown: false}} name="Cart" component={Cart} />
        <Drawer.Screen options={{headerShown: false}} name="Animations" component={MainStack} />
        {/*<Drawer.Screen options={{headerShown: false}} name="AnimationsDetail" component={AnimationsDetail} />*/}
    </Drawer.Navigator>
);
