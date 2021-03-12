import React, { Component } from "react";
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'hi',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'hello',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     }
   ]

export class Cards extends Component {
  static navigationOptions = {
    title: "Cards",
  };

  render() {
    return (
        <Card>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider/>
        {
          users.map((u, i) => {
            return (
              <View key={i} >
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })
        }
      </Card>
    );
  }
}

export default Cards;
