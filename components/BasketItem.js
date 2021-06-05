import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import FAIcon from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage"; 

class BasketItem extends Component {
 
  render() {
    const { imageUri, name, quantity, price, press } = this.props;
    return (
      <View
        style={{
          height: wp("35%"),
          width: wp("100%"),
          backgroundColor: "white",
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 14,
          marginBottom: 5
        }}
      >
        {/* image */}
        <View
          style={{
            width: wp("26%"),
            height: wp("26%"),
            marginRight: 10
          }}
        >
          <Image
            source={imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain"
            }}
          />
        </View>
       
      
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
        
          <View
            style={{
              flex: 3,
              justifyContent: "space-around"
            }}
          >
            <Text
              style={{
                color: "#5BBC9D",
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              {name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View/>
              <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  marginRight: 5
                }}
              >
               Quantity x{quantity} 
              </Text>

            </View>
              <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
        
             <TouchableOpacity >
                <FAIcon name="trash-o" size={30} color="gray" onPress={press} />
              </TouchableOpacity>
            
            </View>
            
          </View>
       
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 10
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold"
              }}
            >
              ${price}
            </Text>
          </View>
          {/* imageInfo_price */}
        </View>
        {/* imageInfo_right */}
      </View>
    );
  }
}

export default BasketItem;


/*onPress={()=>{
  Alert.alert("Are you sure you want to delete this item?", "",   [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK",
      onPress: () => {
  
       
        
          try {
              AsyncStorage.removeItem(ids);
              console.log('Data removed')
            }
          
          catch(exception) {
              return false;
          }
      
        

      }
    }
  ] ); 
}
}*/