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
      <Container style={{backgroundColor:'black'}}>
          <View style={{width:400, height:200, justifyContent:'center', backgroundColor:'white'}} >
          <Content padder style={{ backgroundColor: "blue" }}>
          <Button style={{width:200, height:150, justifyContent:'center'}}>
          <DatePicker style={{width:200, height:150}} itemStyle={{height: 150}}
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Seleccionar Fecha"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            />
            </Button>
            </Content>
            </View>
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
       
      </Container>
    );
  }
}