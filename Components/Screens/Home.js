import React, { Component }from 'react';
import { Image, ScrollView } from 'react-native';
import { View, Icon, Container, Header, Button, Left, Right, Body, Text, DeckSwiper, Card, CardItem } from 'native-base';

import GlobalStyles from '../../GlobalStyles';


const cards = [
  {
    name: 'Oferta 1',
    image: require('../Images/oferta_ficticia_3.png'),
  },
  {
    name: 'Oferta 2',
    image: require('../Images/oferta_ficticia_2.png'),
  },
  {
    name: 'Oferta 3',
    image: require('../Images/oferta_ficticia_1.png'),
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

          <Header transparent style={{justifyContent:'flex-start'}}>

          <View style={{width:55}}>
            <Left style={{width:55, justifyContent:'center'}}>
              <Button transparent onPress={() => this.props.navigation.openDrawer()} style={{width:55}}>
                <Icon type="FontAwesome" name="navicon" style={GlobalStyles.icon}/>
              </Button>
            </Left>
          </View>

          </Header>

          <ScrollView>

          <View style={{height:260, flex:0}}>
            <DeckSwiper 
              dataSource={cards}
              renderItem={item =>
                <Card style={{ height:250,  backgroundColor: 'black' }}>
                  <CardItem cardBody >
                    <Image style={{ height: 250, flex:1, resizeMode:'stretch'  }} source={item.image} />
                  </CardItem>
                </Card>
              }
            />
          </View>



          <View style={{height:165, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>

          <Card style={{ height:130, width:170, backgroundColor: 'black' }}>
            <CardItem cardBody>
              <Image source={require('../Images/Acapulco.png')} style={{height: 100, flex:1, resizeMode:'stretch'}}/>
            </CardItem>
            <CardItem style={{ height:30, flex:1, backgroundColor: 'white' }} >
              <Left>
                  <Text>Acapulco</Text>
              </Left>
            </CardItem>
          </Card>

          <Card style={{ height:130, width:170, backgroundColor: 'black' }}>
            <CardItem cardBody>
              <Image source={require('../Images/Aguascalientes.png')} style={{height: 100, flex:1, resizeMode:'stretch'}}/>
            </CardItem>
            <CardItem style={{ height:30, flex:1, backgroundColor: 'white' }} >
              <Left>
                  <Text>Aguascalientes</Text>
              </Left>
            </CardItem>
          </Card>
          </View>

                    <View style={{height:165, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>

          <Card style={{ height:130, width:170, backgroundColor: 'black' }}>
            <CardItem cardBody>
              <Image source={require('../Images/Austin.png')} style={{height: 100, flex:1, resizeMode:'stretch'}}/>
            </CardItem>
            <CardItem style={{ height:30, flex:1, backgroundColor: 'white' }} >
              <Left>
                  <Text>Austin</Text>
              </Left>
            </CardItem>
          </Card>

          <Card style={{ height:130, width:170, backgroundColor: 'black' }}>
            <CardItem cardBody>
              <Image source={require('../Images/Cancun.png')} style={{height: 100, flex:1, resizeMode:'stretch'}}/>
            </CardItem>
            <CardItem style={{ height:30, flex:1, backgroundColor: 'white' }} >
              <Left>
                  <Text>Cancun</Text>
              </Left>
            </CardItem>
          </Card>
          </View>

          <View style={{height:165, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>

          <Card style={{ height:130, width:170, backgroundColor: 'black' }}>
            <CardItem cardBody>
              <Image source={require('../Images/Chetumal.png')} style={{height: 100, flex:1, resizeMode:'stretch'}}/>
            </CardItem>
            <CardItem style={{ height:30, flex:1, backgroundColor: 'white' }} >
              <Left>
                  <Text>Chetumal</Text>
              </Left>
            </CardItem>
          </Card>

          <Card style={{ height:130, width:170, backgroundColor: 'black' }}>
            <CardItem cardBody>
              <Image source={require('../Images/Chicago.png')} style={{height: 100, flex:1, resizeMode:'stretch'}}/>
            </CardItem>
            <CardItem style={{ height:30, flex:1, backgroundColor: 'white' }} >
              <Left>
                  <Text>Chicago(Midway)</Text>
              </Left>
            </CardItem>
          </Card>
          </View>

</ScrollView>
        </Container>
      );
    }
  }