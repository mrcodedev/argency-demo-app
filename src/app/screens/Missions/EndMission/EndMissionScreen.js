import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';

//Button Drawer
import ButtonDrawer from '../../../components/openButtonDrawer/openButtonDrawer';

export default class EndMissionScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <ImageBackground
        source={require('../../../assets/fin.png')}
        style={styles.imageBackground}
        resizeMode={'cover'}    
        >
          <ButtonDrawer navigation={this.props.navigation}></ButtonDrawer>
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
  imageBackground: {
    flex: 1
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