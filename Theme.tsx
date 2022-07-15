import React, {ReactNode} from "react";
import {Dimensions, ViewStyle, TextStyle, ImageStyle} from "react-native";
import {
    createTheme,
    createText,
    createBox,
    useTheme as useReTheme,
    ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";

const {width} = Dimensions.get("window");
export const aspectRatio = width / 374;

export const palette = {
    white: "#FFFFFF",
    cyan: "#C4C4C4",
    cyan2: "#15d920",
    lightCyan: "#E7F9F7",
    darkBlue: "#313131",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    darkPink: "#FF0058",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
    grey: "#F4F0EF",
    darkGrey: "#808080",
    darkgrey: "#313131",
    grey2: "#2C2C2C",
    gray3: "rgba(79,79,79,0.42)",
    black: "#000000",
    v1: "#9b7f7e",
    v2: "#798594",
    v3: "#94897B",
    v4: "#79907A",
    v5: "#8D7393",
    v6: "#5D6696",
    c1: "rgba(255,168,241,0.47)",
    c2: "rgba(132,196,255,0.49)",
    c3: "rgba(246,54,54,0.51)",
    c4: "rgba(162,255,89,0.54)",
};

const theme = createTheme({
    colors: {
        background: palette.white,
        background2: palette.grey,
        background3: palette.darkgrey,
        background4: palette.grey2,
        background5: palette.black,
        background6: palette.gray3,
        b1: palette.v1,
        b2: palette.v2,
        b3: palette.v3,
        b4: palette.v4,
        b5: palette.v5,
        b6: palette.v6,
        i1:palette.c1,
        i2:palette.c2,
        i3:palette.c3,
        i4:palette.c4,
        primary: palette.cyan,
        primary2: palette.cyan2,
        primaryLight: palette.lightCyan,
        secondary: palette.darkBlue,
        info: palette.darkGrey,
        edit: palette.lightBlue,
        danger: palette.darkPink,
        body: "#313131",
        darkGrey: "#c4c4c4",
        graph1: palette.orange,
        graph2: palette.yellow,
        drawer1: palette.orange,
        drawer2: palette.yellow,
        drawer3: palette.pink,
        drawer4: palette.violet,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontFamily: "SFProDisplay-Bold",
            fontSize: 80,
            lineHeight: 80,
            color: "background",
            textAlign: "center",
        },
        title1: {
            fontFamily: "SFProDisplay-Semibold",
            fontSize: 28,
            color: "secondary",
        },
        title2: {
            fontFamily: "SFProDisplay-Semibold",
            fontSize: 24,
            lineHeight: 30,
            color: "secondary",
        },
        title3: {
            fontFamily: "SFProDisplay-Semibold",
            fontSize: 16,
            color: "secondary",
        },
        body: {
            fontFamily: "SFProDisplay-Regular",
            fontSize: 16,
            lineHeight: 24,
            color: "body",
            backgroundColor: "darkGrey",
            // backgroundColor:'#fff'
        },
        body2: {
            fontFamily: "SFProDisplay-Regular",
            fontSize: 16,
            lineHeight: 24,
            color: "darkGrey",
        },
        body3: {
            fontFamily: "SFProDisplay-Regular",
            fontSize: 16,
            lineHeight: 24,
            color: "body",
        },
        button: {
            fontFamily: "SFProDisplay-Medium",
            fontSize: 15,
            color: "secondary",
        },
        header: {
            fontSize: 12,
            lineHeight: 24,
            fontFamily: "SFProDisplay-Semibold",
            color: "secondary",
        },
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
});

export const ThemeProvider = ({children}: {children: ReactNode}) => (
    <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>
);
export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export const makeStyles =
    <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
    () => {
        const currentTheme = useTheme();
        return styles(currentTheme);
    };
