import React from "react";

import {View, Text, TouchableOpacity, Image, StyleSheet} from "react-native";
import Tabs from "../../EditProfile/Tabs";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const SelectOptions = () => {
    const tabs = [
        {
            id: "config",
            title: "Configuration",
            picture: require("../../../../assets/image/Bike/icon/Group1.png"),
        },
        {
            id: "info",
            title: "Personal Info",
            picture: require("../../../../assets/image/Bike/icon/Group5.png"),
        },
        {
            id: "boos",
            title: "ss",
            picture: require("../../../../assets/image/Bike/icon/Group4.png"),
        },
        {
            id: "bet",
            title: "dd",
            picture: require("../../../../assets/image/Bike/icon/Group3.png"),
        },
    ];
    return (
        <Tabs tabs={tabs}>
            <View style={styles.back}>
                <View style={[{flexDirection: "row",marginLeft:wp(3)}]}>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.image2}
                            source={require("../../../../assets/image/Bike/wheel/1.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.image}
                            source={require("../../../../assets/image/Bike/wheel/7.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.image}
                            source={require("../../../../assets/image/Bike/wheel/11.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.image}
                            source={require("../../../../assets/image/Bike/wheel/12.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.back}>
                <View style={[{flexDirection: "row",marginLeft:wp(3)}]}>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.imageph}
                            source={require("../../../../assets/image/Bike/seat/f4.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.imageph}
                            source={require("../../../../assets/image/Bike/seat/f1.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.imageph}
                            source={require("../../../../assets/image/Bike/seat/f2.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.imageph}
                            source={require("../../../../assets/image/Bike/seat/f3.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.back}>
                <View style={[{flexDirection: "row",marginLeft:wp(3)}]}>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.imageph}
                            source={require("../../../../assets/image/Bike/pheromone/f4.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.imageph}
                            source={require("../../../../assets/image/Bike/pheromone/5.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.imageph}
                            source={require("../../../../assets/image/Bike/pheromone/f5.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sq}>
                        <Image
                            style={styles.imageph}
                            source={require("../../../../assets/image/Bike/pheromone/f6.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.back}>
                <Text>sogand</Text>
            </View>
        </Tabs>
    );
};

export default SelectOptions;
const styles = StyleSheet.create({
    back:{
        padding: 40,
        marginLeft: -30,
        marginTop: -20
    },
    container: {
        flex: 1,
        marginBottom: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
    },
    topButtons: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
    },
    button: {
        flex: 1,
        height: 70,
        alignSelf: "stretch",
        borderWidth: 2,
        borderColor: "#484747",
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    image: {
        alignItems: "center",
        justifyContent: "center",
        width: wp(16),
        height:hp(8),
        marginTop: hp(2.5),
        marginLeft: wp(0),

    },
    image2: {
        alignItems: "center",
        justifyContent: "center",
        width: wp(17),
        height:hp(9),
        marginTop: hp(2),
        marginLeft: wp(0),
    },
    imageph: {
        alignItems: "center",
        justifyContent: "center",
        width: wp(16),
        height:hp(9),
        marginTop: hp(2),
        marginLeft: wp(0),
    },
    sq: {
        flex: 1,
        margin: 10,
        backgroundColor: "#7A7A7A",
        height:wp(25),
        borderRadius: 10,
        marginTop: -10,
    },
    button3: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
        padding: 52,
    },
    content: {
        flex: 1,
        alignSelf: "stretch",
    },
    circleContainer: {
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap",
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});
