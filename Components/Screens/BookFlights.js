import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Icon, Content, Container, Header, Button, Left, Right, Body, Text, Root, Card, CardItem, View} from 'native-base';

import GlobalStyles from '../../GlobalStyles';

import ActionSheetFlights from './ActionSheetFlights';
import DatePickers from './DatePickers'



export default class FlightsScreen extends Component {
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
          <ActionSheetFlights EsOrigen={true} nombreMostrar='Origen'/>
          <ActionSheetFlights nombreMostrar='Destino'/>
          </View>

          <View  style={{height:20, flex:0}}>

          </View>

          <View  style={{height:70, paddingTop:3, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>
          <DatePickers/>
          <DatePickers/>
          </View>

          <View  style={{height:20, flex:0}}>
          </View>


          
          </ScrollView>
        </Container>
      );
    }
}