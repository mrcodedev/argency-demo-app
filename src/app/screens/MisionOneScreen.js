import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native';

export default class MisionOneScreen extends Component {
  render() {
    return (
      <ImageBackground
      source={require('../assets/fondomision1.png')}
      style={{flex:1}}
      resizeMode={'cover'}    
      >
        <View style={styles.viewEmpezarMision}>
          <TouchableOpacity
            style={styles.botonMision}
            onPress={() => {this.props.navigation.navigate('MisionOneElection')}}
          > 
            <Text style={styles.textoEmpezar}>EMPEZAR ></Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  viewEmpezarMision: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  botonMision: {
    width: 100,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  textoEmpezar: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20
  }
});