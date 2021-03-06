import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import BasketItem from "../components/BasketItem";
import BasketTotalList from "../components/BasketTotalList";
import AsyncStorage from "@react-native-community/async-storage";
import { FancyAlert } from "react-native-expo-fancy-alerts";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      updatecart: [],
      totalPrice: 0,
      totalQuantity: 0,
      name: "",
      id: "",
      email: "",
      visible1: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("cart")
      .then((cart) => {
        if (cart !== null) {
          const cartfood = JSON.parse(cart);
          this.setState({ dataCart: cartfood });

          let price = 0;
          this.state.dataCart.forEach((element) => {
            price += element.price;
          });
          this.setState({ totalPrice: price });

          let totalQty = 0;
          this.state.dataCart.forEach((element) => {
            totalQty += element.quantity;
          });
          this.setState({ totalQuantity: totalQty });
        }
      })
      .catch((err) => {
        alert(err);
      });

    try {
      AsyncStorage.getItem("token").then((value) => {
        const data = JSON.parse(value);
        this.setState({ name: data.name });
        this.setState({ email: data.Email });
        this.setState({ id: data.id });
      });
    } catch (e) {}
  }

  updateCart = (id) => {
    let updatecart = this.state.dataCart.filter(function (item) {
      return item.id !== id;
    });

    this.setState({ updatecart: updatecart });
  };
  updateCart1 = (id) => {
    let updatecart = this.state.updatecart.filter(function (item) {
      return item.id !== id;
    });

    this.setState({ updatecart: updatecart });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#EFF0F1",
        }}
      >
        <View
          style={{
            flex: 2,
          }}
        >
          <ScrollView>
            {this.state.updatecart == ""
              ? this.state.dataCart.map((item, key) => {
                  return (
                    <BasketItem
                      key={key}
                      imageUri={item.image}
                      name={item.item}
                      quantity={item.quantity}
                      price={item.price}
                      press={() => {
                        this.updateCart(item.id);
                      }}
                    />
                  );
                })
              : this.state.updatecart.map((item, key) => {
                  return (
                    <BasketItem
                      key={key}
                      imageUri={item.image}
                      name={item.item}
                      quantity={item.quantity}
                      price={item.price}
                      press={() => {
                        this.updateCart1(item.id);
                      }}
                    />
                  );
                })}
          </ScrollView>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: wp("10%"),
          }}
        >
          <BasketTotalList
            label="Total Quantity"
            price={this.state.totalQuantity}
          />
          <BasketTotalList
            label="Your total"
            price={"$" + this.state.totalPrice}
          />
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              justifyContent: "flex-end",
              paddingBottom: 15,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Address")}
              style={{
                flexDirection: "row",
                backgroundColor: "#F08C4F",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  marginRight: 15,
                }}
              >
                <Icon name="md-cart" size={20} color="white" />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Basket;
