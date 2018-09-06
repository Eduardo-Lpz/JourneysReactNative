import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import { Icon, Text, View } from 'native-base';
import GlobalStyles from '../../GlobalStyles';

const ACCESS_TOKEN = 'myId';

export default class NewCard extends Component {
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
    this.AddCard=this.AddCard.bind(this);
  }

  componentDidMount(){
    //this.fetchCard();
    this.getid();
}

async getid(){
  console.log("get");
  try {
    var value = await AsyncStorage.getItem(ACCESS_TOKEN);
      this.setState({Ap_Customer_ID:value});
      // We have data!!
      console.log("hola");
      console.log("valor"+value);
      console.log("val"+this.state.Ap_Customer_ID);
      console.log("get");
      console.log(this.state.Ap_Customer_ID);

    }
    catch (error) {
      console.log("error");
     // Error retrieving data
   }
}

fetchCard(){
    //fetch('http://172.20.19.55:3001/api/journeys/Cards/')
    fetch('http://192.168.0.12:3001/api/journeys/Cards/') 
        .then(res=>res.json())
        .then(data=>{
            this.setState({Cards:data});
            console.log(data);
            console.log(this.state.Cards);
        });
  }
  
  static navigationOptions = {
    drawerLabel: 'Tarjetas',
    drawerIcon: () => (
      <Icon type="FontAwesome" name="user" style={GlobalStyles.icon}/>
    )
  };

  AddCard(e){       
    //fetch('http://172.20.19.55:3001/api/journeys/Cards/',{
    fetch('http://192.168.0.12:3001/api/journeys/Cards/',{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res=> res.json())
    .then(data => {
        this.setState({
          Ap_Name: '',
          Ap_Number: '',
          Ap_Type: '',
          Ap_Exp_Month: '',
          Ap_Exp_Year: '',
          Ap_CSV: '',
        });
        this.fetchCard();
        console.log("Exito");
        //this.props.navigation.goBack();
    })
    .catch(err=> console.error(err));
    //e.preventDefault();
}


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
  

  <TouchableOpacity style={GlobalStyles.button}
        //onPress = {()=> this.props.navigation.navigate('Segunda')}
        onPress = {this.AddCard()}>
        <Text style={GlobalStyles.buttonText}>Save Card</Text>
        </TouchableOpacity>
    
      </View>
    );
  }
}

