import * as React from "react";
import { Animated, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, TouchableWithoutFeedbackProps } from "react-native";
declare type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
declare type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
declare type BaseTouchableProps = Pick<TouchableWithoutFeedbackProps, Exclude<keyof TouchableWithoutFeedbackProps, "onPress">>;
export interface IBouncyCheckboxProps extends BaseTouchableProps {
    size?: number;
    text?: string;
    iconStyle?: any;
    fillColor?: string;
    isChecked?: boolean;
    unfillColor?: string;
    disableText?: boolean;
    ImageComponent?: any;
    bounceEffect?: number;
    bounceFriction?: number;
    useNativeDriver?: boolean;
    disableBuiltInState?: boolean;
    TouchableComponent?: any;
    iconComponent?: React.ReactNode;
    textComponent?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: CustomTextStyleProp;
    iconImageStyle?: CustomStyleProp;
    textContainerStyle?: CustomStyleProp;
    checkIconImageSource?: ImageSourcePropType;
    onPress?: (checked: boolean) => void;
}
interface IState {
    checked: boolean;
    springValue: Animated.Value;
}
declare class BouncyCheckbox extends React.Component<IBouncyCheckboxProps, IState> {
    constructor(props: IBouncyCheckboxProps);
    componentDidMount(): void;
    onPress: () => void;
    renderCheckIcon: () => JSX.Element;
    renderCheckboxText: () => false | {};
    render(): JSX.Element;
}
export default BouncyCheckbox;
