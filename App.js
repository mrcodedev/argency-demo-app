import React from 'react';
import { StyleSheet } from 'react-native';

//Importing routes
import AppNavigator from './src/app/navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({

});