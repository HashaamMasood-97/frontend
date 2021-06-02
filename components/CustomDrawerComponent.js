import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-community/async-storage";

class CustomDrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.getData();
  }
  state = {
    name: "",
    email: "",
  };

  getData = async () => {
    try {
      await AsyncStorage.getItem("token").then((value) => {
        const data = JSON.parse(value);
        this.setState({ name: data.name });
        this.setState({ email: data.Email });
        console.log(value);
      });
    } catch (e) {}

    AsyncStorage.getItem("cart").then((value) => console.log("value ", value));
  };

  onPressLogout = async () => {
    try {
      await AsyncStorage.removeItem("token", (err) =>
        console.log("token", err)
      ).then(() => {
        this.props.navigation.navigate("Login");
        console.log("removed");
      });
    } catch (error) {
      console.log("not removed");
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          source={require("../assets/drawer_bg.jpg")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(91, 188, 157, 0.9)",
              paddingTop: wp("14%"),
              paddingHorizontal: wp("9.5%"),
              paddingBottom: wp("7%"),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Menu
              </Text>
              <Icon
                onPress={() => this.props.navigation.closeDrawer()}
                name="ios-close"
                color="white"
                size={50}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                flex: 0.3,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: wp("17%"),
                    height: wp("17%"),
                    overflow: "hidden",
                    borderRadius: wp("10%"),
                    marginRight: wp("4.5%"),
                  }}
                >
                  <Image
                    source={require("../assets/reviewer.jpg")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 25,
                      fontWeight: "400",
                    }}
                  >
                    {this.state.name}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 17,
                      fontWeight: "300",
                    }}
                  >
                    {this.state.email}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "space-around",
                marginVertical: 20,
                padding: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Home");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <Icon name="ios-home" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%"),
                  }}
                >
                  home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <Icon name="ios-search" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%"),
                  }}
                >
                  search
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Home");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <Icon name="ios-list-box" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%"),
                  }}
                >
                  categories
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Main");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <Icon name="ios-cart" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%"),
                  }}
                >
                  basket
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.onPressLogout}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <Icon name="ios-cart" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%"),
                  }}
                >
                  logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default CustomDrawerComponent;


