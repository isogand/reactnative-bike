import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Text } from '../../components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


interface FooterProps {
    title: string;
    action: string;
    onPress: () => void;
}

const Footer = ({ title, action, onPress }: FooterProps) => {
    return (
        <>
            {/*<SocialLogin />*/}
            <Box alignItems="center" >
                <BorderlessButton {...{ onPress }}>
                    <Text style={{ marginTop:wp(15)}} variant="button" color="background">
                        <Text style={{color:"#575757"}}>{`${title}`}</Text>
                        <Text style={{color:"#ffffff"}} color="primary">{action}</Text>
                    </Text>
                </BorderlessButton>
            </Box>
        </>
    )
}

export default Footer;
