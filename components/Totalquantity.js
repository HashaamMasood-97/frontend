import React, { Component } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";


class Totalquantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      totalQuantity: 0,
     
    };
  }
 



  componentDidMount() {
    AsyncStorage.getItem("cart")
      .then((cart) => {
        if (cart !== null) {
          // We have data!!
          const cartfood = JSON.parse(cart);
          this.setState({ dataCart: cartfood });
          
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
      <Text>{this.state.totalQuantity}</Text>
    );
  }
}

export default Totalquantity;



