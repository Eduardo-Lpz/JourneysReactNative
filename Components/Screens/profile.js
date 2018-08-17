import React, { Component } from 'react';

import { Icon, Content, Container, Header, Button, Left, Right, Body, Text, Thumbnail} from 'native-base';
import GlobalStyles from '../../GlobalStyles';


export default class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Perfil',
    drawerIcon: () => (
      <Icon type="FontAwesome" name="user" style={GlobalStyles.icon}/>
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
            <Text>Profile</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name="ellipsis-v" style={GlobalStyles.icon}/>
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={GlobalStyles.container}>
        <Thumbnail large source={require('../Images/Bill.gif')} />
        <Text >
            Welcome to Profile View
          </Text>
        </Content>
      </Container>
    );
  }
}

