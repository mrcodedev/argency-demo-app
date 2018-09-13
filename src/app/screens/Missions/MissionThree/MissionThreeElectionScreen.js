import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';

export default class MissionThreeElectionScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <ImageBackground
        source={require('../../../assets/mision3elections.png')}
        style={{flex:1}}
        resizeMode={'cover'}    
        >
          <View style={styles.viewBotones}>
            <TouchableOpacity
              style={styles.botonMision}
              onPress={() => {this.props.navigation.navigate('EndMission')}}
            > 
              <Text>Visitar laboratorio BNSystems</Text>
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
              <Text>Entrevista con el CEO de BNSystems</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
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