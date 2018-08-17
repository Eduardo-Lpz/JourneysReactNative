import React from 'react';
import { View, Text, Image,TouchableOpacity, Button,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GlobalStyles from '../../GlobalStyles';
import SignUp from '../Screens/SignUp';
import LogIn from '../Screens/Login';

class LogInOrSignUp extends React.Component {
  render() {
    return (
      <View style={GlobalStyles.FirstScreen}>
        <Image source={require('../Images/LogoPhrase.png')}/>

        <TouchableOpacity style={GlobalStyles.button}
      onPress = {()=> this.props.navigation.navigate('Second')}
      >
      <Text style={GlobalStyles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={GlobalStyles.button}
      onPress = {()=> this.props.navigation.navigate('Sign')}
      >
      <Text style={GlobalStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: LogInOrSignUp,
    Second:LogIn,
    Sign: SignUp,
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