import { AtLeastOneResponsiveValue, BaseTheme, Dimensions, PropValue, ResponsiveValue } from './types';
export declare type StyleTransformFunction<Theme extends BaseTheme, K extends keyof Theme | undefined, TVal> = (params: {
    value: TVal | undefined | null;
    theme: Theme;
    themeKey?: K;
}) => TVal | undefined | null;
export declare const getValueForScreenSize: <Theme extends BaseTheme, TVal>({ responsiveValue, breakpoints, dimensions, }: {
    responsiveValue: AtLeastOneResponsiveValue<TVal, Theme, Theme["breakpoints"], { [Key in keyof Theme["breakpoints"]]: Record<Key, TVal>; }>;
    breakpoints: Theme["breakpoints"];
    dimensions: Dimensions;
}) => TVal | undefined;
export declare const isResponsiveObjectValue: <Theme extends BaseTheme, TVal>(val: ResponsiveValue<TVal, Theme>, theme: Theme) => val is AtLeastOneResponsiveValue<TVal, Theme, Theme["breakpoints"], { [Key in keyof Theme["breakpoints"]]: Record<Key, TVal>; }>;
export declare const getResponsiveValue: <TVal extends PropValue, Theme extends BaseTheme, K extends keyof Theme | undefined>(propValue: ResponsiveValue<TVal, Theme>, { theme, transform, dimensions, themeKey, }: {
    theme: Theme;
    transform?: StyleTransformFunction<Theme, K, TVal> | undefined;
    dimensions: Dimensions;
    themeKey?: K | undefined;
}) => TVal | (K extends keyof Theme ? Theme[K][keyof Theme[K]] : never) | null | undefined;
