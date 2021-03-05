import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';


export class Product extends Component {

    static navigationOptions = {
        title: 'Product'
    };
  
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}> This is Product Activity </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
    {
     MainContainer:
     {
        justifyContent: 'center',
        flex:1,
        margin: 10
      
     },
     
     TextStyle:
     {
        fontSize: 23,
        textAlign: 'center',
        color: '#000',
     }});

export default Product;
