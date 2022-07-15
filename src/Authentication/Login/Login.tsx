import React from "react";
import {CommonActions} from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useFormik } from "formik";
import * as Yup from "yup";


import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import {Container, Button, Text, Box} from "../../components";
import {AuthNavigationProps} from "../../components/Navigation";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getUrl} from "../../utils";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});


const Login = ({ navigation }: AuthNavigationProps<"Login">) => {

    const {
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: "", password: "", remember: false },
        onSubmit: () =>{
            login()
        }
    });
    async function login(){
        let result = await fetch(getUrl("/api/signin"),{
            method:'POST' ,
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            body:JSON.stringify(values)
        });
        result = await result.json();
        await AsyncStorage.setItem("user-token", result.token)

         console.log(AsyncStorage);
        // history.push("/add");

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: "Home" }],
            })
        );
    }




    const footer = (
        <Footer
            title="Don't have an account?"
            action="Sign Up here"
            onPress={() => navigation.navigate("SignUp")}
        />
    );

    return (
        <Container pattern={0} {...{ footer }}>
            <Text style={{color:'white',alignItems:'flex-start',marginLeft:40}} variant="title1"  >
                Login
            </Text>
            <Text style={{color:'#575757',marginLeft:40,marginBottom:15,alignItems:'flex-start',fontSize:15}}  marginBottom="l">
                Please sign in to continue.
            </Text>
            <Box  margin ='xl'>
                <Box marginBottom="l">
                    <TextInput
                        icon="mail"
                        placeholder="Enter your email"
                        // onChangeText={handleChange("email")}
                        onChangeText={
                            (text)=>{
                                setFieldValue("email",text)
                            }
                        }
                        onBlur={handleBlur("email")}
                        error={errors.email}
                        touched={touched.email}
                        autoCompleteType="email"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        //onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>
                <TextInput
                    icon="lock"
                    placeholder="Enter your password"
                    onChangeText={
                        (text)=>{
                            setFieldValue("password",text)
                        }
                    }
                    onBlur={handleBlur("password")}
                    error={errors.password}
                    touched={touched.password}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    //onSubmitEditing={() => handleSubmit()}
                    secureTextEntry
                />
                <Box
                    flexDirection="row"
                    justifyContent="space-between"
                    marginVertical="s"
                    alignItems="center"
                    marginTop='xl'
                >
                    <Checkbox
                        label="Remember me"
                        checked={values.remember}
                        onChange={() => setFieldValue("remember", !values.remember)}
                    />
                    <BorderlessButton
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text variant="button" color="primary">
                            Forgot Password ?
                        </Text>
                    </BorderlessButton>
                </Box>
                <Box  alignItems="center" marginTop="l">
                    <Button
                        variant="primary"
                        label="Login"
                        onPress={login}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
