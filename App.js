import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { View, Text } from 'native-base';


import GlobalStyles from './GlobalStyles';
import LoginOrSignUp from './Components/Screens/LogInOrSignUp'
import Test from './Components/Screens/DrawerNavigator'

import Test2 from './Components/Screens/DatePickers'
import DrawerNavigator from './Components/Screens/DrawerNavigator';

class HelloScreen extends Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Second')}>
        <View style={GlobalStyles.FirstScreen}>
          <Image style={GlobalStyles.imgmediana}source={require('./Components/Images/logosinfondo.png')}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HelloScreen,
    Second: LoginOrSignUp
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default class App extends Component {
  render() {
    return <RootStack/>
  }}
  
 
 
  