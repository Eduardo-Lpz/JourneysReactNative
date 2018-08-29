import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import {
    createStackNavigator,
    createBottomTabNavigator
  } from 'react-navigation';
//import Principal from '../Screens/LogInOrSignUp';
import GlobalStyles from '../../GlobalStyles';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      phone:'',
      role:'user',
      password_confirmation:'',
      Users:[],
      errors:[],  
     };
  }

  componentDidMount(){
    this.fetchUsers();
}

  fetchUsers(){
    fetch('http://172.20.19.83:3001/api/journeys/User/')
    //fetch('http://192.168.1.75:3001/api/journeys/User/') 
        .then(res=>res.json())
        .then(data=>{
            this.setState({Users:data});
            console.log(data);
            console.log(this.state.Users);
        });
  }

    static navigationOptions ={
      title: 'Sign Up',
      headerStyle: {
        backgroundColor: '#0000ff',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    AddUser(e){
        
      fetch('http://192.168.1.75:3001/api/journeys/User/',{
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then(res=> res.json())
      .then(data => {
          //window.Materialize.toast("User Agregado",900,"light-blue darken-3")
          this.setState({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            role: this.state.role,
            phone: this.state.phone,
            password: this.state.password,
          });
          this.fetchUsers();
      })
      .catch(err=> console.error(err));
      e.preventDefault();


  }


  
    render() {
      return (
        <View style={GlobalStyles.containerLogin}>
        <Text style={GlobalStyles.text}>REGISTER</Text>
        <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="First Name"
          maxLength = {80}
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({first_name: val})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          maxLength = {40}
          placeholder="Last Name"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({last_name: val})}
        ></TextInput>
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "email-address"
          maxLength = {40}
          placeholder="Email"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({email: val})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "phone-pad"
          maxLength = {40}
          placeholder="Phone Number"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({phone: val})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          maxLength = {40}
          placeholder="Password"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {true}
          onChangeText={(val) => this.setState({password: val})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          maxLength = {40}
          placeholder="Password Confirm"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {true}
          onChangeText={(val) => this.setState({password_confirmation: val})}
        />
  <TouchableOpacity style={GlobalStyles.button}
        //onPress = {()=> this.props.navigation.navigate('Segunda')}
        onPress = {this.AddUser.bind(this)}>
        <Text style={GlobalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
  
      </View>
      );
    }
  }

  const RootStack = createStackNavigator(
    {
      Sign: SignUp,
      //Segunda: Principal,
    },
    {
      initialRouteName: 'Sign',
      headerMode: 'none',
    },
  );

  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }}