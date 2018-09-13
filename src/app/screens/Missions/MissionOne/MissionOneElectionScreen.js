import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';

//Styles
import misionStyle from '../../../styles/Missions/MissionNumElectionScreen.style';

import ElectionButtonMission from '../../../components/electionButtonMission/electionButtonMission';

export default class MissionOneElectionScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const routes = [
      {
          title: 'Visitar laboratorio BNSystems',
          route: 'EndMission',
      },
      {
        title: 'Registrar newletter interna de la empresa',
        route: 'EndMission',
      },
      {
        title: 'Entrevista con el CEO de BNSystems',
        route: 'EndMission',
      }
    ];
    
    return (
      <SafeAreaView style={misionStyle.SafeAreaView}>
        <ImageBackground
        source={require('../../../assets/mision1elections.png')}
        style={misionStyle.imageBackground}
        resizeMode={'cover'}    
        >
          <ElectionButtonMission rutas={routes} navigation={this.props.navigation} />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  //Own styles
});