import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Icon, Container, Header, Button, Left, Body, Text, View} from 'native-base';

import GlobalStyles from '../../GlobalStyles';

import ActionSheetFlights from './ActionSheetFlights';
import DatePickers from './DatePickers'



export default class FlightsScreen extends Component {
      constructor(props){
        super(props);
        this.state = {
          BookAeropuertoOrigen:'Origen',
          BookAeropuertoDestino:'Destino',
          AeropuertoParaFlujo:'test'
        };
        this.handleChangeValueDestino=this.handleChangeValueDestino.bind(this);
        this.handleChangeValueOrigen=this.handleChangeValueOrigen.bind(this);
        this.handleChangeValueOrigen2=this.handleChangeValueOrigen2.bind(this);
    }
    static navigationOptions = {
      drawerLabel: 'Reservar Vuelos',
      drawerIcon: () => (
        <Icon type="FontAwesome" name="plane" style={GlobalStyles.icon}/>
      )
    };
    //handleChangeValue = e => this.setState({value: e.target.value});
    handleChangeValueOrigen2(e){
      ()=>this.setState({BookAeropuertoOrigen:e.target.value})
    }
    handleChangeValueOrigen = e => this.setState({BookAeropuertoOrigen:e.target.AirportValue});
    handleChangeValueDestino = e => this.setState({BookAeropuertoDestino:e.target.AirportValue});
    render() {
      return (
        <Container  style={GlobalStyles.BgColor}>
        <Header transparent>
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

          <ActionSheetFlights AirportValue={this.state.BookAeropuertoOrigen}
                              onChangeTextValue={this.handleChangeValueOrigen2}/>

          <ActionSheetFlights nombreMostrar='Destino' AirportValue={this.state.BookAeropuertoDestino}/>
          </View>

          <View  style={{height:20, flex:0}}></View>


          <View  style={{height:70, paddingTop:3, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>
          <DatePickers/>
          <DatePickers/>
          </View>

          <View  style={{height:100, flex:0}}>
          <Button transparent onPress={()=>console.log(this.state.BookAeropuertoOrigen)} style={{width:55}}>
              <Icon type="FontAwesome" name="circle" style={GlobalStyles.icon}/>
            </Button>
          </View>


          
          </ScrollView>
        </Container>
      );
    }
}