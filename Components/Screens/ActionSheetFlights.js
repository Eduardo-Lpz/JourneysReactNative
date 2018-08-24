
import React, { Component } from "react";
import { Button, ActionSheet, Text, View, Root } from "native-base";

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
    return fetch('http://172.20.19.17:3001/api/journeys/Apts/')
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