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
import Input from './src/input';
import Nav from './src/nav'

class AppInputAndScroll extends Component {

  render() {
    return (
      <View style={style.mainView}>
        <Nav name="ScrollViews and inputs"/>
        <ScrollView style={{width: '100%'}}>
          <Input/>
        </ScrollView>
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

export default AppInputAndScroll;
