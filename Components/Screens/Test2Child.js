import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Icon, Container, Header, Button, Left, Body, Text, View, Root, ActionSheet} from 'native-base';

import GlobalStyles from '../../GlobalStyles';

import ActionSheetFlights from './ActionSheetFlights';
import DatePickers from './DatePickers'
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;


export default class FlightsScreen extends Component {
      constructor(props){
        super(props);
        this.state = {
          NameBttnSeleccionOrigen:'Origen',
          NameBttnSeleccionDestino:'Destino',
          Aeropuertos: [],
          
          BookAeropuertoOrigen:'Origen',
          BookAeropuertoDestino:'Destino',
          AeropuertoParaFlujo:'test'
        };
    }
    static navigationOptions = {
      drawerLabel: 'Reservar Vuelos',
      drawerIcon: () => (
        <Icon type="FontAwesome" name="plane" style={GlobalStyles.icon}/>
      )
    }
    componentDidMount(){
      return fetch('http://172.20.19.170:3001/api/journeys/Apts/')//172.20.19.136:3001
        .then((response) => response.json())
        .then(data=>{
         data.forEach((element) => {
           this.state.Aeropuertos.push("("+element.Ap_Code+")" + " "+element.Ap_City);
         });
          })
        .catch((error) =>{
          console.error(error);
        });
    }
    //handleChangeValue = e => this.setState({value: e.target.value});
    //handleChangeValueOrigen2(e){
      //()=>this.setState({BookAeropuertoOrigen:e.target.value})
    //}
    //handleChangeValueOrigen = e => this.setState({BookAeropuertoOrigen:e.target.AirportValue});
    //handleChangeValueDestino = e => this.setState({BookAeropuertoDestino:e.target.AirportValue});
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
          {/*/////////////////////////////*/}
          <Root>
          <Button style={{width:205 , height:150, justifyContent:'center'}}
            onPress={() =>{
            ActionSheet.show(
              {
                options: this.state.Aeropuertos,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Aeropuerto"
              },
              ArrayIndex => {
                this.setState({NameBttnSeleccionOrigen:this.state.Aeropuertos[ArrayIndex]})
              }
            )
          }}
          >
           <Text>{this.state.NameBttnSeleccionOrigen}</Text>
          </Button>
          </Root>
          {/*/////////////////////////////*/}
          <Root>
          <Button style={{width:205, height:150, justifyContent:'center'}}
            onPress={() =>{
            ActionSheet.show(
              {
                options: this.state.Aeropuertos,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Aeropuerto"
              },
              ArrayIndex => {
                this.setState({NameBttnSeleccionDestino:this.state.Aeropuertos[ArrayIndex]})
              }
            )
          }}
          >
           <Text>{this.state.NameBttnSeleccionDestino}</Text>
          </Button>
          </Root>
          {/*/////////////////////////////*/}
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