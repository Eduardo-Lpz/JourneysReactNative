import { StyleSheet } from 'react-native';

export default  StyleSheet.create({

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    //Global
    FirstScreen:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    button:{
      width:300,
      backgroundColor:'#0000ff',
      borderRadius:25,
      marginVertical:10,
      paddingVertical:12
  },
  buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
  },
  inputBox:{
    width:300,
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius: 25,
    paddingHorizontal:16,
    color:'#000000',
    marginVertical:10,
    fontSize:16
},
    text:{
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 18,
    },
    //ScreenA
    container_ScreenA: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D33232',
    },
    //ScreenB
    container_ScreenB: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4D98EC',
    },




    container: {
      flex: 1,
      //justifyContent: 'center',//centrar verticalmente
      alignItems: 'center',//centrar horizontalmente
      //backgroundColor: '#F5FCFF',
    },
    Font:{
      fontFamily: 'Roboto', 
      fontSize: 30
    },
    BgColor:{
      backgroundColor: '#c5cae9'//"#bcddf2"
    },
    icon:{
      //color:'#013e89'
      color : '#01579b'//light-blue darken-4
    }
  });

  /*
      icon: {
      width: 24,
      height: 24,
    } */