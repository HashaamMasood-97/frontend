import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import axios from "axios";
import { ip } from "../ip/ip";
import Pagination,{Icon,Dot} from 'react-native-pagination';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      gift: [],
      filteredData: [],
      SearchBar: "",
      token:""
    };
  }

  getData = async () => {
    try {
      await AsyncStorage.getItem("token").then((value) => {
        const data = JSON.parse(value);
        this.setState({  token: data.token });
        console.log(value);
      });
    } catch (e) {}

  
  };

  componentDidMount() {
    if(this.state.token !=null){
    axios
      .get(ip + ":3700/gift/product/get")
      .then((response) => {
        this.setState({ gift: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      console.log("not logged in")
    }
  }

 

  updateSearch = (search) => {
    this.setState({ search: search });

    let filteredData = this.state.gift.filter(function (item) {
      return (
        item.name.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)
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
          subtitle={
            "Category: " + item.category + " | " + "Price: " + item.priceOne
          }
          hideChevron={true}
          leftAvatar={{ source: { uri: ip + ":3700/" + item.photo } }}
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: { uri: ip + ":3700/" + item.photo },
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null,
            })
          }
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

        <View>
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
      </View>
    );
  }
}

export default Product;
