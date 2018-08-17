import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'native-base';
import GlobalStyles from '../../GlobalStyles';


export default class LogOutScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'cerrar Sesion',
      drawerIcon: () => (
        <Icon type="FontAwesome" name="optin-monster" style={GlobalStyles.icon}/>
      )
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> Are you sure you want to log out? </Text>
          <Button
            onPress={() => this.props.navigation.navigate('Sign')}
            title="Log out"
          />
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go Back home"
          />
        </View>
      );
    }
  }
  