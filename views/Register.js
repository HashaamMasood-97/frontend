import React, { Component } from "react";
import { View, ImageBackground, Platform, Animated, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Input from "../components/Input";
import Button from "../components/Button";
import ValidationComponent from "react-native-form-validator";
import { ip } from "../ip/ip";
import { Alert } from "react-native";
import axios from "axios";

class Register extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
    };

    this.onPressCompleteRegister = this.onPressCompleteRegister.bind(this);
  }



  onPressCompleteRegister = () => {
    this.validate({
      full_name: { minlength: 3, required: true },
      contact: { minlength: 7, required: true, numbers: true },
      address: { required: true },
      email: { email: true, required: true },
      password: { minlength: 7, required: true },
    });

    if (
      !this.isFieldInError("full_name") &&
      !this.isFieldInError("contact") &&
      !this.isFieldInError("email") &&
      !this.isFieldInError("address") &&
      !this.isFieldInError("password")
    ) {
      axios
        .post(ip + ":3700/gift/register", {
          full_name: this.state.full_name,
          email: this.state.email,
          password: this.state.password,
          address: this.state.address,
          contact: this.state.contact,
        })
        .then((response) => {
          Alert.alert(
            response.data.header.message,
            "",
            [
              {
                text: "OK",
                onPress: () => {
                  if (response.data.header.error === 0) {
                   setTimeout(()=>this.props.navigation.navigate("LoginScreen"),2000);
                  } else {
                    console.log("Ok");
                  }
                },
              },
            ]
          );
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
            Signup.
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            flex: 3,
            paddingHorizontal: hp("2.5%"),
            marginBottom: Platform.OS == "android" ? hp("10%") : null,
            marginTop: this.formPosition,
          }}
        >
          <Input
            label="Your name"
            placeholder="Enter your Full name"
            value={this.state.full_name}
            onChange={(full_name) => {
              this.setState({ full_name });
            }}
          />
          {this.isFieldInError("full_name") &&
            this.getErrorsInField("full_name").map((errorMessage, key) => (
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
            label="Your contact number"
            placeholder="Contact"
            value={this.state.contact}
            onChange={(contact) => {
              this.setState({ contact });
            }}
          />
          {this.isFieldInError("contact") &&
            this.getErrorsInField("contact").map((errorMessage, key) => (
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
            label="Your address"
            placeholder="Address"
            value={this.state.address}
            onChange={(address) => {
              this.setState({ address });
            }}
          />
          {this.isFieldInError("address") &&
            this.getErrorsInField("address").map((errorMessage, key) => (
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
            Already have an Account?{" "}
            <Text
              style={{
                color: "#F08C4F",
                fontSize: 15,
              }}
              onPress={() => this.props.navigation.navigate("LoginScreen")}
            >
              Login
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
                onPress={this.onPressCompleteRegister}
                backgroundColor="#F08C4F"
                text="Complete registration"
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Register;
