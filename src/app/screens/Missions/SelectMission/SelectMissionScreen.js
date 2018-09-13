import React, { Component } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

//Button Drawer
import ButtonDrawer from '../../../components/openButtonDrawer/openButtonDrawer';

//Buttons Select Mission
import SelectMissionButton from '../../../components/selectMissionButton/selectMissionButton';

//Style CSS
import misionStyle from '../../../styles/views/Missions/SelectMissionScreen';

export default class SelectMissionScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const routes = [
      {
          title: 'MISIÓN 1',
          route: 'MissionOne',
      },
      {
        title: 'MISIÓN 2',
        route: 'MissionTwo',
      },
      {
        title: 'MISIÓN 3',
        route: 'MissionThree',
      }
    ];

    return (
      <SafeAreaView style={misionStyle.SafeAreaView}>
        <ImageBackground
          source={require('../../../assets/fondomisiones.png')}
          style={misionStyle.imageBackground}
          resizeMode={'cover'}    
        >
          <ButtonDrawer navigation={this.props.navigation}></ButtonDrawer>
          <SelectMissionButton rutas={routes} navigation={this.props.navigation} />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

});