import React, { Component } from 'react';
import { ScrollView, Modal, TouchableHighlight, Alert, TouchableOpacity,AsyncStorage } from 'react-native';
import { Icon, Content, Container, Header, Button,Input, Form,Item, Left, Right, Body, Text, Radio, View,Card, CardItem, Row } from 'native-base';
import GlobalStyles from '../../GlobalStyles';
import { createStackNavigator } from 'react-navigation';
import Registro from '../Screens/Registro'

const ACCESS_TOKEN = 'myId';
const DESTINO_VUELO = 'myDestino';




class FlightsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Destino:'Billings Logan International Airport',
      Origen:'',
      _id:'',
      myId:'',
      myDestino:'',
      errors:'',
      Users:[],
      Vuelos:[]
      
    };
    //this.updateUser = this.updateUser.bind(this);
    
  }



  static navigationOptions = {
    drawerLabel: 'My Flights',
    drawerIcon: () => (
      <Icon type="FontAwesome" name="plane" style={GlobalStyles.icon}/>
    )
  };


  async getid(){
    console.log("get");
    try {
      var value = await AsyncStorage.getItem(ACCESS_TOKEN);
        this.setState({_id:value});
        // We have data!!
        console.log("hola");
        console.log("valor"+value);
        console.log("val"+this.state._id);
        console.log("get");
        console.log(this.state._id);

    console.log(this.state.first_name);
    //this.updateArray.bind(this);
      }
      catch (error) {
        console.log("error");
       // Error retrieving data
     }
  }

  fetchFlights(){
    fetch('http://172.20.19.72:3001/api/journeys/Flgts/')  
        .then(res=>res.json())
        .then(data=>{
            console.log("fetch");
            data.forEach(element => {
                if(element["Destino"]==this.state.Destino){
                    this.state.Vuelos.push(element);
                    this.setState({
                        _id: element["_id"]
                    });
                    console.log(element);
                }
                
            });
            console.log(this.state.Vuelos);
        });
        
}

_storeVueloId = async (myDestino) => {
    try {
      console.log(myDestino);
      await AsyncStorage.setItem(DESTINO_VUELO, myDestino);
      this.props.navigation.navigate('Registro')
    } catch (error) {
      // Error saving data
    }
  }


  componentDidMount(){
    this.fetchFlights();

}


  render() {      

    const showAlert = () => {
    Alert.alert(
      'Are you sure you want to save the changes?',
      'If it does, there will be no going back',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.GuardarCambios(this.state._id)},
      ],
      { cancelable: false }
    )}
   
    return (
      <Container  style={GlobalStyles.BgColor}>
                    
        <Header transparent style={GlobalStyles.heather}>
        <View style={{width:55}}>
          <Left style={{width:55, justifyContent:'center'}}>
            <Button transparent onPress={() => this.props.navigation.goBack()} style={{width:55}}>
              <Icon type="FontAwesome" name="arrow-left" style={GlobalStyles.icon}/>
            </Button>
          </Left>
          </View>
          <Body style={{alignItems:'flex-start'}}>
            <Text style={GlobalStyles.FontHeaders}>Flights List</Text>
          </Body>
        </Header>
        <ScrollView style={{backgroundColor:'white'}}>
        <Body style={{alignItems:'flex-start',height:1400, borderColor:'white', backgroundColor:'white'}}>
            {this.state.Vuelos.map((vuelo,_id) =>{
                return (
                    <Card key={_id} style={{height:300, flex:0}}>

                        <CardItem>
                            <View>
                                <Text>
                                    {"Destino: "+vuelo.Destino}
                                </Text>
                                
                            </View>
                        </CardItem>
                        <CardItem>
                            <View>
                                <Text>
                                    {"Origen: "+vuelo.Origen}
                                </Text>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View>
                                <Text>
                                    {"Fecha de Salida: "+vuelo.Fecha_De_Salida}
                                </Text>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View>
                                <Text>
                                    {"Hora de Salida: "+vuelo.Hora_De_Salida}
                                </Text>
                            </View>
                        </CardItem>
                       
                        <CardItem>
                            <View>
                                <Text>
                                    {"Hora de Llegada: "+vuelo.Hora_De_Llegada}
                                </Text>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View>
                                <Text>
                                    {"Precio: "+vuelo.Precio}
                                </Text>
                            </View>
                        </CardItem>
                    </Card>
                )}   
            )}
            <Row style={{alignItems:'flex-start'}}>
            <Item>
            <TouchableOpacity
                style={GlobalStyles.button2}
                //onPress = {()=> this.props.navigation.navigate('Second')}
            >
                <Text style={GlobalStyles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            </Item>
            <Item>
            <TouchableOpacity
                style={GlobalStyles.button2}
                //onPress = {()=> this.props.navigation.navigate('Second')}
            >
                <Text style={GlobalStyles.buttonText}>Back</Text>
            </TouchableOpacity>
            </Item>
            <Item>
            <TouchableOpacity
            style={GlobalStyles.button2}
                //onPress={this._storeVueloId(this.state.myDestino)}
                onPress = {()=> this.props.navigation.navigate('Second')}
            >
                <Text style={GlobalStyles.buttonText}>Next</Text>
            </TouchableOpacity>
            </Item>
            </Row>
         </Body>
            
        </ScrollView>
      </Container>
    );
  }

}

const RootStack = createStackNavigator(
    {
      Home: FlightsList,
      Second: Registro,
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
    },
  );
  
  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }}
