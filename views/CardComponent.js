import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { ip } from "../ip/ip";
import axios from "axios";

export class Cards extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangequantity = this.onChangequantity.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      price: "",
      quantity: "",
    };
  }



  onChangename(inputText){
    this.setState({
      name: inputText,
    });
  };

  onChangequantity(inputText){
    this.setState({
      quantity: inputText,
    });
  };

  onChangeprice (inputText) {
    this.setState({
      price: inputText,
    });
  };

  onSubmit = () => {
    // code to connect backend
    const product = {
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
    };

    axios
      .post(ip + ":3700/gift/product/post", product)
      .then((res) => console.log(res.data));
  };

  static navigationOptions = {
    title: "Cards",
  };

  render() {
    return (
      <View>
        <Text> Demo Form </Text>
        <View>
          <TextInput placeholder="Name" onChangeText={this.onChangename} value={this.state.name} />
          <TextInput placeholder="price" onChangeText={this.onChangeprice} value={this.state.price} />
          <TextInput placeholder="quantity" onChangeText={this.onChangequantity} value={this.state.quantity} />

          <Button
            onPress={this.onSubmit}
            title="Learn More"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

export default Cards;
