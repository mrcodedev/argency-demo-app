import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native';

export default class MissionTwoElectionScreen extends Component {
  render() {
    return (
      <ImageBackground
      source={require('../../../assets/mision2elections.png')}
      style={{flex:1}}
      resizeMode={'cover'}    
      >
       <View style={styles.viewBotones}>
          <TouchableOpacity
            style={styles.botonMision}
            onPress={() => {this.props.navigation.navigate('EndMission')}}
          > 
            <Text>Visitar Behavioral Network Systems</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonMision}
            onPress={() => {this.props.navigation.navigate('EndMission')}}
          > 
            <Text>Registrar newletter interna de la empresa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonMision}
            onPress={() => {this.props.navigation.navigate('EndMission')}}
          > 
            <Text>Entrevista con el CEO de Behavioral Network Systems</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  viewBotones: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  botonMision: {
    backgroundColor: '#FFF',
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
});