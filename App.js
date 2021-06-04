import Product from "./views/ProductComponent";
import Category from "./views/Category";
import Register from "./views/Register";
import Login from "./views/Login";
import LoginScreen from "./views/LoginScreen";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Basket from "./views/Basket";
import Address from "./views/Address";
import Payment from "./views/Payment";
import Orders from "./views/Orders";
import OrderDetails from "./views/OrderDetails";
import Totalquantity from "./components/Totalquantity";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import CustomDrawerComponent from "./components/CustomDrawerComponent";
import { Dimensions } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Badge } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <Icon
              onPress={() => navigation.navigate("Product")}
              name="ios-search"
              color="white"
              size={30}
              style={{
                paddingRight: 15,
              }}
            />
            <View>
              <MaterialCommunityIcons
                onPress={() => navigation.navigate("Basket")}
                name="cart-outline"
                color="white"
                size={30}
                style={{
                  paddingRight: 15,
                }}
              />

              <Badge
                status="warning"
                value={<Totalquantity />}
                containerStyle={{ position: "absolute", top: -6, right: 2 }}
              />
            </View>
          </View>
        ),
      };
    },
  },

  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Details",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            onPress={() => navigation.navigate("Category")}
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
        headerRight: () => (
          <View>
            <MaterialCommunityIcons
              onPress={() => navigation.navigate("Basket")}
              name="cart-outline"
              color="white"
              size={30}
              style={{
                paddingRight: 15,
              }}
            />

            <Badge
              status="warning"
              value={<Totalquantity />}
              containerStyle={{ position: "absolute", top: -6, right: 2 }}
            />
          </View>
        ),
      };
    },
  },

  Basket: {
    screen: Basket,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Basket",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            onPress={() => navigation.navigate("Category")}
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
      };
    },
  },

  Product: {
    screen: Product,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "All Products",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            onPress={() => navigation.navigate("Home")}
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
        headerRight: () => (
          <View>
            <MaterialCommunityIcons
              onPress={() => navigation.navigate("Basket")}
              name="cart-outline"
              color="white"
              size={30}
              style={{
                paddingRight: 15,
              }}
            />

            <Badge
              status="warning"
              value={<Totalquantity />}
              containerStyle={{ position: "absolute", top: -6, right: 2 }}
            />
          </View>
        ),
      };
    },
  },

  Orders: {
    screen: Orders,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Orders",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
      };
    },
  },

  OrderDetails: {
    screen: OrderDetails,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Order Detials",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            onPress={() => navigation.navigate("Orders")}
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
      };
    },
  },

  Address: {
    screen: Address,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Address",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            onPress={() => navigation.navigate("Basket")}
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
      };
    },
  },

  Payment: {
    screen: Payment,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Checkout",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            onPress={() => navigation.navigate("Address")}
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
      };
    },
  },
});

const CategoryStackNavigator = createStackNavigator({
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Category",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#5BBC9D",
        },
        headerLeft: () => (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10,
            }}
          />
        ),
        headerRight: () => (
          <View>
            <MaterialCommunityIcons
              onPress={() => navigation.navigate("Basket")}
              name="cart-outline"
              color="white"
              size={30}
              style={{
                paddingRight: 15,
              }}
            />

            <Badge
              status="warning"
              value={<Totalquantity />}
              containerStyle={{ position: "absolute", top: -6, right: 2 }}
            />
          </View>
        ),
      };
    },
  },
});

const HomeDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
    },
  },
  {
    drawerWidth: Dimensions.get("window").width,
    contentComponent: CustomDrawerComponent,
  }
);

const CategoryDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: CategoryStackNavigator,
    },
  },
  {
    drawerWidth: Dimensions.get("window").width,
    contentComponent: CustomDrawerComponent,
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  Register: {
    screen: Register,
  },
  Home: {
    screen: HomeDrawNavigator,
  },
  Category: {
    screen: CategoryDrawNavigator,
  },
});

const AppContainer = createAppContainer(AppSwitchNavigator);
