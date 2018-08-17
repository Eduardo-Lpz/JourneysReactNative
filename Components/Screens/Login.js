import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, TextInput} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';
import Principal from '../Screens/DrawerNavigator'

class Screend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
    render() {
        return (
            <View style={GlobalStyles.FirstScreen}>
                <Image source={require('../Images/LogoPhrase.png')}/>
                <Text>Log In to your account!</Text>
                <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "email-address"
          placeholder="Email"
          //caretHidden = {true}
          maxLength = {80}
          //clearTextOnFocus = {true}
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(text) => this.setState({text})}
        />
           <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          maxLength = {40}
          placeholder="Password"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {true}
          onChangeText={(text) => this.setState({text})}
        />     
                <TouchableOpacity style={GlobalStyles.button}
      onPress = {()=> this.props.navigation.navigate('Second')}
      >
      <Text style={GlobalStyles.buttonText}>Log In</Text>
      </TouchableOpacity>
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