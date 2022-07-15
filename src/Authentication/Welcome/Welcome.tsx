import React from 'react';
import {Image, View, Text, Dimensions, StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Box, Button, useTheme} from "../../components";
import {AuthNavigationProps} from "../../components/Navigation";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get('window');
const picture = {
    src: require('../../../assets/wBike.png'),
    width: 408,
    height: 612
}

export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
    const theme = useTheme();

    return (
        <Box flex={1} backgroundColor="background4">
            <Box
                flex={2}
                borderBottomRightRadius="mxl"
                borderBottomLeftRadius="mxl"
                backgroundColor="background3"
                alignItems="center"
                justifyContent="flex-end"
           >
                <View  style={styles.content}>
                    <Image
                        source={picture.src}
                        style={styles.image}
                    />
                </View>
            </Box>
            <Box flex={1}>
                <Box
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                >

                    <View  style={{backgroundColor:'#D9D9D9',borderRadius:50,marginTop:hp(-5)}}>
                        <LottieView
                            source={require('../../../assets/image/Tabar/1.json')}
                            autoPlay
                            loop
                            style={{
                                width: 80,
                                height: 80,
                            }}
                        />
                    </View>

                </Box>
                <Box
                    flex={25}
                    justifyContent="space-evenly"
                    alignItems="center"

                >
                    <Text style={styles.title}>By whit bike</Text>
                    <Text style={styles.text}>
                        Create your individual & unique style
                        and stay healthy everyday
                    </Text>
                    <Button
                        variant="primary"
                        label="Have an account? Login"
                        onPress={() => navigation.navigate("Login")}
                    />
                    <Button
                        label="Join us, it's Free"
                        onPress={() => navigation.navigate("SignUp")}
                    />
                    <BorderlessButton
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text variant="button" color="secondary">Forgot password?</Text>
                    </BorderlessButton>
                </Box>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    text:{
        width:170,
        textAlign:'center',
        fontSize:10,
        color:'white',
    },
    title: {
        color:'white',
        fontSize:33
    },
    content: {
        borderRadius:200,
        width: 300,
        height: 300,
        backgroundColor:'rgba(94,94,94,0.34)',
        marginBottom:hp(10),

    },
    image: {
        width: 300,
        height: 200,
        marginTop:hp(5)
    }
});

export default Welcome;
