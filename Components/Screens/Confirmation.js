import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { Icon, Text, View, Row, Label } from 'native-base';
import GlobalStyles from '../../GlobalStyles';

const ACCESS_TOKEN = 'myId';
const {width} = Dimensions.get('window');

const frameWidth = width;
export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      Ap_Number:'',
      Ap_Type:'',
      Ap_Exp_Month:'',
      Ap_Exp_Year:'',
      Ap_CSV:'',
      Ap_Name:'',
      Ap_Customer_ID:'',
      myId:''
      
    };
  }

  componentDidMount(){
}
  
  static navigationOptions = {
    drawerLabel: 'Tarjetas',
    drawerIcon: () => (
      <Icon type="FontAwesome" name="user" style={GlobalStyles.icon}/>
    )
  };


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
       <Text></Text>
       <Text></Text>
   <Text>Confirmar Viaje</Text>
   <Label style={GlobalStyles.Label}>Vuelo: </Label>
   <Label style={GlobalStyles.Label}>Vuelo: </Label>
   <Label style={GlobalStyles.Label}>Nombre: </Label>
   <Label style={GlobalStyles.Label}>Asiento: </Label>
   <Label style={GlobalStyles.Label}>Extras: </Label>
   <Label style={GlobalStyles.Label}>Codigo de Promocion: </Label>
   <Label style={GlobalStyles.Label}>Total: </Label>
        
  
  <Row>
<TouchableOpacity style={GlobalStyles.button}
        //onPress = {()=> this.props.navigation.navigate('Segunda')}
        >
        <Text style={GlobalStyles.buttonText}>Back</Text>
        </TouchableOpacity>
<TouchableOpacity style={GlobalStyles.button}
        //onPress = {()=> this.props.navigation.navigate('Segunda')}
        >
        <Text style={GlobalStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
<TouchableOpacity style={GlobalStyles.button}
        //onPress = {()=> this.props.navigation.navigate('Segunda')}
>
        <Text style={GlobalStyles.buttonText}>Next</Text>
        </TouchableOpacity>
</Row>
      </View>
    );
  }
}

