import React from "react";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Box} from "../../../../components";
import {Image, StyleSheet, Text, View, Dimensions} from "react-native";
import {AirbnbRating, Rating} from 'react-native-ratings';
import {AuthNavigationProps} from "../../../../components/Navigation";



const Ratin = () => {
    const WATER_IMAGE = require('../../assets/stare.png')


    return (
        <Box>
            <Box style={{width:100}} justifyContent="center" alignItems="center" >
                <Text>3.5</Text>
            </Box>
            <Box alignItems="flex-start">
                <Rating
                    count={5}
                    // defaultRating={3.5}
                    startingValue={3.5}
                    imageSize={25}
                    tintColor={'#4A4A4A'}
                    readonly
                />
            </Box>
        </Box>
    );
}

export default Ratin;
const styles = StyleSheet.create({

});
