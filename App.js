import Main from "./views/MainComponent";
import Product from "./views/ProductComponent";
import Cards from "./views/CardComponent";
import Contact from "./views/ContactComponent";
import PostContact from "./views/PostContactComponent";
import Category from "./views/Category";
import Register from "./views/Register";
import Login from "./views/Login";
import LoginScreen from "./views/LoginScreen";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Basket from "./views/Basket";
import Address from "./views/Address";
import Payment from "./views/Payment";
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
              onPress={() => navigation.openDrawer()}
              name="ios-search"
              color="white"
              size={30}
              style={{
                paddingRight: 15,
              }}
            />
            <View>
              <MaterialCommunityIcons
                onPress={() => navigation.openDrawer()}
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
            onPress={() => navigation.openDrawer()}
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
            onPress={() => navigation.openDrawer()}
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

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    Product: {
      screen: Product,
    },
    Cards: {
      screen: Cards,
    },
    Contact: {
      screen: Contact,
    },
    PostContact: {
      screen: PostContact,
    },

    Address: {
      screen: Address,
    },
    Payment: {
      screen: Payment,
    },
  },
  {
    initialRouteName: "Main",
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
  Main: {
    screen: AppNavigator,
  },

  Category:{
    screen: CategoryStackNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
