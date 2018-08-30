import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, ImageBackground, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <ImageBackground
      source={require('../assets/login.png')}
      style={{flex:1}}
      resizeMode={'cover'}    
      >
        <KeyboardAvoidingView behavior="padding" style={styles.containerKeyboard}>
            <View style={styles.logoContainer}>
            </View>
            <View style={styles.formContainer}>


              <View style={styles.containerFormulario}>
                  <StatusBar 
                      barStyle="light-content"
                  />
                  <TextInput style={styles.input} 
                      placeholder="user or email"
                      placeholderTextColor="rgba(255,255,255,0.7)"
                      returnKeyType="next"
                      onSubmitEditing={() => this.passwordInput.focus()}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid='transparent'>
                  
                  </TextInput>
                  <TextInput style={styles.input} 
                      placeholder="password"
                      placeholderTextColor="rgba(255,255,255,0.7)"
                      secureTextEntry
                      ref={(input) => this.passwordInput = input }
                      underlineColorAndroid='transparent'>
                  
                  </TextInput>
                  <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => {this.props.navigation.navigate('SelectMission')}}
                      
                  >
                      <Text style={styles.buttonText}>
                          LOGIN
                      </Text>
                  </TouchableOpacity>
              </View>



            </View>
        </KeyboardAvoidingView>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  containerFormulario: {
    padding: 20
},
input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10
},
buttonContainer: {
    backgroundColor: '#000',
    paddingVertical: 15
},
buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
},
containerKeyboard: {
  flex: 1,
},
logoContainer: {
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center'
},
logo: {
  width: 100,
  height: 100
},
title: {
  color: 'white',
  marginTop: 10,
  width: 160,
  textAlign: 'center',
  opacity: 0.9
}

});