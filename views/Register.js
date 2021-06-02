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
import { register } from "./AuthFunctions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      contact: "",
      address:""
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);

    this.onPressCompleteRegister = this.onPressCompleteRegister.bind(this);
  }

  onChangeName(inputText) {
    this.setState({
      full_name: inputText,
    });
  }

  onChangePassword(inputText) {
    this.setState({
      password: inputText,
    });
  }

  onChangeEmail(inputText) {
    this.setState({
      email: inputText,
    });
  }

  onChangeContact(inputText) {
    this.setState({
      contact: inputText,
    });
  }


  onChangeAddress(inputText) {
    this.setState({
      address: inputText,
    });
  }


  onPressCompleteRegister = () => {
    const user = {
      full_name: this.state.full_name,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      address: this.state.address,
    };

    const errors = {};
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    errors.email = !user.email.match(emailformat) ? "Invalid Email" : "";
    errors.password =
      user.password.length < 6
        ? "Password should be more than 6 characters"
        : "";
    console.log(errors);

    if (errors.email === "" && errors.password === "") {
      register(user).then(() => {
        this.props.navigation.navigate("Home");
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
            // marginTop: Platform.OS == "android" ? hp("3.75%") : null
          }}
        >
          <Animated.Text
            style={{
              fontSize: 70,
              fontWeight: "400",
              // opacity: this.animatedTitleOpacity
              opacity: 1,
            }}
          >
            Signup.
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            flex: 1.6,
            paddingHorizontal: hp("2.5%"),
            marginBottom: Platform.OS == "android" ? hp("10%") : null,
            marginTop: this.formPosition,
          }}
        >
          {/* form */}
          <Input label="Your name" placeholder="Enter your Full name"  value={this.state.full_name} onChange={this.onChangeName} />
          <Input label="Your contact number" placeholder="Contact" value={this.state.contact} onChange={this.onChangeContact} />
          <Input label="Your address" placeholder="Address" value={this.state.address} onChange={this.onChangeAddress} />
          <Input label="Your email address" placeholder="Email address" value={this.state.email} onChange={this.onChangeEmail} />
          <Input label="Your password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
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
              // height: Platform.OS == "android" ? 470 : 440
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
