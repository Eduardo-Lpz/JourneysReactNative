import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Icon, Content, Container, Header, Button, Left, Right, Body, Text, Thumbnail, View } from 'native-base';
import GlobalStyles from '../../GlobalStyles';


export default class CardsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards:[],
      
    };
  }

  componentDidMount(){
    this.fetchCards();
}

fetchCards(){
    //fetch('http://172.20.19.62:3001/api/journeys/User/') arkus
    fetch('http://192.168.1.75:3001/api/journeys/Cards/') 
        .then(res=>res.json())
        .then(data=>{
            this.setState({Users:data});
            console.log(data);
            console.log(this.state.Users);
        });
  }
  
  static navigationOptions = {
    drawerLabel: 'Perfil',
    drawerIcon: () => (
      <Icon type="FontAwesome" name="user" style={GlobalStyles.icon}/>
    )
  };

  render() {
    return (
      <Container  style={GlobalStyles.BgColor}>
        <Header transparent>
        <View style={{width:55}}>
          <Left style={{width:55, justifyContent:'center'}}>
            <Button transparent onPress={() => this.props.navigation.goBack()} style={{width:55}}>
              <Icon type="FontAwesome" name="arrow-left" style={GlobalStyles.icon}/>
            </Button>
          </Left>
          </View>
          <Body style={{alignItems:'flex-start'}}>
            <Text style={GlobalStyles.FontHeaders}>Editar Perfil</Text>
          </Body>
        </Header>
        <ScrollView>

          <View style={GlobalStyles.container}>
            <Thumbnail large source={require('../Images/profile.jpg')} />
          </View>
          <View  style={{height:20}}></View>
          <View style={{height:40, flex:1, alignItems:'center'}}>
            <Text >
              Israel Villalobos
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

