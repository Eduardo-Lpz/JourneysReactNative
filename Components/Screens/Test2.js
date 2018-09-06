import React, { Component } from "react";
import { Container, Header, Content, Picker, Form,      Icon, View, Button } from "native-base";
import GlobalStyles from '../../GlobalStyles';

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumeroDeAdultos: 0,
      NumeroDeMenores: 0
    };
  }
  onValueChangeNumeroDeAdultos(value) {
    this.setState({NumeroDeAdultos: value});
  }
  onValueChangeNumeroDeMenores(value) {
    this.setState({NumeroDeMenores: value});
  }
  render() {
    return (
      <View><View>
            <Picker 
              note
              mode="dropdown"
              style={{ width: 120, backgroundColor:"white" }}
              selectedValue={this.state.NumeroDeAdultos}
              onValueChange={this.onValueChangeNumeroDeAdultos.bind(this)}
            >
              <Picker.Item label="1 Adulto" value={1} />
              <Picker.Item label="2 Adultos" value={2} />
              <Picker.Item label="3 Adultos" value={3} />
              <Picker.Item label="4 Adultos" value={4} />
              <Picker.Item label="5 Adultos" value={5} />
            </Picker>

            <Picker 
              note
              mode="dropdown"
              style={{ width: 120, backgroundColor:"white" }}
              selectedValue={this.state.NumeroDeMenores}
              onValueChange={this.onValueChangeNumeroDeMenores.bind(this)}
            >
              <Picker.Item label="1 Menor" value={1} />
              <Picker.Item label="2 Menores" value={2} />
              <Picker.Item label="3 Menores" value={3} />
              <Picker.Item label="4 Menores" value={4} />
              <Picker.Item label="5 Menores" value={5} />
            </Picker>
            </View>

                    <View  style={{height:100, flex:0}}>
          <Button transparent onPress={()=>console.log(this.state.NumeroDeAdultos)} style={{width:55}}>
              <Icon type="FontAwesome" name="circle" style={GlobalStyles.icon}/>
            </Button>
            <Button transparent onPress={()=>console.log(this.state.NumeroDeAdultos)} style={{width:55}}>
              <Icon type="FontAwesome" name="circle" style={GlobalStyles.icon}/>
            </Button>
          </View></View>
     
    );
  }
}