import React, { Component } from 'react';  
import { Container, Header, Left, Body, Right, Title, View, Text} from 'native-base';
import GlobalStyles from '../../GlobalStyles';


export default class HeaderTitleExample extends Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={GlobalStyles.container}>
        {
          this.state.fontLoaded ? (
            <Text style={{ fontFamily: 'Roboto', fontSize: 56 }}>
              Hello, world!
            </Text>
          ) : null
        }
      </View>
    )
  }
}