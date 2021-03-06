import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";

import BasketTotalListcheckout from "../components/BasketTotalListcheckout";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { ip } from "../ip/ip";
import { ListItem, SearchBar } from "react-native-elements";
import { FancyAlert } from "react-native-expo-fancy-alerts";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      totalPrice: 0,
      totalQuantity: 0,
      name: this.props.navigation.state.params.name,
      id: this.props.navigation.state.params.id,
      email: this.props.navigation.state.params.email,
      contact: this.props.navigation.state.params.contact,
      address: this.props.navigation.state.params.address,
      visible: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("cart")
      .then((cart) => {
        if (cart !== null) {
          // We have data!!
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
  }

  onSubmit = () => {
    const order = {
      c_name: this.state.name,
      c_email: this.state.email,
      c_id: this.state.id,
      c_contact: this.state.contact,
      c_address: this.state.address,
      totalPrice: this.state.totalPrice,
      totalQty: this.state.totalQuantity,
      products: this.state.dataCart,
    };

    axios
      .post(ip + ":3700/gift/order/post", order)
      .then((res) => console.log(res.data))
      .then(() => {
        AsyncStorage.removeItem("cart", (err) => console.log("cart", err));
      })
      .then(() => {
        //this.props.navigation.navigate("Home");
        this.setState({ visible: true });
      });
  };

  render() {
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.item}
          subtitle={
            "Quantity: " +
            "x" +
            item.quantity +
            " | " +
            "Price: " +
            item.price +
            "$"
          }
          hideChevron={true}
          leftAvatar={{ source: item.image }}
        />
      );
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#EFF0F1",
        }}
      >
        <View
          style={{
            flex: 0.5,
          }}
        >
          {this.state.dataCart != "" ? (
            <FlatList
              data={this.state.dataCart}
              renderItem={renderMenuItem}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text>Cart is Empty</Text>
          )}
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: wp("8%"),
          }}
        >
          <BasketTotalListcheckout
            label="Total Quantity"
            price={this.state.totalQuantity}
          />
          <BasketTotalListcheckout
            label="Your total"
            price={"$" + this.state.totalPrice}
          />
          <View
            style={{
              paddingTop: wp("7%"),
            }}
          >
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Contact Details
            </Text>
            <BasketTotalListcheckout
              label="Full Name"
              price={this.state.name}
            />
            <BasketTotalListcheckout label="Email" price={this.state.email} />
            <BasketTotalListcheckout
              label="Contact No."
              price={this.state.contact}
            />
            <BasketTotalListcheckout
              label="Address"
              price={this.state.address}
            />
          </View>
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
              onPress={this.onSubmit}
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
                Place your order
              </Text>
            </TouchableOpacity>
            <FancyAlert
              visible={this.state.visible}
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
                  <Text>????</Text>
                </View>
              }
              style={{ backgroundColor: "white" }}
            >
              <Text
                style={{ marginTop: -16, marginBottom: 32, fontWeight: "bold" }}
              >
                Order Placed Successfully!
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
                  this.props.navigation.navigate("Category");
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
          </View>
        </View>
      </View>
    );
  }
}

export default Payment;
