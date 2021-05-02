import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import BasketItem from "../components/BasketItem";
import BasketTotalList from "../components/BasketTotalList";
import AsyncStorage from "@react-native-community/async-storage";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      totalPrice: 0,
      totalQuantity: 0
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


  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#EFF0F1",
        }}
      >
        {/* ItemLists_upper */}
        <View
          style={{
            flex: 2,
          }}
        >
          <ScrollView>
            {this.state.dataCart != "" ? (
              this.state.dataCart.map((item, key) => {
                return (
                  <BasketItem
                    key={key}
                    editIcon={true}
                    imageUri={item.image}
                    name={item.item}
                    color="Black"
                    size="M"
                    price={item.price}
                    {...this.props}
                  />
                );
              })
            ) : (
              <Text>Cart is Empty</Text>
            )}
          </ScrollView>
        </View>
        {/* ItemLists_upper */}
        {/* total_lower */}
        <View
          style={{
            flex: 1,
            paddingTop: wp("10%"),
          }}
        >
          <BasketTotalList label="Total Quantity" price={this.state.totalQuantity} />
          <BasketTotalList label="Your total" price={"$" +this.state.totalPrice} />
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
              onPress={() => this.props.navigation.navigate("Checkout")}
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
          </View>
        </View>
        {/* total_lower */}
      </View>
    );
  }
}

export default Basket;

{
  /* <Button
          title="go to Checkout"
          onPress={() => this.props.navigation.navigate("Checkout")}
        />
        <Button
          title="go to EditBasket"
          onPress={() => this.props.navigation.navigate("EditBasket")}
        /> */
}
