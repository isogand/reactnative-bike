import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "http://localhost:8000/api";
import axios from "axios";

export default {
    update: async (data: {email: string; name: string}) => {
        const urlUpdate = baseUrl + "/user/update";
        return await axios.post(
            urlUpdate,
            {_method: "PUT", ...data},
            {
                validateStatus: function () {
                    return true;
                },
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization:
                        "Bearer " + (await AsyncStorage.getItem("user-token")),
                },
            }
        );
    },
    get: async () => {
        return await axios.get(baseUrl + "/profile/", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:
                    "Bearer " + (await AsyncStorage.getItem("user-token")),
            },
        });
    },
};
