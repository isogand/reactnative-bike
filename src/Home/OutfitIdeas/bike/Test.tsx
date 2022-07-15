import React, {useState} from "react";
import {View, TextInput, Button} from "react-native";
import {useFormik} from "formik";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Test = () => {
    const [fileContent, setFileContent] = useState("");
    const [fileUri, setFileUri] = useState("");

    const onChooseImagePress = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
            setFileContent(result.uri);
            setFileUri(result.uri.toString());
        }
    };
    const formData = new FormData();
    formData.append("photo", {
        uri: fileContent,
        name: fileContent.split("/").pop(),
        type: "images/jpg",
    });

    const formik = useFormik({
        initialValues: {title: ""},
        onSubmit: async () => {
            try {
                let result = await fetch(
                    "http://localhost:8000/api/imageadd/",
                    {
                        method: "POST",
                        body: formData,
                        // ?body: "{}",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "multipart/form-data",
                            Authorization:
                                "Bearer " +
                                (await AsyncStorage.getItem("user-token")),
                        },
                    }
                );
                result = await result.text();
                console.log(result);
            } catch (error) {
                console.log("Error3", error);
            }
        },
    });
    return (
        <View>
            {/*<Text>{fileUri}</Text>*/}
            <TextInput
                onChangeText={formik.handleChange("title")}
                value={formik.values.title}
                label="Title"
                placeholder="e.g My Awesome Selfie"
            />

            <Button
                onPress={() => {
                    onChooseImagePress();
                }}
                title="upload"
            >
                Choose image...
            </Button>
            <Button title="submit" onPress={formik.handleSubmit}>
                Enter Picture
            </Button>
        </View>
    );
};
export default Test;
