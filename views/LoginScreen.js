import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  Animated,
  Keyboard,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { ip } from "../ip/ip";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import ValidationComponent from "react-native-form-validator";

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onPressCompleteLogin = this.onPressCompleteLogin.bind(this);
  }

  onPressCompleteLogin = () => {
    this.validate({
      email: { email: true, required: true },
      password: { minlength: 7,required: true },
    });

    if (!this.isFieldInError("email") && !this.isFieldInError("password")) {
      axios
        .post(ip + ":3700/gift/login", {
          email: this.state.email,
          password: this.state.password,
        })
        .then((response) => {
          console.log(response.data);

          const datas = {
            name: response.data.body.full_name,
            Email: response.data.body.email,
            address: response.data.body.address,
            contact: response.data.body.contact,
            id: response.data.body._id,
          };

          AsyncStorage.setItem("token", JSON.stringify(datas))
            .then(() => {
              console.log("It was saved successfully");
            })
            .catch(() => {
              console.log("There was an error saving the product");
            });

          return response.data;
        }).then(()=>{
          this.props.navigation.navigate("Home")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F6F6",
        }}
      >
        <Animated.View
          style={{
            height: hp("18%"),
            justifyContent: "center",
            paddingHorizontal: hp("2.5%"),
            marginTop: 20,
          }}
        >
          <Animated.Text
            style={{
              fontSize: 70,
              fontWeight: "400",

              opacity: 1,
            }}
          >
            Login.
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%"),
            marginBottom: Platform.OS == "android" ? hp("10%") : null,
            marginTop: this.formPosition,
          }}
        >
          <Input
            label="Your email address"
            placeholder="Email address"
            value={this.state.email}
            onChange={(email) => {
              this.setState({ email });
            }}
          />
            {this.isFieldInError("email") &&
            this.getErrorsInField("email").map((errorMessage, key) => (
              <Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                  paddingBottom: 5,
                  fontSize: 12,
                }}
                key={key}
              >
                {errorMessage}
              </Text>
            ))}
          <Input
            label="Your password"
            placeholder="Password"
            value={this.state.password}
            onChange={(password) => {
              this.setState({ password });
            }}
          />
            {this.isFieldInError("password") &&
            this.getErrorsInField("password").map((errorMessage, key) => (
              <Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                  paddingBottom: 5,
                  fontSize: 12,
                }}
                key={key}
              >
                {errorMessage}
              </Text>
            ))}
          <Text
            style={{
              fontWeight: "500",
              color: "gray",
            }}
          >
            Don't have an Account?{" "}
            <Text
              style={{
                color: "#F08C4F",
                fontSize: 15,
              }}
              onPress={() => this.props.navigation.navigate("Register")}
            >
              SignUp
            </Text>
          </Text>
        </Animated.View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%"),
          }}
        >
          <ImageBackground
            source={require("../assets/login_bg_1.jpg")}
            style={{
              flex: 1,
              width: null,
              height: hp("72%"),
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                paddingBottom: hp("5%"),
              }}
            >
              <Button
                fullWidth
                onPress={this.onPressCompleteLogin}
                backgroundColor="#F08C4F"
                text="Login"
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
