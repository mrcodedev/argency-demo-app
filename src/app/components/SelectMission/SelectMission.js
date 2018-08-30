import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';

export default class SelectMission extends Component {
    render() {
        return (
            <ImageBackground
                source={require('./../../assets/fondomisiones.png')}
                style={{flex:1}}
                resizeMode={'cover'}    
            >

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

});