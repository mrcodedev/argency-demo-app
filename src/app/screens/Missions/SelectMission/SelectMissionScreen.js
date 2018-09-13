import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import ButtonDrawer from '../../../components/openButtonDrawer/openButtonDrawer'

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
      <SafeAreaView style={styles.SafeAreaView}>
        <ImageBackground
          source={require('../../../assets/fondomisiones.png')}
          style={styles.imageBackground}
          resizeMode={'cover'}    
        >
          <ButtonDrawer navigation={this.props.navigation}></ButtonDrawer>
          <View style={styles.viewBotones}>
            {
              routes.map((section, indexSection) => (
                <TouchableOpacity
                  style={styles.botonMision}
                  onPress={() => {this.props.navigation.navigate(section.route)}}
                  key={indexSection}
                > 
                  <Text>{section.title}</Text>
                </TouchableOpacity>
              )
            )}
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
  imageBackground: {
    flex: 1,
  },
  openSidebarButton: {
    width: 20,
    height: 20,
    padding: 30,
    marginTop: 30,
  },
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