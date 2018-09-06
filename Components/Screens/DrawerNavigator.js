import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './Home'
import Profile from './Profile'
import BookFlights from './BookFlights'
import LogOut  from './LogOut'
import MisVuelos from './MisVuelos'
import Cards from './NewCard'
import List from './FlightsList'
import Registro from './Registro'
import PayForm from './PayForm'
import Confirmation from './Confirmation'


export default createDrawerNavigator({
  Home: { screen: HomeScreen },
  Flights: { screen: BookFlights },
  Profile: { screen: Profile },
  Cards: {screen: Cards},
  Historial: {screen: List},
  LogOut: { screen: LogOut },
  //List: {screen: List},
  //Registro: {screen: Registro},
  //PayForm: {screen: PayForm},
  //Confirmation: {screen:Confirmation},
  //Principal:{screen: Principal},
 

},
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: '#f5f5f5',
    drawerWidth: 300
  });
  