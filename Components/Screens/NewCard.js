import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { ScrollView, Modal, TouchableHighlight, Alert, TouchableOpacity,AsyncStorage, TextInput } from 'react-native';
import { Icon, Content, Container, Header, Button,Input, Form,Item, Left, Right, Body, Text, Thumbnail, View } from 'native-base';
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
      myId:'',
      Cards:[],
      modalVisible: false,
      
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
    //this.fetchCard();
    }
    catch (error) {
      console.log("error");
     // Error retrieving data
   }
}

fetchCard(){
    //fetch('http://172.20.19.55:3001/api/journeys/Cards/')
    fetch('http://192.168.1.75:3001/api/journeys/Cards/') 
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
      <Icon type="FontAwesome" name="credit-card" style={GlobalStyles.icon}/>
    )
  };

  AddCard(e){       
    //fetch('http://172.20.19.55:3001/api/journeys/Cards/',{
    fetch('http://192.168.1.75:3001/api/journeys/Cards/',{
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
          Ap_Name: this.state.Ap_Name,
          Ap_Number: this.state.Ap_Number,
          Ap_Type: this.state.Ap_Type,
          Ap_Exp_Month: this.state.Ap_Exp_Month,
          Ap_Exp_Year: this.state.Ap_Exp_Year,
          Ap_CSV: this.state.Ap_CSV,
          Ap_Customer_ID: this.state.Ap_Customer_ID
        });
        this.setModalVisible(!this.state.modalVisible);
        //this.fetchCard();
        console.log("Exito");
        //this.props.navigation.goBack();
    })
    .catch(err=> console.error(err));
    //e.preventDefault();
}

setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <Container  style={GlobalStyles.BgColor}>
        <Modal
//presentationStyle={"formSheet"}
style={GlobalStyles.modal}  
animationType="slide"
transparent={false}
visible={this.state.modalVisible}
onRequestClose={() => {
alert('Modal has been closed.');
}}>
<Header transparent>
<View style={{width:55}}>
<Left style={{width:55, justifyContent:'center'}}>
<Button transparent  onPress={() => {
      this.setModalVisible(!this.state.modalVisible);
    }} style={{width:55}}>
  <Icon type="FontAwesome" name="arrow-left" style={GlobalStyles.icon}/>
</Button>
</Left>
</View>
<Body style={{alignItems:'flex-start'}}>
<Text style={GlobalStyles.FontHeaders}>My Cards</Text>
</Body>
</Header>
<View style={{marginTop: 22}}>
<View>
 <Text style={{alignContent:'center', alignItems:'center'}}>NEW CARD</Text>
 <Form style={{alignContent:'center', alignItems:'center'}}>
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
onPress = {this.AddCard.bind(this)}>
<Text style={GlobalStyles.buttonText}>Save Card</Text>
</TouchableOpacity>
</Form>
</View>
</View>
</Modal>
<Header transparent style={GlobalStyles.heather}>
<View style={{width:55}}>
<Left style={{width:55, justifyContent:'center'}}>
<Button transparent onPress={() => this.props.navigation.goBack()} style={{width:55}}>
<Icon type="FontAwesome" name="arrow-left" style={GlobalStyles.icon}/>
</Button>
</Left>
</View>
<Body style={{alignItems:'flex-start'}}>
<Text style={GlobalStyles.FontHeaders}>My Cards</Text>
</Body>
</Header>
<ScrollView>

<View style={GlobalStyles.container}>
<Thumbnail large source={require('../Images/profile.jpg')} />
</View>
<View  style={{height:20}}></View>
<View style={{height:40, flex:1, alignItems:'center'}}>
<TouchableHighlight
onPress={() => {
this.setModalVisible(!this.state.modalVisible);
}}>
<Text>{"Add New Card"}</Text>
</TouchableHighlight>

</View>

<View  style={{height:20, flex:0}}></View>




<View  style={{height:100, flex:0}}></View>


<View style={{height:50}}>
<Button bordered iconLeft transparen style={{height:50, width:300, alignSelf:'center'}}>
<Icon type="FontAwesome" name="credit-card" style={GlobalStyles.icon} />
<Text> 	Tus Tarjetas</Text>
</Button>
</View>

<View style={{paddingTop:10, height:60}}>
<Button bordered iconLeft transparen style={{height:50, width:300, alignSelf:'center'}}>
<Icon type="FontAwesome" name="credit-card" style={GlobalStyles.icon} />
<Text> 	Tus Facturas</Text>
</Button>
</View>

</ScrollView>
</Container>
    );
  }
}
