import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import axios from "axios";
import {ip} from "../ip/ip";

export class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: [],
      filteredData: [],
      SearchBar: "",
    };
  }

  componentDidMount() {
    axios
      .get(ip+":3700/gift/order/gets/"+this.props.navigation.state.params.id)
      .then((response) => {
        this.setState({ gift: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateSearch = (search) => {
    this.setState({ search: search });

    let filteredData = this.state.gift.filter(function (item) {
      return (
        item._id.toLowerCase().includes(search) ||
        item.totalQty.toLowerCase().includes(search) ||
        item.totalPrice.toLowerCase().includes(search)
      );
    });

    this.setState({ filteredData: filteredData });
  };

  static navigationOptions = {
    title: "Order",
  };

  render() {
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={"Order Id: " + item._id}
          subtitle={"Date: "+item.date + " | " + "Quantity: "+item.totalQty + " | " + "Total: "+item.totalPrice}
          leftAvatar={{ source: require("../assets/o.jpg") }} 
          onPress={() => {
            this.props.navigation.navigate("OrderDetails", {
              totalQty:item.totalQty,
              totalPrice:item.totalPrice,
              products:item.products,
              date:item.date
            })
  
          }}
        />
      );
    };

    return (
      <View>
        <SearchBar
          round={true}
          lightTheme={true}
          placeholder="Search..."
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.updateSearch}
          value={this.state.search}
        />

        <FlatList
          data={
            this.state.filteredData && this.state.filteredData.length > 0
              ? this.state.filteredData
              : this.state.gift
          }
          renderItem={renderMenuItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    );
  }
}

export default Orders;
