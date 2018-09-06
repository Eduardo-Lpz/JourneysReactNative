import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Icon, Container, Header, Button, Left, Body, Text, View, Root, ActionSheet, DatePicker, Picker} from 'native-base';

import GlobalStyles from '../../GlobalStyles';

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default  class FlightsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      NameBttnSeleccionOrigen:'Origen',
      NameBttnSeleccionDestino:'Destino',
      Aeropuertos: [],
      FechaDeOrigen: new Date(),
      FechaDeSalida: new Date(),
      NumeroDeAdultos: 0,
      NumeroDeMenores: 0,
      
      BookAeropuertoOrigen:'Origen',
      BookAeropuertoDestino:'Destino',
      AeropuertoParaFlujo:'test'
    };
    this.setDateOrigen = this.setDateOrigen.bind(this);
    this.setDateDestino = this.setDateDestino.bind(this);
}
static navigationOptions = {
    drawerLabel: 'Reservar Vuelos',
    drawerIcon: () => (
      <Icon type="FontAwesome" name="plane" style={GlobalStyles.icon}/>
    )
  }
setDateOrigen(newDate) {
  this.setState({ FechaDeOrigen: newDate });
}
setDateDestino(newDate) {
  this.setState({ FechaDeSalida: newDate });
}
onValueChangeNumeroDeAdultos(value) {
  this.setState({NumeroDeAdultos: value});
}
onValueChangeNumeroDeMenores(value) {
  this.setState({NumeroDeMenores: value});
}
componentDidMount(){
  return fetch('http://172.20.19.88:3001/api/journeys/Apts/')
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
    <Container  style={GlobalStyles.BgColor}>
    <Header transparent>
    <View style={{width:55}}>
      <Left style={{width:55, justifyContent:'center'}}>
        <Button transparent onPress={() => this.props.navigation.goBack()} style={{width:55}}>
          <Icon type="FontAwesome" name="arrow-left" style={GlobalStyles.icon}/>
        </Button>
      </Left>
      </View>
      <Body style={{alignItems:'flex-start'}}>
        <Text style={GlobalStyles.FontHeaders}>Reservar Vuelos</Text>
      </Body>
    </Header>
      

    <ScrollView>
      <View  style={{height:200, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>
      <Root>
      <Button style={{width:205 , height:200, justifyContent:'center', backgroundColor:'#01579b'}}
        onPress={() =>{
        ActionSheet.show(
          {
            options: this.state.Aeropuertos,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            title: "Aeropuerto"
          },
          ArrayIndex => {
            this.setState({NameBttnSeleccionOrigen:this.state.Aeropuertos[ArrayIndex]})
          }
        )
      }}
      >
       <Text>{this.state.NameBttnSeleccionOrigen}</Text>
      </Button>
      </Root>
      <Root>
      <Button style={{width:205, height:200, justifyContent:'center', backgroundColor:'#01579b'}}
        onPress={() =>{
        ActionSheet.show(
          {
            options: this.state.Aeropuertos,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            title: "Aeropuerto"
          },
          ArrayIndex => {
            this.setState({NameBttnSeleccionDestino:this.state.Aeropuertos[ArrayIndex]})
          }
        )
      }}
      >
       <Text>{this.state.NameBttnSeleccionDestino}</Text>
      </Button>
      </Root>
      </View>

      <View  style={{height:1, flex:0}}></View>

      <View  style={{height:100, flex:0, flexDirection: "row", justifyContent: 'space-between'}}>
      <Button style={{width:205, height:100, justifyContent:'center', backgroundColor:'#01579b'}}>
      <DatePicker style={{width:200, height:150}} itemStyle={{height: 150}}
        defaultDate={new Date(2018, 8, 4)}
        minimumDate={new Date(2018, 8, 3)}
        maximumDate={new Date(2019, 11, 31)}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="Fecha Origen"
        textStyle={{ color: "white" }}
        placeHolderTextStyle={{ color: "#d3d3d3" }}
        onDateChange={this.setDateOrigen}
        />
      </Button>
      <Button style={{width:205, height:100, justifyContent:'center', backgroundColor:'#01579b'}}>
      <DatePicker style={{width:200, height:150}} itemStyle={{height: 150}}
        defaultDate={new Date(2018, 8, 4)}
        minimumDate={new Date(2018, 8, 3)}
        maximumDate={new Date(2019, 11, 31)}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="Fecha Destino"
        textStyle={{ color: "white" }}
        placeHolderTextStyle={{ color: "#d3d3d3" }}
        onDateChange={this.setDateDestino}
        />
      </Button>
      </View>

      <View  style={{height:1, flex:0}}></View>


      <View  style={{height:100, flex:0, flexDirection: "row", justifyContent: 'space-between', backgroundColor:'black'}}>
      <Picker 
          mode="dropdown"
          style={{ width: 120, height:100, backgroundColor:'#01579b', color:'white' }}
          selectedValue={this.state.NumeroDeAdultos}
          onValueChange={this.onValueChangeNumeroDeAdultos.bind(this)}
        >
          <Picker.Item label="0 Adultos" value={0} />
          <Picker.Item label="1 Adulto" value={1} />
          <Picker.Item label="2 Adultos" value={2} />
          <Picker.Item label="3 Adultos" value={3} />
          <Picker.Item label="4 Adultos" value={4} />
          <Picker.Item label="5 Adultos" value={5} />
        </Picker>

        <Picker 
          mode="dropdown"
          style={{ width: 120, height:100, backgroundColor:'#01579b', color:'white', alignSelf:'center', justifyContent:'center' }}
          selectedValue={this.state.NumeroDeMenores}
          onValueChange={this.onValueChangeNumeroDeMenores.bind(this)}
        >
          <Picker.Item label="0 Menores" value={0} />
          <Picker.Item label="1 Menor" value={1} />
          <Picker.Item label="2 Menores" value={2} />
          <Picker.Item label="3 Menores" value={3} />
          <Picker.Item label="4 Menores" value={4} />
          <Picker.Item label="5 Menores" value={5} />
        </Picker>
      </View>

      <View  style={{height:60  , flex:0}}></View>

      <View style={{height:80}}>
        <Button  iconLeft transparen style={{height:80, width:300, alignSelf:'center', justifyContent:'center', backgroundColor:'#01579b'}}
        onPress={() => this.props.navigation.navigate('Second')}>
          
          <Text style={{color:'white'}}> Reservar Vuelo </Text>
        </Button>
      </View>


      </ScrollView>
      
    </Container>
  );
}
}
