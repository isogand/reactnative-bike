import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, useTheme } from "../../components";
import {HomeRoutes} from "../../components/Navigation";
import {Theme} from "../../components/Theme";
import RoundIcon from "../../components/RoundIcon";
import {StyleSheet, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";


interface BaseDrawerItem {
    icon: string;
    label: string;
    text:string;
    color: keyof Theme["colors"];
}

interface ScreenDrawerItem extends BaseDrawerItem {
    screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
    onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon,text, label, color, ...props }: DrawerItemProps) => {
    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <RectButton
            onPress={() =>
                "screen" in props
                    ? navigation.navigate(props.screen)
                    : props.onPress(navigation)
            }
            style={{ borderRadius: theme.borderRadii.m }}
        >
           <Box flexDirection="row" alignItems="center" padding="m">
             <View style={styles.container}>
                     <View style={{margin:10}}>
                         <RoundIcon
                             name={icon}
                             backgroundColor={color}
                             iconRatio={0.5}
                             color="background"
                             size={36}
                         />
                     </View>
                     <View style={{marginLeft:-10}}>
                         <Text style={styles.label} variant="button"  marginLeft="m">
                             {label}
                         </Text>
                         <Text style={styles.text} variant="button"  marginLeft="m">
                             {text}
                         </Text>
                     </View>
             </View>
          </Box>
        </RectButton>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'rgba(12,12,12,0.13)',
        borderRadius:15,
        width:wp('60'),
        height:hp('7'),
        marginLeft:wp('-10')
    },
    label: {
        flex:1,
        fontWeight:'bold',
        color:'#fff',
        marginTop:hp(1.3),
        fontSize:hp(1.6)
    },
    text: {
        flex:1,
        fontWeight:'normal',
        color:'#565555',
        fontSize:hp(1.15)
    }
});
export default DrawerItem;
