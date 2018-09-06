import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import { Icon, Text, View, Row } from 'native-base';
import GlobalStyles from '../../GlobalStyles';

const ACCESS_TOKEN = 'myId';

export default class PayForm extends Component {
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
        <Text>NEW CARD</Text>
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType="numeric"
          maxLength = {16}
          placeholder="Card Number"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Number: val})}
        />
        
  <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "default"
          maxLength = {16}
          placeholder="Card Type"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Type: val})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          keyboardType= "numeric"
          maxLength = {2}
          placeholder="Expiration Month"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Exp_Month: val})}
        />
   <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          keyboardType= "numeric"
          maxLength = {4}
          placeholder="Expiration Year"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Exp_Year: val})}
          //onBlur={}
                  />
  <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          //keyboardType={email-address}
          keyboardType= "numeric"
          maxLength = {3}
          placeholder="Security Code"
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {true}
          onChangeText={(val) => this.setState({Ap_CSV: val})}
                  />
                  <TextInput style={GlobalStyles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          keyboardType= "default"
          placeholder="Name on Card"
          maxLength = {80}
          placeholderTextColor='#000000'
          selectionColor="#000"
          secureTextEntry = {false}
          onChangeText={(val) => this.setState({Ap_Name: val})}
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

