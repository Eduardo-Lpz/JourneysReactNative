import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text, View, Button } from 'native-base';

export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (

          <View>

          <Button style={{width:180, height:60, justifyContent:'center'}}>
          <DatePicker style={{width:200, height:150}} itemStyle={{height: 150}}
            defaultDate={new Date(2018, 8, 4)}
            minimumDate={new Date(2018, 8, 3)}
            maximumDate={new Date(2019, 11, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Seleccionar Fecha"
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            />
            </Button>
            
            </View>

    );
  }
}