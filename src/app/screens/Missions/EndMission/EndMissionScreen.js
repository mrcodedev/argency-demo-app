import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';

export default class EndMissionScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <ImageBackground
        source={require('../../../assets/fin.png')}
        style={{flex:1}}
        resizeMode={'cover'}    
        >
          <View style={styles.viewEmpezarMision}>
              <Text></Text>
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