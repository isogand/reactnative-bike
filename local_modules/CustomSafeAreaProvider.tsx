import React, {PropsWithChildren} from "react";
import {
    EdgeInsets,
    SafeAreaInsetsContext,
    SafeAreaProvider as SafeAreaProviderReal,
} from "react-native-safe-area-context";

type Props = {
    customInsets: EdgeInsets;
};
const CustomSafeAreaProvider = ({
    customInsets,
    children,
}: PropsWithChildren<Props>) => {
    if (!__DEV__) {
        return <SafeAreaProviderReal>{children}</SafeAreaProviderReal>;
    }

    return (
        <SafeAreaInsetsContext.Provider value={customInsets}>
            {children}
        </SafeAreaInsetsContext.Provider>
    );
};

export default CustomSafeAreaProvider;