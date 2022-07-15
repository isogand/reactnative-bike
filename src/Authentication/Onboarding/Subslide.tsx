import React from 'react';
import { StyleSheet, View } from 'react-native';


import { Button } from '../../components'
import Footer from "../components/Footer";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Box,Text} from "../../../Theme";
import {useNavigation} from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


interface SubslideProps {
  description: string;
  subtitle: string;
  last?:boolean;
  onPress: () => void;
}

const Subslide = ({description,subtitle,last,onPress}:SubslideProps) => {
    const navigation = useNavigation();
    const footer = (
        <Footer
            style={{ marginBottom:wp(-15)}}
            title="Don't have an account?"
            action="Sign Up here"
            onPress={() => navigation.navigate("SignUp")}
        />
    );
    const insets = useSafeAreaInsets();
    return (
        <View pattern={2} {...{ footer }} style={styles.container}>
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body2" style={styles.description}>{description}</Text>
            <View style={{margin:10}}/>
            {last ?  (
                <Button
                    style={{marginBottom:wp(-10)}}
                label="MORE"
                  {...{ onPress }}
                />
                ): null}

            {last? (
                <Box style={{bottom:10,position:'absolute'}}>
                    {/*{footer}*/}
                </Box>
            ):null}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
        borderTopLeftRadius: 80,
        // minWidth: "50%",
        backgroundColor:'#1F1F1F',
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 12,
        color:'white'
    },
    description: {
        textAlign: "center",
        marginBottom: wp('0%'),
        color:'#575757',
        fontSize: hp('1.60%'),
    },
    des: {
        textAlign: "center",
        // marginTop:50,
        color:'#575757',
    },
    text: {
        color:'#ffffff',

    }
});
export default Subslide;
