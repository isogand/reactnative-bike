import {Platform} from "react-native";

export const getUrl = (url : string) => {
    const hostname = Platform.OS === "android" ? "10.0.3.2" : "172.20.10.11";
    return `http://${hostname}:8000` + (url?.startsWith("/") ? url : `/${url}`);
}