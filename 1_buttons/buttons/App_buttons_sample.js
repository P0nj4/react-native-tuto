/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import Nav from './src/nav';
import Generator from './src/generator';
import ListItem from './src/listItem';

class AppButtonsSabmple extends Component {

  state = {
    appName: 'My name is Earl',
    random: [20, 837]
  }

  onAddRadom = () => {
    const random = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        random:[...prevState.random,random]
      }
    })
  }

  onItemDelete = (position) => {
    const newArray = this.state.random.filter((item,index)=>{
      return position != index;
    })
    this.setState({
      random:newArray
    })

  }

  render() {
    return (
      <View style={style.mainView}>
        <Nav name={this.state.appName}></Nav>
        <View style={style.basicView}>
         <Text style={style.basicText}>
           puto el que lee
         </Text>
        </View>
        <Generator add={this.onAddRadom}></Generator>
        <ListItem 
          items={this.state.random}
          delete={this.onItemDelete}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  },

  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5
  },

  basicText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    padding: 20    
  }
});

export default AppButtonsSabmple;
