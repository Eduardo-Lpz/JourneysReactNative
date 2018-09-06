import React, { Component } from 'react';
import { ScrollView, Modal, TouchableHighlight, Alert, TouchableOpacity,AsyncStorage } from 'react-native';
import { Icon, Content, Container, Header, Button,Input, Form,Item, Left, Right, Body, Text, Radio, View,Card, CardItem } from 'native-base';
import Toast from 'react-native-simple-toast';
import GlobalStyles from '../../GlobalStyles';
import { createStackNavigator } from 'react-navigation';
import PayForm from '../Screens/PayForm';

const ACCESS_TOKEN = 'myId';
const DESTINO_VUELO = 'myDestino';


 export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Destino:'Aeropuerto Internacional Eduardo Gomes',
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


  


  componentDidMount(){

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
            <Text style={GlobalStyles.FontHeaders}>My Profile</Text>
          </Body>
        </Header>
        <ScrollView>
        
        
           
            <TouchableOpacity
                //onPress={this._storeVueloId(this.state.myDestino)}
                onPress = {()=> this.props.navigation.navigate('Second')}
            >
                <Text style={GlobalStyles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </ScrollView>
      </Container>
    );
  }

}




