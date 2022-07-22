import React from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import {HomeNavigationProps} from "../../../../components/Navigation";
import {Box} from "../../../../../Theme";
import Header3 from "../../../../components/Header3";
import TopInformation from "./TopInformation";
import SwipeButton from "../components/Buttom";
import Animated from "react-native-reanimated"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Information({navigation, route}: HomeNavigationProps<"Information">) {
    const {item} = route.params;


    return (
        <Animated.ScrollView flex={1}>
            <Box backgroundColor="background3" flex={1}>
                <View style={{flex: 1, height: hp(100)}}>
                    <Header3
                        dark
                        title="Detail"
                        left={{
                            icon: "arrow-left",
                            onPress: () => {
                                navigation.goBack();
                            },
                        }}
                        right={{icon: "shopping-bag", onPress: () => true}}
                    />
                    <Box flex={1}>

                        <TopInformation item={item}/>

                        <Box style={{marginTop: wp(-25)}} alignItems="center" flex={0.2}>
                            <SwipeButton
                                backgroundColor="#FFC701FF"
                                onChange={console.log}
                                labelContainer={console.log}
                                value
                            />
                        </Box>
                    </Box>
                </View>
               <Box alignItems="center">
                   <View style={styles.liner}/>
               </Box>
                <Box style={{padding:15}}>
                    <Box style={styles.content} >
                        <Text>Mini crossbody bag available in various colours. Featuring two compartments. Handles and
                            detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.</Text>

                    </Box>
                </Box>

            </Box>
        </Animated.ScrollView>
    );
}
const styles = StyleSheet.create({
    liner: {
        borderTopWidth: 0.5,

        borderColor: '#757575',
        justifyContent: 'center',
        width: '90%',
        marginTop:wp(-5)
    },
    content : {
        backgroundColor:'#444444',
        borderRadius:15
    }

});
