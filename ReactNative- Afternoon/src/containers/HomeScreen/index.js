import React, { Component }  from 'react';
import {ImageBackground,  View, Image , Text,StatusBar} from 'react-native';
import { LogBox } from 'react-native';
import {  Header, Button } from '../ListMovies/node_modules/react-native-elements'
import { color } from 'react-native-reanimated';
import Requests from "../../components/GetData";
import { homeButton } from "../../utils/Cards";

class HomeScreen extends React.Component {

  componentWillMount(){
      this.props.navigation.navigate('App');
  }

  render () {
      return (
          <View/>
      )
  }
}

export default HomeScreen;