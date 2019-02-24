/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Image, Platform, StyleSheet } from "react-native";
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from "native-base";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

const cards = [
  {
    text: "Card 1",
    name: "1",
    image: require("../assets/img/monkey.jpg")
  },
  {
    text: "Card 2",
    name: "2",
    image: require("../assets/img/monkey.jpg")
  },
  {
    text: "Card 3",
    name: "3",
    image: require("../assets/img/monkey.jpg")
  }
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={this.renderCard}
            onSwipeRight={this.swipeRight}
            onSwipeLeft={this.swipeLeft}
            renderEmpty={this.renderEmpty}
          />
        </View>
      </Container>
    );
  }

  renderCard = ({ image, name, text }) => (
    <Card style={{ elevation: 3 }}>
      <CardItem>
        <Left>
          <Thumbnail source={image} />
          <Body>
            <Text>{text}</Text>
            <Text note>NativeBase</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image style={{ height: 300, flex: 1 }} source={image} />
      </CardItem>
      <CardItem>
        <Text>{name}</Text>
      </CardItem>
    </Card>
  );

  swipeLeft = () => {
    console.log("LEFT");
  };

  swipeRight = () => {
    console.log("RIGHT");
  };

  renderEmpty = () => {
    console.log("LIST IS EMPTY.");
  };
}

const styles = StyleSheet.create({});
