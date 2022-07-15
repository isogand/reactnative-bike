import React, { useRef } from "react";
import {View,Text, StyleSheet, Dimensions, FlatList} from "react-native";
import Animated, {
    useAnimatedScrollHandler,
    useDerivedValue,
    useSharedValue,
    useAnimatedStyle,
    interpolateColor,
} from "react-native-reanimated";



import Slide,{SLIDE_HEIGHT} from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
import {AuthNavigationProps} from "../../components/Navigation";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#1F1F1F'
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#1F1F1F",
        borderTopLeftRadius: 80,
    },
    pagination: {
        // ...StyleSheet.absoluteFillObject,
        // height: theme.borderRadii.xl,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:wp(-15),
        // marginLeft:wp(-100)
    },
})
const slides = [
    {
        title: "COWEBOY",
        index:0,
        subtitle: "Tour De Prambanan",
        description: "Tour De Prambanan is an annual menus Multiple stage bicycle Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#313131",
        picture: require("../../../assets/image/4.png"),
    },
    {
        title: "Playful",
        index:1,
        subtitle: "Style Your Way",
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
        color: "#bcefc3",
        picture: require("../../../assets/image/3.png"),
    },
    {
        title: "Eccentric",
        index:2,
        subtitle: "Your Style, Your Way",
        description: "Create your individual & unique style and look amazing everyday",
        color: "#FFE4D9",
        picture: require("../../../assets/image/4.png"),
    }
];

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset }) => {
            x.value = contentOffset.x;
        },
    });
    const slider = useAnimatedStyle(() => ({
        backgroundColor:'#313131',
    }));
    const background = useAnimatedStyle(() => ({
        backgroundColor: '#313131',
    }));
    const currentIndex = useDerivedValue(() => x.value / width);
    const footerStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -x.value }],
    }));



    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, slider]}>
                <Animated.ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    decelerationRate="fast"
                    scrollEventThrottle={16}
                    onScroll={onScroll}
                >
                    <Slide/>
                </Animated.ScrollView>
            </Animated.View>


            <View style={styles.footer}>
                <Animated.View style={[StyleSheet.absoluteFill, background]} />
                <View style={styles.footerContent}>
                    <Animated.ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={width}
                        decelerationRate="fast"
                        scrollEventThrottle={16}
                        onScroll={onScroll}
                    >
                        <Animated.View
                            style={[
                                {
                                    flex: 1,
                                    flexDirection: "row",
                                    width: width * slides.length ,
                                },
                                // footerStyle,
                            ]}
                        >
                            {slides.map(({ subtitle, description }, index) => {
                                const last = index === slides.length - 1;
                                return (
                                    <Subslide
                                        key={index}
                                        onPress={() => {
                                            if (last) {
                                                // navigation.navigate("Login");
                                                navigation.navigate("Welcome");
                                            } else {
                                                scroll.current
                                                    ?.getNode()
                                                    .scrollTo({ x: width * (index + 1), animated: true });
                                            }
                                        }}
                                        {...{ subtitle, description, last }}
                                    />
                                );
                            })}

                        </Animated.View>
                    </Animated.ScrollView>

                   <View style={[{position:'absolute',left:180,top:20}]}>
                       <View style={styles.pagination}>
                           {slides.map((_, index) => (
                               <Dot key={index} currentIndex={currentIndex} {...{ index }} />
                           ))}
                       </View>
                   </View>

                </View>
            </View>
        </View>
    );
}

export default Onboarding;
