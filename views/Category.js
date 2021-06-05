import React, { Component } from "react";

import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";
import axios from "axios";
import { ip } from "../ip/ip";
import { SearchBar } from "react-native-elements";

const CATEGORY = ["Chocolate", "Fashion Accessories", "Gift Basket", "Grooming Kit"];

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex:  0 ,
      chocolate: [],
      fashion: [],
      basket: [],
      grooming: [],
      search: "",
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  static navigationOptions = {
    title: "Category",
  };

  componentDidMount() {
    axios
      .get(ip + ":3700/gift/product/chocolate")
      .then((response) => {
        this.setState({ chocolate: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(ip + ":3700/gift/product/fashion")
      .then((response) => {
        this.setState({ fashion: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });


      axios
      .get(ip + ":3700/gift/product/basket")
      .then((response) => {
        this.setState({ basket: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

      axios
      .get(ip + ":3700/gift/product/grooming")
      .then((response) => {
        this.setState({ grooming: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateSearch(inputText) {
    this.setState({
      search: inputText.substr(0, 20),
    });
  }

  renderCategory = () => {
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 18,
            color: this.state.currentIndex === i ? "#F08C4F" : "white",
            paddingHorizontal: 10,
          }}
        >
          {item}
        </Text>
      );
    });
  };

  renderItemList_Chocolate = () => {
    return this.state.chocolate
      .filter((product) => {
        return (
          product.name
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1 ||
          product.priceOne.indexOf(this.state.search.toLowerCase()) !== -1
        );
      })
      .map((item, i) => {
        return (
          <ItemList
            onPress={() =>
              this.props.navigation.navigate("Detail", {
                detailName: item.name,
                detailImageUri: { uri: ip + ":3700/" + item.photo },
                detailPriceOne: item.priceOne,
                detailPriceTwo: item.priceTwo ? item.priceTwo : null,
                id: item._id,
              })
            }
            key={item._id}
            imageUri={{ uri: ip + ":3700/" + item.photo }}
            name={item.name}
            priceOne={item.priceOne}
            priceTwo={item.priceTwo ? item.priceTwo : null}
          />
        );
      });
  };

  renderItemList_Fashion = () => {
    return this.state.fashion
      .filter((product) => {
        return (
          product.name
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1 ||
          product.priceOne.indexOf(this.state.search.toLowerCase()) !== -1
        );
      })
      .map((item, i) => {
        return (
          <ItemList
            onPress={() =>
              this.props.navigation.navigate("Detail", {
                detailName: item.name,
                detailImageUri: { uri: ip + ":3700/" + item.photo },
                detailPriceOne: item.priceOne,
                detailPriceTwo: item.priceTwo ? item.priceTwo : null,
              })
            }
            key={item._id}
            imageUri={{ uri: ip + ":3700/" + item.photo }}
            name={item.name}
            priceOne={item.priceOne}
            priceTwo={item.priceTwo ? item.priceTwo : null}
          />
        );
      });
  };


  renderItemList_Basket = () => {
    return this.state.basket
      .filter((product) => {
        return (
          product.name
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1 ||
          product.priceOne.indexOf(this.state.search.toLowerCase()) !== -1
        );
      })
      .map((item, i) => {
        return (
          <ItemList
            onPress={() =>
              this.props.navigation.navigate("Detail", {
                detailName: item.name,
                detailImageUri: { uri: ip + ":3700/" + item.photo },
                detailPriceOne: item.priceOne,
                detailPriceTwo: item.priceTwo ? item.priceTwo : null,
              })
            }
            key={item._id}
            imageUri={{ uri: ip + ":3700/" + item.photo }}
            name={item.name}
            priceOne={item.priceOne}
            priceTwo={item.priceTwo ? item.priceTwo : null}
          />
        );
      });
  };


  renderItemList_Grooming = () => {
    return this.state.grooming
      .filter((product) => {
        return (
          product.name
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1 ||
          product.priceOne.indexOf(this.state.search.toLowerCase()) !== -1
        );
      })
      .map((item, i) => {
        return (
          <ItemList
            onPress={() =>
              this.props.navigation.navigate("Detail", {
                detailName: item.name,
                detailImageUri: { uri: ip + ":3700/" + item.photo },
                detailPriceOne: item.priceOne,
                detailPriceTwo: item.priceTwo ? item.priceTwo : null,
              })
            }
            key={item._id}
            imageUri={{ uri: ip + ":3700/" + item.photo }}
            name={item.name}
            priceOne={item.priceOne}
            priceTwo={item.priceTwo ? item.priceTwo : null}
          />
        );
      });
  };

  renderItemList = () => {
    if (this.state.currentIndex === 0) {
      return this.renderItemList_Chocolate();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Fashion();
    }
    else if (this.state.currentIndex === 2) {
      return this.renderItemList_Basket();
    }
    else if (this.state.currentIndex === 3) {
      return this.renderItemList_Grooming();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "#63CBA7",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 4,
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center",
              }}
              ref={(node) => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {this.renderCategory()}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              onPress={() => {
                this.scroll.scrollTo({ x: wp("80%") });
              }}
              name="ios-arrow-forward"
              size={20}
              color="white"
            />
          </View>
        </View>
        {/* headerScrollHorizontal */}

        <SearchBar
          round={true}
          lightTheme={true}
          placeholder="Search..."
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.updateSearch}
          value={this.state.search}
        />

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {/* ItemList */}

            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}

export default Category;
