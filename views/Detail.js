import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import Counter from "react-native-counters";
import AsyncStorage from "@react-native-community/async-storage";
import { FancyAlert } from "react-native-expo-fancy-alerts";
import { color } from "react-native-reanimated";

const { width } = Dimensions.get("window");

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      visible1: false,
    };
  }

  onClickAddCart() {
    var a = Math.floor(Math.random() * 100000 + 1);
    const itemcart = {
      item: this.props.navigation.state.params.detailName,
      quantity: this.state.num,
      price: this.props.navigation.state.params.detailPriceOne * this.state.num,
      image: this.props.navigation.state.params.detailImageUri,
      id: a.toString(),
    };

    AsyncStorage.getItem("cart")
      .then((datacart) => {
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart);
          cart.push(itemcart);
          AsyncStorage.setItem("cart", JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemcart);
          AsyncStorage.setItem("cart", JSON.stringify(cart));
        }
      })
      .then(() => {
        this.setState({ visible1: true });
      })
      .catch((err) => {
        alert(err);
      });
  }

  onChange(number, type) {
    this.setState({
      num: number,
    });
  }

  render() {
    const { detailName, detailImageUri, detailPriceOne, detailPriceTwo } =
      this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <View
            style={{
              width: width,
              height: hp("50%"),
            }}
          >
            <Image
              source={detailImageUri}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "stretch",
              }}
            />
          </View>

          <Text
            style={{
              textAlign: "center",
              paddingTop: 20,
              fontSize: 20,
              fontWeight: "bold",
              paddingBottom: 20,
              color: "#5BBC9D",
            }}
          >
            {detailName}
          </Text>

          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              color: "black",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                paddingBottom: 5,
                fontWeight: "bold",
                color: "#5BBC9D",
              }}
            >
              Quantity
            </Text>
            <Counter start={1} onChange={this.onChange.bind(this)} />
          </View>

          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              zIndex: 200,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginVertical: 10,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                paddingBottom: 25,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 15,
                  }}
                >
                  $ {detailPriceOne * this.state.num}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "gray",
                    textDecorationLine: "line-through",
                  }}
                >
                  {detailPriceTwo}
                </Text>
              </View>

              <View
                style={{
                  width: wp("45%"),
                  backgroundColor: "#F08C4F",
                  borderRadius: 2,
                  padding: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => this.onClickAddCart()}
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 15,
                    }}
                  >
                    <Icon name="md-cart" size={20} color="white" />
                  </View>
                  <View
                    style={{
                      flex: 2,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white",
                      }}
                    >
                      Purchase
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          >
            <View
              style={{
                flex: 1,
                marginHorizontal: 15,
                marginVertical: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#5BBC9D",
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </Text>
            </View>
          </View>
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
              style={{
                marginTop: -16,
                marginBottom: 32,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Item Added to Cart Successfully
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
                this.props.navigation.navigate("Basket");
                this.setState({ visible1: false });
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
        </ScrollView>
      </View>
    );
  }
}

export default Detail;
