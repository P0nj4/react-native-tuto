import React, {Component} from 'react';
import { Picker, View, Slider } from 'react-native';

class PickerComponent extends Component {

    state = {
        language: 'english',
        value: 0.3
    }

    render () {
        return <View style={{width: '100%'}}>
            <Picker style={{width: '100%'}}
            selectedValue={this.state.language}
            onValueChange={(item, index) => {
                this.setState({
                    language: item
                })
            }}>
                <Picker.Item label ="Spanish" value="spanish"/>
                <Picker.Item label ="English" value="english"/>
            </Picker>
            <Slider value={this.state.value}/>
        </View>
    }
}

export default PickerComponent;