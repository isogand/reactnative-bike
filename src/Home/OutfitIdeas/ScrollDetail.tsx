import React from "react";
import {View,Text, StyleSheet, Dimensions} from "react-native";
import SlidingCounter from "../../components/SlidingCounter";
import { Feather as Icon } from '@expo/vector-icons';
import ColorBike from "./bike/ColorBike";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

interface DetailProps {
   item:any;
}

const ScrollDetail = ({item}: DetailProps) => {
    const colors = ["rgb(252,246,246)", "#FF0058", "#f80000"];


    return (
        <View style={styles.container}>
            <View style={{flex:1,flexDirection:'row'}}>

                <View style={{margin:20,flex:1}}>
                    <View style={styles.size}>
                        <Text style={{color:'#706e6e',margin:8}}>Size</Text>
                        {/*//....//*/}
                    </View>
                    <View style={styles.size}>
                        <Text style={{color:'#706e6e',margin:8}}>Price</Text>
                        <Text style={{fontSize:hp(1.8),color:'white',marginTop:hp(-1),marginLeft:wp(2)}}>{item.price}</Text>
                    </View>
                </View>

                <View style={{marginTop:hp(3),marginLeft:wp(-5)}}>
                    <View style={{borderRadius:20}}>
                        <View>
                            <SlidingCounter/>
                        </View>
                    </View>
                    <View style={styles.color}>
                        <Text style={{color:'#706e6e',margin: 5,fontSize:hp(1.75)}}>Color</Text>
                            <ColorBike  options={colors} valueIsColor/>
                    </View>
                </View>

                <View style={{flex:1,marginRight:-10,margin:10}}>
                    <View style={styles.addtocart}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Icon  name="shopping-bag" size={35} color="white"/>
                            <Text style={{fontSize:22,color:'white',marginTop:25}}>Add</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default ScrollDetail;
const styles = StyleSheet.create({
    container: {
        width,
        height,
        padding:30,
        marginTop:hp(-5),
        marginLeft:wp(-3),
        alignItems:'center',
        justifyContent:'center'
    },
    size:{
        borderWidth:2,
        borderColor:'#3a3939',
        width:wp(22),
        height:hp(7),
        borderRadius:20,
        margin:5
    },
    color:{
        borderWidth:2,
        borderColor:'#3a3939',
        width:wp(28),
        height:hp(7.25),
        borderRadius:20,
        marginTop:hp(1)
    },
    addtocart: {
        backgroundColor:'#313131',
        width:70,
        height:130,
        borderRadius:20,
        marginTop:hp(1.35)
    }
});
