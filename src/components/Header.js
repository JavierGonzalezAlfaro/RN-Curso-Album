import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#E9E9E9',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 20},
        // shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    }
});