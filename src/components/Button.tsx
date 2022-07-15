import React, {ReactNode} from "react";
import {StyleSheet} from "react-native";
import {Text, useTheme} from "./Theme";
import {RectButton, RectButtonProperties} from "react-native-gesture-handler";

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
    },
});

interface ButtonProps {
    variant: "default" | "primary";
    label?: string;
    onPress: () => void;
    children?: ReactNode;
    style?: RectButtonProperties["style"];
    disabled?: boolean;
}

const Button = ({
    variant,
    label,
    onPress,
    style,
    children,
    disabled,
}: ButtonProps) => {
    const {colors} = useTheme();
    const backgroundColor =
        variant === "primary" ? colors.primary : colors.background2;
    const color = variant === "primary" ? colors.secondary : colors.secondary;

    return (
        <RectButton
            enabled={!disabled}
            style={[
                styles.container,
                style,
                {backgroundColor, opacity: disabled ? 0.2 : 1},
            ]}
            {...{onPress}}
        >
            {children ? (
                children
            ) : (
                <Text variant="button" style={{color}}>
                    {label}
                </Text>
            )}
        </RectButton>
    );
};

Button.defaultProps = {variant: "default"};

export default Button;
