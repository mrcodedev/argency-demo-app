/*
  TODO:

  - Finish the Login of Google and Argency (error validation topic).
  - Do components for login
  - See how to validate all the time if there is connection of everything (general flag?!?!?!)
  - See how add drop-down on the left
    + Insert photo of Google user with the name
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

  -------------------------------
  FIXME: 
  - https://youtu.be/lvY150aX5PM (para pasar el navigation al componente EJEMPLO: <Header navigation={this.props.navigation})
  - Refactorizar LoginScreen.js para quitar las vistas que no hacen falta
  - Borrar react-native-google-signin del npm
  - Ver documentación SocialIcon react-native-elements
  - Borrar de npm react-google-button
  - Borrar de npm react-native-smart-splash-screen
  -------------------------------
  DUDAS:
  - El sistema de logeo ¿sólo Google?. ¿Cómo va a saber nuestra base de datos que tiene acceso?
*/

import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Expo from 'expo';

//Importing styles
import { styles } from './LoginScreen.style';


//Importing SelfComponents
export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      permissionArgency: false,
      name: '',
      photoUrl: '',
      userEmail: '',
      idArgency: '',
      dtStart: '',
      dtLastAction: '',
      splashStatus: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({splashStatus: true})
    }, 3000);
  }

  signIn = async () => {
    const loginStart = () => {
      return new Promise(resolve => {
        //Checking Google LogIn
        this.signInGoogle()
          .then(() => {
            //Checking if the user exists in Argency
            this.state.signedIn == true ? this.isPermissionArgency() : console.log(`No se ha podido logearse`);
          })
      })
    }

    loginStart();
  }

  signInGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: 'YOUR_ID',
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })
      
      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          userEmail: result.user.email
        })

      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("Error login Google: ", e)
    }
  }

  isPermissionArgency = async() => {
    const emailArgency = this.state.userEmail;
    const URL = `URL ARGENCY`;

    try {
      let response = await fetch(`${URL}${emailArgency}`);
        if(response.status == 200) {
          const datos = await response.json();
          this.setState({
            permissionArgency: true,
            idArgency: datos.id,
            dtStart: datos.dtStart,
            dtLastAction: datos.dtLastAction
          });
        }else{
          console.log(`ERROR - Status: ${response.status}, OK: ${response.ok}, Status Text: ${response.statusText}`);
        }
    } catch(e) {
      console.log(`Error conexión Argency: ${e}`);
    }
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
          {this.state.signedIn && this.state.permissionArgency ? (
            <LoggedInPage 
              name={this.state.name} 
              photoUrl={this.state.photoUrl} 
              useremail={this.state.userEmail}
              idargency={this.state.idArgency}
              dtstart={this.state.dtStart}
              dtlastaction={this.state.dtLastAction}
            />
          ) : (
            <LoginPage signIn={this.signIn} />
          )}
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

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Text style={styles.header}>Email:{props.useremail}</Text>
      <Text style={styles.header}>Id Argency:{props.idargency}</Text>
      <Text style={styles.header}>dtStart:{props.dtstart}</Text>
      <Text style={styles.header}>dtLast:{props.dtlastaction}</Text>
    </View>
  )
}