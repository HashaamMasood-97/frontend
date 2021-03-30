import { StyleSheet, Text, View, Button } from "react-native";
import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hey Open up App.js to start working on your app!</Text>
        <Button
          title="Go to Product"
          onPress={() => this.props.navigation.navigate("Product")}
        />
        <Button
          title="Go to Card"
          onPress={() => this.props.navigation.navigate("Cards")}
        />
        <Button
          title="Go to Contact"
          onPress={() => this.props.navigation.navigate("Contact")}
        />
        <Button
          title="Go to PostContact"
          onPress={() => this.props.navigation.navigate("PostContact")}
        />
        <Button
          title="Go to Category"
          onPress={() => this.props.navigation.navigate("Category")}
        />

        <Button
          title="Go to Register"
          onPress={() => this.props.navigation.navigate("Register")}
        />
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
