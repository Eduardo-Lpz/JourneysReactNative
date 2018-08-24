
import React, { Component } from "react";
import { Container, Header, Button, Content, ActionSheet, Text, View, Root, List, ListItem, Toast} from "native-base";
var BUTTONS = [
  { text: "Acapulco(ACA)", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Aguascalientes(AGU)", icon: "analytics", iconColor: "#f42ced" },
  { text: "Cancún(CUN)", icon: "aperture", iconColor: "#ea943b" },
  { text: "Chetumal(CTM)", icon: "trash", iconColor: "#fa213b" },
  { text: "Chicago(Midway)(MDW)", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class ActionSheetIconExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NombreParaMostrar:this.props.nombreMostrar,
      Aeropuertos: []
    };
  }
  componentDidMount(){
    return fetch('http://172.20.19.214:3001/api/journeys/Apts/')
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