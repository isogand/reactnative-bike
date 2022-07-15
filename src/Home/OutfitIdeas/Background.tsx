import React from "react";
import {View, StyleSheet } from "react-native";


const Background = () => {

    return (
       <View style={StyleSheet.absoluteFill}>
           <View style={{backgroundColor:'#313131',flex:1,flexDirection:'row'}}>
               <View style={{backgroundColor:'#313131',flex:1}}></View>
               <View style={{backgroundColor:'#2C2C2C',flex:1}}></View>
               <View style={{backgroundColor:'#313131',flex:1}}></View>
           </View>
       </View>

    );
};

export default Background;
