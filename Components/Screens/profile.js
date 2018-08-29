import React, { Component } from 'react';
import { ScrollView, Modal, TouchableHighlight, TouchableOpacity,AsyncStorage } from 'react-native';
import { Icon, Content, Container, Header, Button,Input, Form,Item, Left, Right, Body, Text, Thumbnail, View } from 'native-base';
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
      Users:[],
      
    };
  }

  static navigationOptions = {
    drawerLabel: 'Perfil',
    drawerIcon: () => (
      <Icon type="FontAwesome" name="user" style={GlobalStyles.icon}/>
    )
  };

  updatestates(){
    this.state.Users.forEach(element => {
      console.log("for");
      if(element["_id"]==this.state._id){
        console.log(".");
        this.setState({first_name:element["first_name"]});
        this.setState({last_name:element["last_name"]});
        this.setState({phone:element["phone"]});
        this.setState({email:element["email"]});

      }
      else{
        console.log("no entro");
      }
      })
  }

  async gettoken(){
    console.log("get");
    try {
      var value = await AsyncStorage.getItem(ACCESS_TOKEN);
        this.setState({_id:value});
        // We have data!!
        console.log("hola");
        console.log("valor"+value);
        console.log("val"+this.state._id);

        

      }
      catch (error) {
       // Error retrieving data
     }
  }

  componentDidMount(){
    this.fetchUsers();
    this.gettoken();
    this.updatestates.bind(this);
    console.log(this.state.first_name);
    console.log(this.state.last_name);
    console.log(this.state.email);
    console.log(this.state.phone);
}

fetchUsers(){
  fetch('http://172.20.19.83:3001/api/journeys/User/')
  //fetch('http://10.0.1.85:3001/api/journeys/User/') 
      .then(res=>res.json())
      .then(data=>{
          this.setState({Users:data});
      });
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
            <Text style={GlobalStyles.FontHeaders}>Editar Perfil</Text>
          </Body>
        </Header>
          <View style={{marginTop: 22}}>
            <View>
              <Text style={GlobalStyles.text}>Hello World!</Text>
              <Form style={{alignContent:'center', alignItems:'center'}}>
            <Item last>
              <Input placeholder="Phone" />
            </Item>
            <Item last>
              <Input placeholder="E-mail" />
            </Item>
            <Item last>
              <Input placeholder="Password Confirmation" />
            </Item>
            
            <TouchableHighlight style={GlobalStyles.button}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={GlobalStyles.buttonText}>Save Changes</Text>
              </TouchableHighlight>
          
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
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
            <Text >
              {this.state.first_name+this.state.last_name}
            </Text>
          </View>

          <View  style={{height:20, flex:0}}></View>

          <View style={{height:50, flex:1}}>
            <Button block iconLeft transparent style={{height:50, width:300, alignSelf:'center', justifyContent:'flex-start'}}>
              <Icon type="MaterialIcons" name="call" style={GlobalStyles.icon} />
              <Text>664-825-66-37</Text>
            </Button>
          </View>

          <View style={{height:50, flex:1}}>
            <Button block iconLeft transparent style={{height:50, width:300, alignSelf:'center', justifyContent:'flex-start'}}>
              <Icon type="MaterialIcons" name="email" style={GlobalStyles.icon} />
              <Text> 	ivillalobos@arkusnexus.com </Text>
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

