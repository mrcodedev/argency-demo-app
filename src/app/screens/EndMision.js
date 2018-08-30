import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native';

export default class EndMision extends Component {
  render() {
    return (
      <ImageBackground
      source={require('../assets/fin.png')}
      style={{flex:1}}
      resizeMode={'cover'}    
      >
        <View style={styles.viewEmpezarMision}>
            <Text></Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  viewEmpezarMision: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoFin: {
    color: 'white',
    fontWeight: '700',
    fontSize: 30,
  }
});