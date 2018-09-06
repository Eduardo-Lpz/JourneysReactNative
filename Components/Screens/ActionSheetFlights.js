
import React, { Component } from "react";
import { TextInput } from 'react-native';
import { Button, ActionSheet, Text, View, Root, Input } from "native-base";

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class ActionSheetIconExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NombreParaMostrar:this.props.AirportValue,
      Aeropuertos: []
    };
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

  render() {
    return (
      <View >
        <Root>
          <Button style={{width:180, height:150, justifyContent:'center'}}
            onPress={() =>{
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
            )
          }}
          >
           
           <Text>{this.state.NombreParaMostrar}</Text>

            
          </Button>
          </Root>
      </View>
      
    );
  }
}

/*
            <TextInput
              editable = {false}
              style={{height: 150, borderColor: 'red', borderWidth: 1}}
                      //value={this.state.name} onChangeText={(text) => this.setState({name: text})}
              onChange={this.props.onChangeTextValue}
              //onChangeValue={this.props.onChangeTextValue}
              //onChange={this.setState({NombreParaMostrar:textoDeEntrada})}
              //onSelectionChange={()=>console.log("oka")}
              defaultValue={this.state.NombreParaMostrar}
            />
*/