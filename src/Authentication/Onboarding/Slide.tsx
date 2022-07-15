import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width , height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

interface SlideProps {
    title:string,
    right:boolean,
}
// {title}:SlideProps
const  picture = require("../../../assets/image/1.png");
const Slide = () => {
    const transform = [
        {translateY: (SLIDE_HEIGHT - 100)/2},
        {translateX:  -width /2 + 50},
        {rotate: "270deg"},
    ]
    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
               <Image source={picture} style={styles.picture}/>
            </View>
          <View style={[styles.titleContaine,{transform}]}>
            <Text style = {styles.title}>COWEBOY</Text>
          </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    title: {
        fontFamily: "Oswald-VariableFont_wght",
        // fontSize: 90,
        fontSize: hp('9%'),
        fontWeight:"bold",
        color: "#c4c4c4",
        letterSpacing:5,
        textAlign: 'center',
        padding:10,
        lineHeight: 100,

    },
    titleContaine: {
        height: 100,
        justifyContent: "center",
    },
    underlay: {
      ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end"
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width:undefined,
        height:undefined,
        borderBottomRightRadius: BORDER_RADIUS,
    }
})
export default Slide;
