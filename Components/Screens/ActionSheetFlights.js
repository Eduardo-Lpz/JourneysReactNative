
import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation';
import { ScrollView, AsyncStorage } from 'react-native';
import { Container, Header, Button, Content, ActionSheet, Text, View, Root} from "native-base";
var BUTTONS = [
  { text: "Acapulco(ACA)", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Aguascalientes(AGU)", icon: "analytics", iconColor: "#f42ced" },
  { text: "Cancún(CUN)", icon: "aperture", iconColor: "#ea943b" },
  { text: "Chetumal(CTM)", icon: "trash", iconColor: "#fa213b" },
  { text: "Chicago(Midway)(MDW)", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
const DESTINO_VUELO = 'myDestino';

export default class ActionSheetIconExample extends Component {
  constructor(props){
    super(props);
    this.state={
        Origen:'',
        Fecha_De_Salida:'',
        Hora_De_Salida:'',
        Destino:'',
        Fecha_De_Llegada:'',
        Hora_De_Llegada:'',
        Capacidad:'',
        Precio:'',
        Vuelos:[],
        offset: 0,
        searchTerm:'',
        myDestino:''
    };

}

_storeData = async (myDestino) => {
  try {
    console.log(myDestino);
    await AsyncStorage.setItem(DESTINO_VUELO, myDestino);
    //this.gettoken();
  } catch (error) {
    // Error saving data
  }
}

  
  componentDidMount(){
    this.fetchFlights();
}

  fetchFlights(){
    //fetch('http://192.168.1.75:3001/api/journeys/Flgts/') 
    fetch('http://192.168.1.75:3001/api/journeys/User/') 
        .then(res=>res.json())
        .then(data=>{
            this.setState({Vuelos:data});
            console.log(data)
            console.log(this.state.Vuelos)
        });
}
  render() {
    return (
      <View >
        <Root>
          <Button style={{width:180, height:150, justifyContent:'center'}}
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Aeropuerto"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Text >Aeropuerto</Text>
          </Button>
          </Root>
      </View>
      
    );
  }
}