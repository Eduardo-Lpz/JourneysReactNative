import React, { Component } from 'react';
import { ScrollView, Modal, TouchableHighlight, Alert, TouchableOpacity,AsyncStorage } from 'react-native';
import { Icon, Content, Container, Header, Button,Input,Item, Left, Right, Body, Text,Accordion, View } from 'native-base';
import Toast from 'react-native-simple-toast';
import GlobalStyles from '../../GlobalStyles';

const ACCESS_TOKEN = 'myId';

const dataArray = [
    { title: "17/SEP/2018             CUN", content: "Lorem ipsum dolor sit amet" },
    { title: "24/DIC/2018             MEX", content: "Lorem ipsum dolor sit amet" },
    { title: "08/ENE/2019             LAP", content: "Lorem ipsum dolor sit amet" }
  ];

export default class ProfileScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        _id:'',
        vueloId:'',
        userId:'',
        myId:'',
        my_Origen:'',
        my_Destino:'',
        my_Fecha_Llegada:'',
        my_Hora_Llegada:'',
        my_Fecha_Salida:'',
        my_Hora_Salida:'',
        seat:'',
        errors:'',
        showProgress: false,
        modalVisible: false,
        MisVuelos:[],
        Vuelo:{},
        Array:[],
      };
      this.getMyFlights = this.getMyFlights.bind(this);
      //this.validapassword = this.validapassword.bind(this);
    }
  
    static navigationOptions = {
      drawerLabel: 'Mis Vuelos',
      drawerIcon: () => (
        <Icon type="FontAwesome" name="plane" style={GlobalStyles.icon}/>
      )
    };

    AddmyFlight(e){
        
      fetch('http://192.168.1.75:3001/api/journeys/myFlights/', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then(res=> res.json())
      .then(data => {
          //window.Materialize.toast("Vuelo Agregado",900,"light-blue darken-3")
          this.setState({
            vueloId:'',
            my_Origen:'',
            my_Destino:'',
            my_Fecha_Llegada:'',
            my_Hora_Llegada:'',
            my_Fecha_Salida:'',
            my_Hora_Salida:'',
            seat:'',
          });
      })
      .catch(err=> console.error(err));
      e.preventDefault();
  }

  
  
    getMyFlights(){
      console.log(this.state.myId);
      this.state.MisVuelos.forEach(element => {
        console.log("foreach");
        if(element["userId"]==this.state.myId){
          this.setState({
            vueloId:element["vueloId"]});
          this.setState({
            seat:element["seat"]});
          this.setState({  
            _id:element["_id"]});
          
          this.state.
            console.log("entro");
          }
          else{
            console.log("no");
          }
      });


      console.log("fin");
    }
  
  
    async getid(){
      console.log("get");
      try {
        var value = await AsyncStorage.getItem(ACCESS_TOKEN);
          this.setState({userId:value});
          // We have data!!
          console.log("hola");
          console.log("valor"+value);
          console.log("val"+this.state.userId);
          console.log("get");
      this.fetchmyFlights();

        }
        catch (error) {
          console.log("error");
         // Error retrieving data
       }
    }
  
  
    componentDidMount(){
      this.getid();
  
  }


  fetchmyFlights(){
    fetch('http://192.168.1.75:3001/api/journeys/myFlights/')  
  .then(res=>res.json())
  .then(data=>{
    console.log("fetch");
    console.log(data);
     data.forEach(element =>{
      if(element["userId"]==this.state.userId){
        this.setState({seat:element["seat"]});
        var temp = {
          _id:element["_id"],
          my_Origen:element["my_Origen"],
          my_Destino:element["my_Destino"],
          my_Fecha_Salida:element["my_Fecha_Salida"],
          my_Fecha_Llegada:element["my_Fecha_Llegada"],
          my_Hora_Salida:element["my_Hora_Salida"],
          my_Hora_Llegada:element["my_Hora_Llegada"],
          seat:element["seat"]
          };
          console.log(temp);
          this.state.Array.push(temp);
        }
        else{}
     });
      console.log(this.state.Array);

            })
            console.log("fin");
            console.log(this.state.Array);
    }
  
  
    fetchFlights(id){
      fetch(`http://192.168.1.75:3001/api/journeys/Flgts/${id}`)
      .then(res=>res.json())
      .then(data1=>{
          this.setState({
            Vuelo:data1
              //Origen:data1.Origen, 
              //Fecha_De_Salida:data1.Fecha_De_Salida,
              //Hora_De_Salida:data1.Hora_De_Salida,
              //Destino:data1.Destino,
              //Fecha_De_Llegada:data1.Fecha_De_Llegada,
              //Hora_De_Llegada:data1.Hora_De_Llegada,
              //vueloId:data1._id,
          });
          console.log(this.state.Vuelo);
          })
  }
  
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  
    render() {
     
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
            <View style={{height:600, flex:0, backgroundColor:"black"}}>
            
                <Accordion  dataArray={dataArray} expanded={0}/>
            
            </View>
          </ScrollView>
        </Container>
      );
    }
  }