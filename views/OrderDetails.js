import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";

import BasketTotalListcheckout from "../components/BasketTotalListcheckout";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { ip } from "../ip/ip";
import { ListItem, SearchBar } from "react-native-elements";

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: this.props.navigation.state.params.products,
      totalQty: this.props.navigation.state.params.totalQty,
      totalPrice: this.props.navigation.state.params.totalPrice,
      date: this.props.navigation.state.params.date,
    };
  }

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
            flex: 1,
          }}
        >
          <FlatList
            data={this.state.dataCart}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: wp("8%"),
          }}
        >
          <BasketTotalListcheckout
            label="Total Quantity"
            price={this.state.totalQty}
          />
          <BasketTotalListcheckout
            label="Your total"
            price={"$" + this.state.totalPrice}
          />
          <BasketTotalListcheckout
            label="Date"
            price={this.state.date}
          />
          <BasketTotalListcheckout
            label="Status"
            price="Pending"
          />
        </View>
      </View>
    );
  }
}

export default OrderDetails;
