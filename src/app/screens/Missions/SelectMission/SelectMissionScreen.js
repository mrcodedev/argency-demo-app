import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native';

export default class SelectMissionScreen extends Component {

  render() {
    console.log(this.props);
    return (
      <ImageBackground
        source={require('../../../assets/fondomisiones.png')}
        style={{flex:1}}
        resizeMode={'cover'}    
      >
        <View style={styles.viewBotones}>
          <TouchableOpacity
            style={styles.botonMision}
            onPress={() => {this.props.navigation.navigate('MissionOne')}}
          > 
            <Text>MISION 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonMision}
            onPress={() => {this.props.navigation.navigate('MissionTwo')}}
          > 
            <Text>MISION 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonMision}
            onPress={() => {this.props.navigation.navigate('MissionThree')}}
          > 
            <Text>MISION 3</Text>
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
    justifyContent: 'center',
  },
  botonMision: {
    width: 100,
    backgroundColor: '#FFF',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
});