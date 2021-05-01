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
import { login } from "./AuthFunctions";



class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.onPressCompleteLogin = this.onPressCompleteLogin.bind(this);
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
    
      onPressCompleteLogin = () => {
        const user = {
          email: this.state.email,
          password: this.state.password,
        };
    
        const errors = {};
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        errors.email = !user.email.match(emailformat) ? "Invalid Email" : "";
        errors.password =
          user.password.length < 8
            ? "Password should be more than 7 characters"
            : "";
        console.log(errors);
    
        if (errors.email === "" && errors.password === "") {
          login(user).then(() => {
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
          {/* form */}
          <Input label="Your email address" placeholder="Email address" value={this.state.email} onChange={this.onChangeEmail}/>
          <Input label="Your password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
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
                fontSize: 15
              }}
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
