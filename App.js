import Main from "./components/MainComponent";
import Product from "./components/ProductComponent";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    Product: {
      screen: Product,
    },
  },
  {
    initialRouteName: "Main",
  }
);

const AppContainer = createAppContainer(AppNavigator);
