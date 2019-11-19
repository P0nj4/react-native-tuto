
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text
} from 'react-native';

class Input extends Component {

  state = {
    myTextInput: '',
    users: ['john', 'james', 'lisa', 'Ron', 'Ramiro', 'Natalia', 'German', 'Agustina', 'Mirian', 'Maite', 'Leandro']
  }

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event
    });
  }

  onAddUser = () => {
      this.setState(prevState => {
          return {
              myTextInput: '',
              users: [...prevState.users, prevState.myTextInput]
          }
      })
  }

  render() {
    return (
            <View style={style.inputWrapper}>
            {
                this.state.users.map( item => (
                    <Text style={style.users} key={item}>{item}</Text>
                ))
            }

            <TextInput 
            value={this.state.myTextInput}
            style={style.input}
            onChangeText={this.onChangeInput}/>

            <Button
            title="Add user name"
            onPress={this.onAddUser}/>
        </View>
    )
  }
}

const style = StyleSheet.create({
  inputWrapper: {
      width: '100%'
  },

  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    fontSize: 20,
    padding: 10
  },

  users: {
      fontSize: 30,
      borderWidth: 1,
      borderColor: '#cecece',
      padding: 10,
      marginBottom: 10
  }
});

export default Input;
