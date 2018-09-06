import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Icon, Content, Container, Header, Button, Left, Right, Body, Text, Root, Card, CardItem, View, Item} from 'native-base';

import GlobalStyles from '../../GlobalStyles';
import ActionSheetFlights from './ActionSheetFlights';
import DatePickers from './DatePickers'
import List from '../Screens/FlightsList'

const DESTINO_VUELO = 'myDestino';


class FlightsScreen extends Component {

    static navigationOptions = {
      drawerLabel: 'Reservar Vuelos',
      drawerIcon: () => (
        <Icon type="FontAwesome" name="plane" style={GlobalStyles.icon}/>
      )
    };


    render() {
      return (
        <Container  style={GlobalStyles.BgColor}>
        <Header transparent style={GlobalStyles.heather}>
        <View style={{width:55}}>
          <Left style={{width:55, justifyContent:'center'}}>
            <Button transparent onPress={() => this.props.navigation.goBack()} style={{width:55}}>
              <Icon type="FontAwesome" name="arrow-left" style={GlobalStyles.icon}/>
            </Button>
          </Left>
          </View>
          <Body style={{alignItems:'flex-start'}}>
            <Text style={GlobalStyles.FontHeaders}>Reservar Vuelos</Text>
          </Body>
        </Header>
          <ScrollView>

          <View  style={{height:150, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>
          <ActionSheetFlights/>
          <ActionSheetFlights/>
          </View>

          <View  style={{height:20, flex:0}}>

          </View>

          <View  style={{height:70, paddingTop:3, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>
          <DatePickers/>
          <DatePickers/>
          </View>

          <View  style={{height:20, flex:0}}>
          </View>

        <Row style={{alignItems:'flex-start'}}>
           <Item>
            <TouchableOpacity
            style={GlobalStyles.button2}
                //onPress={this._storeVueloId(this.state.myDestino)}
                onPress = {()=> this.props.navigation.navigate('Second')}
            >
                <Text style={GlobalStyles.buttonText}>Next</Text>
            </TouchableOpacity>
            </Item>
            </Row>
          </ScrollView>
        </Container>
      );
    }
}

const RootStack = createStackNavigator(
  {
    Home: FlightsScreen,
    Second: List,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }}