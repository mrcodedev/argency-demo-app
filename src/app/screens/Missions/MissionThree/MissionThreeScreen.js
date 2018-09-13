import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';

//Styles
import misionStyle from '../../../styles/Missions/MissionNumScreen.style';

export default class MissionThreeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={misionStyle.SafeAreaView}>
        <ImageBackground
        source={require('../../../assets/fondomision3.png')}
        style={misionStyle.imageBackground}
        resizeMode={'cover'}    
        >
          <View style={misionStyle.viewEmpezarMision}>
            <TouchableOpacity
              style={misionStyle.botonMision}
              onPress={() => {this.props.navigation.navigate('MissionThreeElection')}}
            > 
              <Text style={misionStyle.textoEmpezar}>EMPEZAR ></Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    //Own Styles here
});