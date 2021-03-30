import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import axios from "axios";
import {ip} from "../ip/ip";

export class Product extends Component {
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
      .get(ip+":3700/gift/product/get")
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
        item.name.toLowerCase().includes(search) ||
        item.price.toLowerCase().includes(search)
      );
    });

    this.setState({ filteredData: filteredData });
  };

  static navigationOptions = {
    title: "Product",
  };

  render() {
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.price}
          hideChevron={true}
          /*leftAvatar={{ source: require("../images/uthappizza.png") }} */
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

export default Product;
