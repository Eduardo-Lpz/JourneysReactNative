import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { Icon } from 'native-base';
import GlobalStyles from '../../GlobalStyles';



 export default class LogOutScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'cerrar Sesion',
      drawerIcon: () => (
        <Icon type="Entypo" name="log-out" style={GlobalStyles.icon}/>
      )
    };
    render() {
      const showAlert = () => {
        Alert.alert(
          'Log Out',
          'Are you sure you want to log out?',
          [
            {text: 'Cancel', onPress: () => this.props.navigation.goBack()},
            {text: 'Acept', onPress: () => console.log("acept")},
          ],
          { cancelable: false }
        )}
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {showAlert}
        </View>
      );
    }
  }
