import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, TextInput,ActivityIndicatorIOS,StyleSheet, Component,
  AsyncStorage, TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';
import Principal from '../Screens/DrawerNavigator'

const ACCESS_TOKEN = 'myId';

class Screend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:'',
          errors:'',
          _id:'',
          showProgress: false,
          Users:[],
          
        };
      }

  _storeData = async (myId) => {
        try {
          console.log(myId);
          await AsyncStorage.setItem(ACCESS_TOKEN, myId);
          //this.gettoken();
        } catch (error) {
          // Error saving data
        }
      }


componentDidMount(){
  this.fetchUsers();
}

fetchUsers(){
  fetch('http://192.168.1.75:3001/api/journeys/User/')
      .then(res=>res.json())
      .then(data=>{
          this.setState({Users:data});
      });
}


      storeToken(responseData){
        AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
          if(err){
            console.log("an error");
            throw err;
          }
          console.log("success");
        }).catch((err)=> {
            console.log("error is: " + err);
        });
      }

      LoginPress(){
        this.setState({showProgress: true});
        this.fetchUsers();
        let id ="";
          this.state.Users.forEach(element => {
              if(element["email"]==this.state.email){
                  if(element["password"]==this.state.password){;
                    id=element["_id"];
                    this._storeData(id);
                    this.props.navigation.navigate('Second');
                  }
                  else{
                    this.setState({errors:"Contraseña icorrecta"});
                  }
              }
              else{
                this.setState({errors:"Este correo no esta asociado a ninguna cuenta de Journeys"});
              } 
            })
          }
    

    render() {
        return (
            <View style={GlobalStyles.containerLogin}>
                <Image style={GlobalStyles.imgmediana} source={require('../Images/logosinfondo.png')}/>
                <Text style={GlobalStyles.text}>Log In to your account!</Text>
                <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "email-address"
          placeholder="Email"
          maxLength = {80}
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(text) => this.setState({email:text})}
        />
           <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          maxLength = {40}
          placeholder="Password"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {true}
          onChangeText={(text) => this.setState({password:text})}
        />     
                <TouchableOpacity style={GlobalStyles.button}
     //onPress={this.LoginPress.bind(this)}
     onPress = {()=> this.props.navigation.navigate('Second')}
      >
      <Text style={GlobalStyles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={GlobalStyles.error}>
        {this.state.errors}
      </Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
  {
    Home: Screend,
    Second: Principal,
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