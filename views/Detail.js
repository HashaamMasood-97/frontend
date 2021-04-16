import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";

import ChoosingSizeBox from "../components/ChoosingSizeBox";

const { width } = Dimensions.get("window");

class Detail extends Component {
  state = {
    defaultBox: null,
    size: "small",
    color: "black",
    sizeBoxOpen: false,
    colorBoxOpen: false,
    colorIconName: "ios-arrow-down",
    iconName: "ios-arrow-down",
    sizeBorderColor: "gray",
    colorBorderColor: "gray"
  };



  onChooseItem = item => {
    this.setState({ size: item });
  };



  render() {
   

    const {
      detailName,
      detailImageUri,
      detailPriceOne,
      detailPriceTwo
    } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView>
          {/* image */}
          <View
            style={{
              width: width,
              height: hp("50%")
            }}
          >
            <Image
              source={detailImageUri}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "stretch"
              }}
            />
          </View>
          {/* image */}

     

          {/* priceBox */}
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              zIndex: 200
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginVertical: 25
              }}
            >
       
              {/* right */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                paddingBottom: 25
              }}
            >
              {/* down bar */}
              {/* left */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 15
                  }}
                >
                  $ {detailPriceOne}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "gray",
                    textDecorationLine: "line-through"
                  }}
                >
                  {detailPriceTwo}
                </Text>
              </View>
              {/* left */}
              {/* right */}
              <View
                style={{
                  width: wp("45%"),
                  backgroundColor: "#F08C4F",
                  borderRadius: 2,
                  padding: 5
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 15
                    }}
                  >
                    <Icon name="md-cart" size={20} color="white" />
                  </View>
                  <View
                    style={{
                      flex: 2
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        color: "white"
                      }}
                    >
                      Purchase
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* right */}
            </View>
          </View>
          {/* priceBox */}

          {/* DescriptionBox */}
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "gray"
            }}
          >
            {/* upper */}
            <View
              style={{
                flex: 1,
                marginHorizontal: 15,
                marginVertical: 25
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#5BBC9D"
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  lineHeight: 20
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </Text>
            </View>
            {/* upper */}
            {/* lower */}
           
     
            {/* lower */}
          </View>
          {/* DescriptionBox */}

       
          {/* reviewBox */}
        </ScrollView>
      </View>
    );
  }
}

export default Detail;
