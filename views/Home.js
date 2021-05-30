import React, { Component } from "react";
import { FlatList, View, ScrollView, SafeAreaView } from "react-native";
import Preview from "../components/Preview";
import { FlatListSlider } from "react-native-flatlist-slider";
import { ListItem, SearchBar } from "react-native-elements";

const data = [
  {
    image: "https://picsum.photos/id/11/200/300",
  },
  {
    image: "https://picsum.photos/id/10/200/300",
  },
  {
    image: "https://picsum.photos/id/12/200/300",
  },
];

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    desc: "Silent Waters in the mountains in midst of Himilayas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80",
    desc:
      "Red fort in India New Delhi is a magnificient masterpeiece of humans",
  },
];

const category = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    desc: "Chocolates",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80",
    desc: "Fashion Accessories",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    desc: "Chocolates",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80",
    desc: "Fashion Accessories",
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
      <View>
        <FlatListSlider data={data} />
      </View>
    );

    const footerComponent = () => (
      <View>
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
