import React, { Component } from "react";
import { View, Text } from "react-native";

class BasketTotalListcheckout extends Component {
  render() {
    const { label, price } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
  
        
          //   marginTop: wp("10%")
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {price}
        </Text>
      </View>
    );
  }
}

export default BasketTotalListcheckout;
