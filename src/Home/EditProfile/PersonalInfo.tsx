import React, {useEffect} from "react";
import {ScrollView} from "react-native";

import {Box, Button, Text} from "../../components";

import CheckboxGroup from "./CheckboxGroup";
import TextInput from "../../Authentication/components/Form/TextInput";
import employeeServices from "./Employee";
import {useFormik} from "formik";
import axios from "axios";

const genders = [
    {value: "male", label: "Male"},
    {value: "female", label: "Female"},
];

const PersonalInfo = () => {
    const {setFieldValue, setErrors, errors, isValid, handleSubmit, values} =
        useFormik({
            initialValues: {email: "", name: ""},
            onSubmit: () => {
                update();
                console.log("what");
            },
        });

    const update = async () => {
        const res = await employeeServices.update(values);
        if (res.status === 200) {
            alert(res.data.message);
        } else {
            if (res.data.errors) {
                setErrors(res.data.errors);
            }
        }
    };

    useEffect(() => {
        async function fetchDataEmployee() {
            const res = await employeeServices.get();

            if (res.status === 200) {
                const data = res.data;
                await setFieldValue("name", data.name);
                await setFieldValue("email", data.email);
            } else {
                alert(res.statusText);
            }
        }
        fetchDataEmployee();
    }, []);

    const base_url = "http://localhost:8000";
    const editUserProfile = (image: any) =>
        new Promise((resolve, reject) => {
            const data = new FormData();
            data.append("image", {
                uri: image,
                name: "userProfile.jpg",
                type: "image/jpg",
            });
            data.append("locale", "en");

            return axios
                .post(base_url + "edit-profile", data)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    return (
        <ScrollView>
            <Box padding="m">
                <Text variant="body3" marginBottom="m">
                    Account Information
                </Text>
                <Box marginBottom="m">
                    <TextInput
                        icon="user"
                        placeholder="Name"
                        autoCapitalize="none"
                        autoCompleteType="name"
                        value={values.name}
                        onChangeText={(text) => {
                            setFieldValue("name", text);
                        }}
                    />
                    {errors.name && (
                        <Text style={{color: "red"}}>{errors.name}</Text>
                    )}
                </Box>
                <Box marginBottom="m">
                    <TextInput
                        icon="lock"
                        placeholder="Enter your password"
                        autoCompleteType="password"
                        autoCapitalize="none"
                        secureTextEntry
                    />
                </Box>
                <Box marginBottom="m">
                    <TextInput
                        icon="mail"
                        placeholder="Enter your email"
                        autoCompleteType="email"
                        autoCapitalize="none"
                        value={values.email}
                        onChangeText={(text) => {
                            setFieldValue("email", text);
                        }}
                    />
                    {errors.email && (
                        <Text style={{color: "red"}}>{errors.email}</Text>
                    )}
                </Box>
                <Box marginBottom="m">
                    <TextInput
                        icon="map-pin"
                        placeholder="Address"
                        autoCapitalize="none"
                        autoCompleteType="street-address"
                    />
                </Box>
                <CheckboxGroup options={genders} radio />
                <Box alignItems="center" marginTop="l">
                    <Button
                        disabled={!isValid}
                        style={{
                            borderRadius: 20,
                        }}
                        variant="primary"
                        label="Update"
                        onPress={handleSubmit}
                    />
                </Box>
            </Box>
        </ScrollView>
    );
};

export default PersonalInfo;
