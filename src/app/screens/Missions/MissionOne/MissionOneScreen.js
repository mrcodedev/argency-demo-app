import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';

//Styles
import misionStyle from '../../../styles/Missions/MissionNumScreen.style';

//Button Drawer
import ButtonDrawer from '../../../components/openButtonDrawer/openButtonDrawer';

export default class MissionOneScreen extends Component {
  render() {
    return (
      <SafeAreaView style={misionStyle.SafeAreaView}>
        <ImageBackground
        source={require('../../../assets/fondomision1.png')}
        style={misionStyle.imageBackground}
        resizeMode={'cover'}    
        >
          <ButtonDrawer navigation={this.props.navigation}></ButtonDrawer>
          <View style={misionStyle.viewEmpezarMision}>
            <TouchableOpacity
              style={misionStyle.botonMision}
              onPress={() => {this.props.navigation.navigate('MissionOneElection')}}
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