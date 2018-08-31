import React, { Component } from 'react';
import { ScrollView, Modal, TouchableHighlight, Alert, TouchableOpacity,AsyncStorage } from 'react-native';
import { Icon, Content, Container, Header, Button,Input,Item, Left, Right, Body, Text,Accordion, View } from 'native-base';
import Toast from 'react-native-simple-toast';
import GlobalStyles from '../../GlobalStyles';

const ACCESS_TOKEN = 'myId';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

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
      drawerLabel: 'Mis Vuelos',
      drawerIcon: () => (
        <Icon type="FontAwesome" name="plane" style={GlobalStyles.icon}/>
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
      fetch(`http://192.168.1.75:3001/api/journeys/User/${id}`,{
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
      //this.fetchUsers();
  
  }
  
  fetchUsers(){
    fetch('http://192.168.1.75:3001/api/journeys/User/')
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
                       
          <Header transparent style={GlobalStyles.heather}>
          <View style={{width:55}}>
            <Left style={{width:55, justifyContent:'center'}}>
              <Button transparent onPress={() => this.props.navigation.goBack()} style={{width:55}}>
                <Icon type="FontAwesome" name="arrow-left" style={GlobalStyles.icon}/>
              </Button>
            </Left>
            </View>
            <Body style={{alignItems:'flex-start'}}>
              <Text style={GlobalStyles.FontHeaders}>My Flights</Text>
            </Body>
          </Header>
          <ScrollView>
            <View style={GlobalStyles.container}>
            <Content padder>
                <Accordion dataArray={dataArray} expanded={0}/>
            </Content> 
            </View>
          </ScrollView>
        </Container>
      );
    }
  }