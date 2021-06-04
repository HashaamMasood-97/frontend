import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Button from "../components/Button";
import AsyncStorage from "@react-native-community/async-storage";

class Login extends Component {
  constructor(props) {
    super(props);
    this.getData();
  }

  onPressRegister = () => {
    this.props.navigation.navigate("Register");
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");

      if (value !== null) {
        this.props.navigation.navigate("Home");
      } else console.log("Logged Out");
    } catch (e) {}
  };

  onPressLoginScreen = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value != null) {
        this.props.navigation.navigate("Home");
      } else {
        this.props.navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#F6F6F6",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        
          <Text
            style={{
            
              fontSize: 80,
              fontWeight: "bold",
            }}
          >
            Gift.
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "400",
            }}
          >
            your 24h Gift.store
          </Text>
        </View>
        <View
          style={{
            flex: 2,
          }}
        >
      
          <ImageBackground
            source={require("../assets/login_bg_1.jpg")}
            style={{
              flex: 1,
              width: null,
              height: hp("78%"),
         
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: hp("5%"),
                  paddingHorizontal: hp("2.5%"),
                }}
              >
                <Button
                  onPress={this.onPressRegister}
                  backgroundColor="#F08C4F"
                  text="Register"
                />
                <Button
                  backgroundColor="#5BBC9D"
                  text="Login"
                  onPress={this.onPressLoginScreen}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Login;
