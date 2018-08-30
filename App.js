import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//
import AppStackNavigator from './AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: '30%'
  },
});