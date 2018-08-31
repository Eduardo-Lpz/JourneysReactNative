import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './Home'
import Profile from './Profile'
import BookFlights from './BookFlights'
import Test from './Test2'
import LogOut  from './LogOut'
import MisVuelos from './MisVuelos'


export default createDrawerNavigator({
  Home: { screen: HomeScreen },
  Flights: { screen: BookFlights },
  //Test: { screen: Test },
  Profile: { screen: Profile },
  LogOut: { screen: LogOut },
  MisVuelos: {screen: MisVuelos},

},
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: '#f5f5f5',
    drawerWidth: 300
  });
  