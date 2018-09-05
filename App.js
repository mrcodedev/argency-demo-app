import React from 'react';
import { StyleSheet } from 'react-native';

//Importing routes
import AppStackNavigator from './src/app/navigation/AppNavigator';

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