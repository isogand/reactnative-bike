import { ViewStyle, ImageStyle, TextStyle } from "react-native";
import { IMultiSelectDataTypes } from "./RNMultiSelect";
interface Style {
    arrowImageStyle: ImageStyle;
    buttonContainerGlue: ViewStyle;
    arrowImageContainer: ViewStyle;
    doneButtonTextStyle: TextStyle;
    checkboxContainerStyle: ViewStyle;
    menuBarItemContainerGlue: ViewStyle;
    listStyle: ViewStyle;
    spinnerContainer: ViewStyle;
}
export declare const _placeholderTextStyle: (theme: string, selectedItem: Array<IMultiSelectDataTypes>) => TextStyle;
export declare const _menuItemContainer: () => ViewStyle;
export declare const _menuBarContainer: (theme: string, menuBarContainerHeight?: number, menuBarContainerWidth?: number | undefined) => ViewStyle;
export declare const _menuButtonContainer: (theme: string, height?: number, width?: number) => ViewStyle;
export declare const _imageStyle: (height?: number, width?: number) => ImageStyle;
export declare const _menuItemTextStyle: (theme: string) => TextStyle;
export declare const _doneButtonStyle: (backgroundColor?: string, shadowColor?: string) => ViewStyle;
declare const _default: Style;
export default _default;
