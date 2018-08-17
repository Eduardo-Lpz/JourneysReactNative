import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './Home'
import Profile from './Profile'
import BookFlights from './BookFlights'
import Test from './Test2'
import LogOut  from './LogOut'

export default createDrawerNavigator({
  Home: { screen: HomeScreen },
  Flights: { screen: BookFlights },
  Test: { screen: Test },
  Profile: { screen: Profile },
  LogOut: { screen: LogOut },
},
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: 'white',
    drawerWidth: 300
  });
  