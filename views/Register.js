import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Platform,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Input from "../components/Input";
import Button from "../components/Button";
import ValidationComponent from "react-native-form-validator";
import { ip } from "../ip/ip";
import axios from "axios";
import { FancyAlert } from "react-native-expo-fancy-alerts";

class Register extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      visible1: false,
      visible2: false,
      message: "",
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
          this.setState({ message: response.data.header.message });

          if (response.data.header.error === 0) {
            this.setState({ visible1: true });
          } else {
            this.setState({ visible2: true });
          }
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
            bool={true}
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
        <FancyAlert
          visible={this.state.visible1}
          icon={
            <View
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#5BBC9D",
                borderRadius: 50,
                width: "100%",
              }}
            >
              <Text>🤓</Text>
            </View>
          }
          style={{ backgroundColor: "white" }}
        >
          <Text
            style={{ marginTop: -16, marginBottom: 32, fontWeight: "bold" }}
          >
            {this.state.message}
          </Text>
          <TouchableOpacity
            style={{
              width: "70%",
              height: 30,
              backgroundColor: "#5BBC9D",
              borderRadius: 50,
              marginBottom: 5,
              justifyContent: "center",
            }}
            onPress={() => {
              this.props.navigation.navigate("LoginScreen");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
              }}
            >
              Ok
            </Text>
          </TouchableOpacity>
        </FancyAlert>
        <FancyAlert
          visible={this.state.visible2}
          icon={
            <View
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
                borderRadius: 50,
                width: "100%",
              }}
            >
              <Text>🤓</Text>
            </View>
          }
          style={{ backgroundColor: "white" }}
        >
          <Text
            style={{ marginTop: -16, marginBottom: 32, fontWeight: "bold" }}
          >
            {this.state.message}
          </Text>
          <TouchableOpacity
            style={{
              width: "70%",
              height: 30,
              backgroundColor: "red",
              borderRadius: 50,
              marginBottom: 5,
              justifyContent: "center",
            }}
            onPress={() => {
              this.setState({ visible2: false });
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
              }}
            >
              Ok
            </Text>
          </TouchableOpacity>
        </FancyAlert>
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
