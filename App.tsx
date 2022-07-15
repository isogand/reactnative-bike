import * as React from 'react';
import LoadAssets from './src/components/LoadAssets';
import {ThemeProvider} from "./Theme";
import {AuthenticationNavigator} from "./src/Authentication";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {AppRoutes} from "./src/components/Navigation";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeNavigator} from "./src/Home";
import {View} from "react-native";


const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "Oswald-VariableFont_wght": require("./assets/fonts/Oswald-SemiBold.ttf"),
  "RubikMoonrocks-Regular" : require("./assets/fonts/RubikMoonrocks-Regular.ttf"),
  "BlakaHollow-Regular": require("./assets/fonts/BlakaHollow-Regular.ttf") ,
  "Pacifico-Regular":require("./assets/fonts/Pacifico-Regular.ttf")  ,
};


const AppStack = createStackNavigator<AppRoutes>();

export default function App() {

  return (
      <ThemeProvider>
          <LoadAssets {...{fonts}}>
              <SafeAreaProvider>
                  {/*<AuthenticationNavigator/>*/}
                  <AppStack.Navigator headerMode="none">
                      <AppStack.Screen
                       name="Authentication"
                       component={AuthenticationNavigator}
                      />
                      <AppStack.Screen name="Home" component={HomeNavigator}/>
                  </AppStack.Navigator>
              </SafeAreaProvider>
          </LoadAssets>
      </ThemeProvider>
  );
}
