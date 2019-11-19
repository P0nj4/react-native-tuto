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
  View
} from 'react-native';
import PickerComponent from './src/picker';
import Nav from './src/nav'

class App extends Component {

  render() {
    return (
      <View style={style.mainView}>
        <Nav name="Picker"/>
        <PickerComponent/>
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

export default App;
