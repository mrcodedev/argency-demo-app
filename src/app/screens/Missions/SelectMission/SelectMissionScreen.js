import React, { Component } from 'react';
import { Text, Image, View, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native';

//Importing styles
import { styles } from './SelectMissionScreen.style';

export default class SelectMissionScreen extends Component {
  render() {
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