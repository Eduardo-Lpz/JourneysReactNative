import React from 'react';
import { View, Text, Button, ScrollView, StatusBar, Image, StyleSheet, renderCard, onSwiped,onSwipedAllnpm  } from 'react-native';
import { createStackNavigator, createDrawerNavigator, TabRouter } from 'react-navigation';
import {Header, SearchBar,Card, ListItem, Icon, Avatar} from 'react-native-elements'
import GlobalStyles from '../../GlobalStyles';
import SignUp from '../Screens/SignUp';


class MyHomeScreen extends React.Component {

  static navigationOptions = {
    
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/chat.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {

    return (


      <View style={{ flex: 1}}>
<Header
statusBarProps={{ barStyle: 'light-content' }}
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Journeys', style: { color: '#fff', fontSize:25 ,justifyContent: 'center', alignItems: 'center'} }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

<SearchBar
  round
  lightTheme
  searchIcon={false} // You could have passed `null` too
  clearIcon={{ color: 'gray' }}
  searchIcon={{ size: 24 }}
  cancelButtonTitle="Cancel"
  cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  //onChangeText={someMethod}
  //onClear={someMethod}
  placeholder='Busca tu destino' />

        <Text> Welcome Journeys </Text>


      </View>
    );
  }
}



class MyProfile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/profile.jpg')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (

            <View style={{ flex: 1}}>
<Header
statusBarProps={{ barStyle: 'light-content' }}
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Journeys', style: { color: '#fff', fontSize:25 ,justifyContent: 'center', alignItems: 'center'} }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
      <Avatar
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  size="xxlarge"
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
        <Text > HOME PAGE! </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />

      </View>
    );
  }
}



class MyPaymentMethods extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Payment methods',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/notificaciones.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };



  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> This is the Payment methods screen </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  outerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 15,
    height: 70,
  },
});

class MyFlights extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Flights',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/notificaciones.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };





  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> This is the flights screen </Text>

      </View>
    );
  }
}


class LogOutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Log Out',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/notificaciones.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
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



const MiApp = createDrawerNavigator({
  Home: { screen: MyHomeScreen, },
  Profile: { screen: MyProfile, },
  Payment: { screen: MyPaymentMethods, },
  Flights: { screen: MyFlights, },
  LogOut: { screen: LogOutScreen, },


});

export default createDrawerNavigator({
  Home: { screen: MyHomeScreen, },
  Profile: { screen: MyProfile, },
  Payment: { screen: MyPaymentMethods, },
  Flights: { screen: MyFlights, },
  LogOut: { screen: LogOutScreen, },
  
},
  {
    headerMode: 'blue',
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: '#f0f8ff',
    drawerWidth: 300,
  });
  /*
class Screenr extends React.Component {
    render() {
        return (
            <View style={GlobalStyles.FirstScreen}>
                <Text>HOMESCREEN</Text>      
                <Button
                   onPress={() => this.props.navigation.goBack()}
                    title="Log Out"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}
*/
/*
const RootStack = createStackNavigator(
  {
    Menu: MyHomeScreen,
    //Reg: LoginOrSignUp,
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none',
  },
);*/
/*
export default class App extends React.Component {
  render() {
   // return <RootStack />;
   return <MiApp/>;
  }}
  */