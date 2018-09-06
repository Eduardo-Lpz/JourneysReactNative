import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './Home'
import Profile from './profile'
import BookFlights from './BookFlights'
import Test from './Test2'
import LogOut  from './LogOut'
import Cards from './Confirmation'

export default createDrawerNavigator({
  Home: { screen: HomeScreen },
  Flights: { screen: BookFlights },
  //Test: { screen: Test },
  Profile: { screen: Profile },
  Cards: {screen: Cards},
  LogOut: { screen: LogOut }
},
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: '#f5f5f5',
    drawerWidth: 280
  });
  