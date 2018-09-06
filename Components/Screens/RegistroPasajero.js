import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { Icon, Text, View, Row } from 'native-base';
import GlobalStyles from '../../GlobalStyles';

const ACCESS_TOKEN = 'myId';
const {width} = Dimensions.get('window');

const frameWidth = width;
export default class Passenger extends Component {
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>REGISTRO PASAJERO</Text>
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType="default"
          maxLength = {16}
          placeholder="Nombre"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Number: val})}
        />
        
  <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "default"
          maxLength = {16}
          placeholder="Apellidos"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Type: val})}
        />
        <Text>Fecha de Nacimiento</Text>
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          keyboardType= "numeric"
          maxLength = {2}
          placeholder="Dia"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Exp_Month: val})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          keyboardType= "numeric"
          maxLength = {2}
          placeholder="Mes"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Exp_Year: val})}
          //onBlur={}
                  />
  <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          keyboardType= "numeric"
          maxLength = {4}
          placeholder="Año"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_CSV: val})}
                  />


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

