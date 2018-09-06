import React, { Component } from 'react';
import { ScrollView, Modal, TouchableHighlight, Alert, TouchableOpacity,AsyncStorage } from 'react-native';
import { Icon, Content, Container, Header, Button,Input, Form,Item, Left, Right, Body, Text, Thumbnail, View } from 'native-base';
import Toast from 'react-native-simple-toast';
import GlobalStyles from '../../GlobalStyles';

const ACCESS_TOKEN = 'myId';


export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      phone:'',
      _id:'',
      myId:'',
      errors:'',
      showProgress: false,
      modalVisible: false,
      Users:[]
      
    };
    this.updateUser = this.updateUser.bind(this);
    //this.validapassword = this.validapassword.bind(this);
  }

  static navigationOptions = {
    drawerLabel: 'Perfil',
    drawerIcon: () => (
      <Icon type="FontAwesome" name="user" style={GlobalStyles.icon}/>
    )
  };

  updateUser(){
    console.log(this.state._id);
    this.state.Users.forEach(element => {
      console.log("foreach");
      if(element["_id"]==this.state._id){
        this.setState({
          first_name:element["first_name"]});
        this.setState({
          last_name:element["last_name"]});
        this.setState({  
          email:element["email"]});
        this.setState({  
          phone:element["phone"]});
        this.setState({  
          role:element["role"]});

          console.log("entro");
        }
        else{
          console.log("no");
        }
    });
    console.log(this.state.first_name);
  }


  GuardarCambios(id){
    fetch(`http://172.20.19.72:3001/api/journeys/User/${id}`,{
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {console.log(data)
    //Toast.show('Changed Saved!');
    this.setModalVisible(!this.state.modalVisible);
    //window.Materialize.toast("Aeropuerto Actualizado",900,"light-blue darken-3")
    });
}
/*
  validapassword(){
    this.state.Users.forEach(element => {
      if(this.state._id == element["_id"]){
        if(this.state.password == element["password"]){
          this.GuardarCambios(this.state._id);
          this.setModalVisible(!this.state.modalVisible);
          //Toast.show('Changed Saved!');
        }
      }
      else{
        this.setState({password:''});
        //Toast.show('Incorrect Password!');
      }
    });
  }
*/



  async getid(){
    console.log("get");
    try {
      var value = await AsyncStorage.getItem(ACCESS_TOKEN);
        this.setState({_id:value});
        // We have data!!
        console.log("hola");
        console.log("valor"+value);
        console.log("val"+this.state._id);
        console.log("get");
        console.log(this.state._id);

    console.log(this.state.first_name);
    this.updateUser();
      }
      catch (error) {
        console.log("error");
       // Error retrieving data
     }
  }


  componentDidMount(){
    this.fetchUsers();

}

fetchUsers(){
  fetch('http://172.20.19.72:3001/api/journeys/User/')
      .then(res=>res.json())
      .then(data=>{
          this.setState({Users:data});
          console.log(this.state.Users);
          this.getid();
          
      });
}



  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const showAlert = () => {
    Alert.alert(
      'Are you sure you want to save the changes?',
      'If it does, there will be no going back',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.GuardarCambios(this.state._id)},
      ],
      { cancelable: false }
    )}
   
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
              <Text style={GlobalStyles.FontHeaders}>Editar Perfil</Text>
            </Body>
          </Header>
            <View style={{marginTop: 22}}>
              <View>
                <Text style={GlobalStyles.text}>Hello World!</Text>
                <Form style={{alignContent:'center', alignItems:'center'}}>
                <Item last>
                <Input value={this.state.first_name} placeholder="First Name" 
                onChangeText={(val) => this.setState({first_name: val})} type="text" name="first_name"/>
              </Item>
              <Item last>
                <Input value={this.state.last_name} placeholder="Last Name" 
                onChangeText={(val) => this.setState({last_name: val})} type="text" name="last_name"/>
              </Item>
              <Item last>
                <Input value={this.state.phone} placeholder="Phone" 
                onChangeText={(val) => this.setState({phone: val})} type="text" name="phone"/>
              </Item>
              <Item last>
                <Input value={this.state.email} placeholder="E-mail" name="email"
                onChangeText={(val) => this.setState({email: val})} type="text"/>
              </Item>
              <Item last>
                <Input value={this.state.password} secureTextEntry = {true} placeholder="Password Confirmation" 
                 onChangeText={(val) => this.setState({password: val})} type="text" name="password"/>
              </Item>
              
              <TouchableOpacity style={GlobalStyles.button} onPress={showAlert}>
                  
                  <Text style={GlobalStyles.buttonText}>Save Changes</Text>
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
            <Text style={GlobalStyles.FontHeaders}>My Profile</Text>
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
          <Text>{this.state.first_name+" "+this.state.last_name}</Text>
        </TouchableHighlight>

          </View>

          <View  style={{height:20, flex:0}}></View>

          <View style={{height:50, flex:1}}>
            <Button block iconLeft transparent style={{height:50, width:300, alignSelf:'center', justifyContent:'flex-start'}}>
              <Icon type="MaterialIcons" name="call" style={GlobalStyles.icon} />
              <Text>{this.state.phone}</Text>
            </Button>
          </View>

          <View style={{height:50, flex:1}}>
            <Button block iconLeft transparent style={{height:50, width:300, alignSelf:'center', justifyContent:'flex-start'}}>
              <Icon type="MaterialIcons" name="email" style={GlobalStyles.icon} />
              <Text> 	{this.state.email} </Text>
            </Button>
            
          </View>


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

