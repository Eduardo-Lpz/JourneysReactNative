import React from 'react';
import { Container, Header, Content, List, ListItem  } from 'native-base';
import { FlatList , Text, View } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      Vuelos:[]
    };
  }

  componentDidMount(){
    return fetch('http://172.20.19.17:3001/api/journeys/Apts/')
      .then((response) => response.json())
      .then(data=>{
        this.setState({Vuelos:data});
        })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.Vuelos}
          renderItem={({item}) => <Text>{item.Ap_Country}  -  {item.Ap_State}  - {item.Ap_City}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}