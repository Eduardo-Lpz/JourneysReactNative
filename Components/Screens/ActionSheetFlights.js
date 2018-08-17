
import React, { Component } from "react";
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

export default class ActionSheetIconExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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