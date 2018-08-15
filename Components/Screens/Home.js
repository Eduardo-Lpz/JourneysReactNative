import React, { Component }from 'react';
import { Image } from 'react-native';
import { Icon, Container, Header, Button, Left, Right, Body, Text, DeckSwiper, Card, CardItem } from 'native-base';

import GlobalStyles from '../../GlobalStyles';


const cards = [
  {
    name: 'Oferta 1',
    image: require('../Images/oferta_ficticia_1.png'),
  },
  {
    name: 'Oferta 2',
    image: require('../Images/oferta_ficticia_2.png'),
  },
  {
    name: 'Oferta 3',
    image: require('../Images/oferta_ficticia_3.png'),
  }
];


export default class HomeScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: () => (
        <Icon type="FontAwesome" name="home" style={GlobalStyles.icon}/>
      )
    };
    render() {
      return (
        <Container  style={GlobalStyles.BgColor}>
          <Header transparent>
            <Left>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon type="FontAwesome" name="navicon" style={GlobalStyles.icon}/>
              </Button>
            </Left>
            <Body>
              <Text>HomeScreen</Text>
            </Body>
            <Right>
              <Button transparent>
                <Icon type="FontAwesome" name="ellipsis-v" style={GlobalStyles.icon}/>
              </Button>
            </Right>
          </Header>

          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />

        </Container>
      );
    }
  }