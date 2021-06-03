import { StyleSheet, Text, View, Button } from "react-native";
import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
       
       
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
