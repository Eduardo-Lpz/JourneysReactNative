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
        justifyContent: 'center',
        backgroundColor:'#0052cc'
    },
    button:{
      width:300,
      backgroundColor:'#3385ff',
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
    height:45,
    backgroundColor:'rgb(230, 240, 255)',
    borderRadius: 25,
    paddingHorizontal:16,
    color:'#000000',
    marginVertical:10,
    fontSize:16
},

    error:{
      textAlign: 'center',
      color: '#ff0000',
      fontSize: 15,
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

    containerLogin: {
        backgroundColor: '#0052cc',
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },

    General:{//reemplaza container y BgColor
      flex: 1,
      alignItems: 'center',//centrar horizontalmente
      backgroundColor: '#c5cae9'
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
    FontHeaders:{
      fontFamily: 'Roboto', 
      fontSize: 21
    },
    BgColor:{
      backgroundColor: '#e0e0e0'//'#c5cae9'//"#bcddf2"
    },
    icon:{
      //color:'#013e89'
      color : '#01579b'//light-blue darken-4
    },

    imgpequena:{
      width: 50, height: 50,
      },
      imgmediana:{
        borderWidth:0,
        borderTopLeftRadius: 0,
        borderColor:'#0052cc', 
        borderRadius:0,
        marginVertical:0,
      width: 175, height: 175,
      },
      imggrande:{
      width: 200, height: 200,
      },

  });


  /*
      icon: {
      width: 24,
      height: 24,
    } */