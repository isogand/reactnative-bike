import React, { forwardRef } from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';


import {Box, useTheme} from "../../../components";
import RoundIcon from "../../../components/RoundIcon";


interface TextInputProps extends RNTextInputProps {
    icon: string;
    error?: string;
    touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(({ icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const color = !touched ? "body" : error ? 'danger' : 'primary';
    const backgroundColor ="#a9a9a9";
    const themeColor = backgroundColor;


    return (
        <Box
            flexDirection="row"
            alignItems="center"
            height={48}
            borderRadius="m"
            backgroundColor={color}
            padding="s"
        >
            <Box padding="s">
                <Icon name={icon} size={16} color={themeColor} />
            </Box>
            <Box flex={1}>
                <RNTextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor={themeColor}
                    {...{ ref }}
                    {...props}
                />
            </Box>
            {touched && (
                <RoundIcon
                    name={!error ? "check" : "x"}
                    size={SIZE}
                    backgroundColor={!error ? "primary2" : 'danger'}
                    color="background"
                />
            )}
        </Box>
    );
});

export default TextInput;
