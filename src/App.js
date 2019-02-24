/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { FlatList, Image, Platform, StyleSheet } from "react-native";
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  DeckSwiper,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Separator,
  Text,
  Title,
  Thumbnail,
  View
} from "native-base";
import names from "./names";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      namesList: names,
      cards: [
        {
          text: "Card 1",
          name: "John",
          image: require("../assets/img/monkey.jpg")
        },
        {
          text: "Card 2",
          name: "Adam",
          image: require("../assets/img/monkey.jpg")
        },
        {
          text: "Card 3",
          name: "Eve",
          image: require("../assets/img/monkey.jpg")
        }
      ],
      namesSelected: []
    };
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "lavender" }}>
          <Body>
            <Title>Names Swiper</Title>
          </Body>
        </Header>
        <Content padder>
          <View>
            <DeckSwiper
              dataSource={this.state.cards}
              renderItem={this.renderCard}
              onSwipeRight={this.swipeRight}
              onSwipeLeft={this.swipeLeft}
              renderEmpty={this.renderEmpty}
            />
          </View>
          <View style={{ marginTop: 450 }}>
            <Separator bordered>
              <Text>NAMES SELECTED:</Text>
            </Separator>
            {this.renderNamesList()}
          </View>
        </Content>
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

  swipeLeft = ({ name }) => {
    console.log("REMOVED", name);
  };

  swipeRight = ({ name }) => {
    const { namesSelected } = this.state;
    this.setState({ namesSelected: [...namesSelected, name] });
  };

  renderEmpty = () => {
    console.log("LIST IS EMPTY.");
  };

  renderNamesList = () => (
    <FlatList data={this.state.namesSelected} keyExtractor={this.keyExtractor} renderItem={this.renderNameItem} />
  );

  keyExtractor = item => item;

  renderNameItem = ({ item }) => (
    <ListItem>
      <Text>{item}</Text>
    </ListItem>
  );
}

const styles = StyleSheet.create({});
