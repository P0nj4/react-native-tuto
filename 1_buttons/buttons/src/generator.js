import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const generate = (props) => {
    return (
        <TouchableHighlight
            style={styles.generate}
            onPress={()=> props.add()}>
                
            <Text style={{color:'#fff'}}>Add number</Text>
     
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    generate: {
        backgroundColor: '#00bcd4',
        padding: 10,
        width: '100%',
        alignItems: 'center'
    }
});

export default generate;
