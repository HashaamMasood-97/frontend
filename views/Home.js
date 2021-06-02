import React, { Component } from "react";
import { FlatList, View, ScrollView, SafeAreaView, Text } from "react-native";
import Preview from "../components/Preview";
import { FlatListSlider } from "react-native-flatlist-slider";
import { ListItem, SearchBar } from "react-native-elements";

const data = [
  {
    image: "https://images.unsplash.com/photo-1607469256872-48074e807b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    image: "https://lh3.googleusercontent.com/proxy/Y5wOgZYRdOs-qjkWZkYkWueyvIrOxkTVWjdraRkGflAenlKtgqaMZrWT6Brac4x6cPLjUqNNj4JQ8lxPqvklBROZ1lowTAU",
  },
  {
    image: "https://www.shutterfly.com/ideas/wp-content/uploads/2018/01/creative-gift-ideas-dyed-handkerchiefs.jpg",
  },
];

const images = [
  {
    image:
      "https://shop.alqasimjewellers.com/wp-content/uploads/2020/01/wp-1579125438143.jpg",
    desc:
      "Open Able Bangle Or Bracelet, Metal Type, 21K Gold And Rhodium Plated ...",
  },
  {
    image:
      "https://www.pakstyle.pk/img/products/l/p13037-elegant-jewellery-watch-gift-set-update.jpg",
    desc: "Impress your special ones with this master piece..",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ZAV1CypKL.jpg",
    desc:
      "Nivea Creme Tin 75ml, Cares and hydrates the skin and prevents it from drying out ...",
  },

  
  
  
  
];

const category = [
  {
    id: 0,
    image:
      "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1-650x428.jpg",
    desc: "Chocolates",
  },
  {
    id: 1,
    image:
      "https://www.newsleaderonline.com/wp-content/uploads/2020/06/dfRdmB2G5icsHEyYCFP48zoMZsScbNI41591384564.jpg",
    desc: "Fashion Accessories",
  },
  {
    id: 2,
    image:
      "https://www.thegiftshop.pk/image/cache/catalog/specially%20for%20her-800x800.jpg",
    desc: "Gift Basket",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/236x/95/08/0c/95080c7e3f431e4c23e0635d76563353.jpg",
    desc: "Grooming Kits",
  },
 
];

class Home extends Component {
  state = {
    cat: category,
  };

  componentDidMount() {

    this.forceUpdate();

}

  render() {
    const { navigate } = this.props.navigation;
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.desc}
          hideChevron={true}
          leftAvatar={{ source: { uri: item.image } }}
          onPress={() => navigate("Category", { currentIndex: item.id })}
        />
      );
    };

    const headerComponent = () => (
      <View style={{
        paddingBottom:10,

     
      }}>
       
        <FlatListSlider data={data} />
        <Text style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          fontSize: 30,
          paddingTop:20,
        }}>Categories</Text>
      </View>
    );

    const footerComponent = () => (
      <View style={{
        paddingTop:30,

     
      }}>
        <Text style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          fontSize: 30
        }}>Featured Products</Text>
        <FlatListSlider
          data={images}
          width={275}
          timer={5000}
          component={<Preview />}
          onPress={(item) => alert(JSON.stringify(item))}
          indicatorActiveWidth={40}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    );
    return (
      <View>
        
          <FlatList
            data={this.state.cat}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={headerComponent}
            ListFooterComponent={footerComponent}
          />
    
      </View>
    );
  }
}

export default Home;
