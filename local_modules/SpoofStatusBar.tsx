import React, {useEffect, useState} from "react";
import {View, Text, Dimensions, ViewStyle} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type Props = {
    width: number;
    height: number;
    color: ViewStyle["backgroundColor"];
};

const SpoofStatusBar = (props: Props) => {
    const getTime = () => {
        return (
            new Date()
                .toLocaleTimeString()
                .split(":")
                .slice(0, 2)
                // .map((item) => (item.length < 2 ? `0${item}` : item))
                .join(":")
        );
    };
    const [time, setTime] = useState(getTime());
    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log("s");
            setTime(getTime());
        }, 1000 * 60);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <View
            style={{
                width: "100%",
                height: props.height,
                position: "absolute",
                top: 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <View
                style={{
                    flex: 0.23,
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: height * 0.0178,
                        marginLeft: width * 0.02,
                        color: props.color,
                    }}
                >
                    {time}
                </Text>
            </View>
            <View
                style={{
                    flex: 0.23,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View style={{flex: 0.27}} />
                <Ionicons
                    name="wifi"
                    size={height * 0.021}
                    color={props.color}
                />
                <View style={{flex: 0.1}} />
                <Ionicons
                    name="battery-charging"
                    size={height * 0.028}
                    color={props.color}
                />
            </View>
        </View>
    );
};

export default SpoofStatusBar;