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
      <Container>
              <DatePicker 
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
              />;
            }
          }>


      </Container>
    );
  }
}

/*
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });
paddingTop: STATUS_BAR_HEIGHT
 */