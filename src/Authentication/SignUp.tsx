import React, {useRef, useState} from "react";
import {TextInput as RNTextInput, View} from "react-native";
import {useFormik} from "formik";
import * as Yup from "yup";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Container, Button, Text, Box} from "../components";
import {AuthNavigationProps} from "../components/Navigation";

import Footer from "./components/Footer";
import TextInput from "./components/Form/TextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getUrl} from "../utils";

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    password_confirmation: Yup.string()
        .equals([Yup.ref("password")], "Passwords don't match")
        .required("Required"),
});

const SignUp = ({navigation}: AuthNavigationProps<"SignUp">) => {
    // useEffect(() =>{
    //     if(localStorage.getItem('user-info'))
    //     {
    //         history.push("/add")
    //     }
    // },[])

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // const history = useHistory ();
    const {
        handleBlur,
        handleSubmit,
        handleChange,
        values,
        setFieldValue,
        errors,
        touched,
    } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: {
            email: "",
            password: "",
            password_confirmation: "",
            name: "",
            confirmPassword:""
        },
        //onSubmit: () => navigation.navigate('Home')
        onSubmit: () => {
            signUp();
        },
    });
    console.log(errors);

    async function signUp() {
        // let values = {name , password , email}

        console.log("Err", values);
        try {
            let result = await fetch(
                getUrl("/api/create-account"),
                {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            result = await result.json();
            //localStorage.setItem("user-info", JSON.stringify(result))
            console.log(result, result.token);
            await AsyncStorage.setItem("user-token", result.token);
            navigation.navigate("Home");
        } catch (error) {
            console.log("Error3", error);
        }
    }

    // const password = useRef<RNTextInput>(null);
    //const confirmPassword = useRef<RNTextInput>(null);
    const footer = (
        <Footer

            title="Already have an account?"
            action="Login here"
            onPress={() => navigation.navigate("Login")}
        />
    );

    return (
        <Container pattern={1} footer={footer}>
            <Box  padding="xl" justifyContent="center" flex={2}>
                <View style={{marginBottom:wp(3)}}>
                    <Text
                        style={{color: "white", alignItems: "flex-start"}}
                        variant="title1"
                    >
                        Create account
                    </Text>
                    <Text
                        style={{
                            color: "#575757",
                            marginBottom: wp(1),
                            alignItems: "flex-start",
                            fontSize: 11,
                        }}
                        variant="body2"
                        marginBottom="l"
                    >
                        Let us know your email and password.
                    </Text>
                </View>
                <Box>
                    <Box marginBottom="l">
                        <TextInput
                            icon="mail"
                            placeholder="Enter your email"
                            // onChangeText={handleChange('email')}
                            onChangeText={(text) => {
                                setFieldValue("email", text);
                            }}
                            //onBlur={handleBlur('email')}
                            error={errors.email}
                            touched={touched.email}
                            autoCompleteType="email"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            //onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <Box marginBottom="l">
                        <TextInput
                            icon="lock"
                            placeholder="Enter your name"
                            onChangeText={(text) => {
                                setFieldValue("name", text);
                            }}
                            onBlur={handleBlur("confirmPassword")}
                            error={errors.confirmPassword}
                            // touched={touched.confirmPassword}
                            autoCompleteType="name"
                            autoCapitalize="none"
                            returnKeyType="go"
                            returnKeyLabel="go"
                            //onSubmitEditing={() => handleSubmit()}
                            // secureTextEntry
                        />
                    </Box>
                    <Box marginBottom="l">
                        <TextInput
                            // ref={password}
                            icon="lock"
                            placeholder="Enter your password"
                            //onChange={(e)=>setPassword(e.target.value)}
                            onChangeText={(text) => {
                                setFieldValue("password", text);
                            }}
                            // onChangeText={handleChange('password')}
                            onBlur={handleBlur("password")}
                            error={errors.password}
                            // touched={touched.password}
                            autoCompleteType="password"
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            //onSubmitEditing={() => confirmPassword.current?.focus()}
                            secureTextEntry
                        />
                    </Box>
                    <TextInput
                        //ref={confirmPassword}
                        icon="lock"
                        placeholder="Confirm your password"
                        onChangeText={(text) => {
                            setFieldValue("password_confirmation", text);
                            console.log(text);
                        }}
                        // onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur("confirmPassword")}
                        error={errors.confirmPassword}
                        // touched={touched.confirmPassword}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        //onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box alignItems="center" marginTop="xl">
                        <Button
                            variant="primary"
                            label="Create your account"
                            onPress={handleSubmit}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
