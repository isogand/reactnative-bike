/// <reference types="react" />
import { Text, Image } from "react-native";
export interface IMultiSelectDataTypes {
    id: number;
    value: string;
    isChecked: boolean;
    data?: any;
}
export interface IMultiSelectProps {
    height?: number;
    width?: number;
    darkMode?: boolean;
    imageWidth?: number;
    TextComponent?: any;
    imageHeight?: number;
    ImageComponent?: any;
    placeholder?: string;
    arrowImageStyle?: any;
    Spinner?: any;
    spinnerSize?: number;
    spinnerColor?: string;
    doneButtonText?: string;
    menuItemTextStyle?: any;
    disableAbsolute?: boolean;
    doneButtonTextStyle?: any;
    placeholderTextStyle?: any;
    buttonContainerStyle?: any;
    menuBarContainerStyle?: any;
    multiSelectionText?: string;
    doneButtonShadowColor?: string;
    menuBarContainerWidth?: number;
    menuBarContainerHeight?: number;
    disableFilterAnimation?: boolean;
    doneButtonBackgroundColor?: string;
    data: Array<IMultiSelectDataTypes>;
    onSelect: (selectedItems: Array<IMultiSelectDataTypes>) => void;
    onDoneButtonPress?: () => void;
}
declare const RNMultiSelect: {
    (props: IMultiSelectProps): JSX.Element;
    defaultProps: {
        darkMode: boolean;
        TextComponent: typeof Text;
        ImageComponent: typeof Image;
        disableAbsolute: boolean;
        data: IMultiSelectDataTypes[];
    };
};
export default RNMultiSelect;
