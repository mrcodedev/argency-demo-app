/*
  TODO:

  - Do components for login
  - See how to validate all the time if there is connection of everything (general flag?!?!?!)
  - See how add drop-down on the left
    + Insert photo of Google user with the googleName
    + See profile in the bar on the left
      + Show photo
      + Show username
      + Show email
    + Access the missions
    + ¿Logout Google?

  -----------------------------------
  DONE:
  + Put the Google icon in the start button
  + Splash screen for Android and iOS
  + Delete of npm react-google-button
  + Delete of npm react-native-smart-splash-screen
  + Delete of npm react-native-google-signin
  + Create config.js to global variables enviroment
  + Finish the Login of Google and Argency (error validation topic)

  -------------------------------
  FIXME: 
  - https://youtu.be/lvY150aX5PM (to pass the navigation to the component EXAMPLE: <Header navigation={this.props.navigation})
  - Refactor LoginScreen.js Rrmove the views that are not necessary
  - See documentation of SocialIcon react-native-elements

  -------------------------------
  DUDAS:
  - The login system, only Google?. How will you know our database that you have access to?
*/

import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import Expo from 'expo';

//Config
let envConfig = require('../../../../config');

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      googleSignedIn: false,
      googleName: '',
      googlePhotoUrl: '',
      googleUserEmail: '',
      argencySignedIn: false,
      argencyId: '',
      argencyDtStart: '',
      argencyDtLastAction: '',
      getPassApp: true
    }
  }

  signIn = async () => {
    Promise.all([this.signInGoogle(), this.isPermissionArgency()]).then(() => {
      if(this.state.googleSignedIn && this.state.argencySignedIn && this.state.getPassApp) {
        this.props.navigation.navigate('SelectMission')
      }else{
        let hola = 'Esto es una variable'
        Alert.alert(
          'LOGIN ERROR',
          this.errorControlLogin(),
          [
            {
              text: 'OK',
            }
          ]
        )
      }
    })
  }

  signInGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: envConfig.androidClientID,
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })
      
      if (result.type === "success") {
        this.setState({
          googleSignedIn: true,
          googleName: result.user.googleName,
          googlePhotoUrl: result.user.googlePhotoUrl,
          googleUserEmail: result.user.email
        })

      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("Error login Google: ", e)
    }
  }

  isPermissionArgency = async() => {
    const emailArgency = this.state.googleUserEmail;
    const URL = envConfig.argencyServerURL;
    const urlAPIAction = 'login?username=';

    try {
      let response = await fetch(`${URL}${urlAPIAction}${emailArgency}`);
        if(response.status == 200) {
          const datos = await response.json();
          this.setState({
            argencySignedIn: true,
            argencyId: datos.id,
            argencyDtStart: datos.argencyDtStart,
            argencyDtLastAction: datos.argencyDtLastAction
          });
        }else{
          console.log(`ERROR - Status: ${response.status}, OK: ${response.ok}, Status Text: ${response.statusText}`);
        }
    } catch(e) {
      console.log(`Error conexión Argency: ${e}`);
    }
  }

  errorControlLogin = () => {
    let errorControlMsg = '';
    (!this.state.googleSignedIn) ? errorControlMsg +='Error en el login de Argency.' : errorControlMsg = '';
    (!this.state.argencySignedIn) ? errorControlMsg +='Error en el login de Argency' : errorControlMsg +='';
    (this.state.argencySignedIn && this.state.googleSignedIn) ? errorControlMsg +='Error de conexión' : errorControlMsg +='';


    return errorControlMsg;
  }

  
  render() {
    return (
      <ImageBackground
        source={require('../../assets/login.png')}
        style={{flex:1}}
        resizeMode={'cover'}    
      >    
      
        <View style={styles.containerLogin}>
          <View style={styles.buttonsLogin}>
            <LoginPage signIn={this.signIn} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const LoginPage = props => {
  return (
    <View>
      <TouchableOpacity 
        style={styles.googleButton} 
        title="Inicia sesión con Google" 
        onPress={() => props.signIn()}
        accessibilityLabel="Inicia sesión con Google"
      > 
        <Image 
          source={require('../../assets/icons/googleiconrsz.png')}
          style={styles.iconGoogleStyle}
        />
        <Text
          style={[styles.textButtonGoogle, {color: '#333333'}]}
        >
          Inicia sesión con Google
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonsLogin: {
    paddingBottom: 50,
  },
  googleButton: {
    backgroundColor: 'white',
    width: 280,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconGoogleStyle: {
    marginRight: 20,
    width: 30,
    height: 30
  },
  textButtonGoogle: {
    fontWeight: 'normal',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  header: {
    color: 'white'
  }
});