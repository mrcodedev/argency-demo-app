import React, { Component } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

//Import Styles
import misionStyle from '../../../styles/views/Missions/MissionNumElectionScreen';

//Import Button Election Mission
import ElectionButtonMission from '../../../components/electionButtonMission/electionButtonMission';

//Button Drawer
import ButtonDrawer from '../../../components/openButtonDrawer/openButtonDrawer';

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
          <ButtonDrawer navigation={this.props.navigation}></ButtonDrawer>
          <ElectionButtonMission rutas={routes} navigation={this.props.navigation} />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  //Own styles
});