
import React, { Component } from "react";
import { Button, ActionSheet, Text, View, Root } from "native-base";

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

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
        searchTerm:''
    };

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
                options: this.state.Aeropuertos,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Aeropuerto"
              },
              ArrayIndex => {
                this.setState({NombreParaMostrar:this.state.Aeropuertos[ArrayIndex]})
              }
            )}
          >
            <Text >{this.state.NombreParaMostrar}</Text>
          </Button>
          </Root>
      </View>
      
    );
  }
}