import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, ImageBackground, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';
import Expo from "expo";

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
      dtLastAction: ''
    }
  }

  signIn = async () => {
    const logeoStart = () => {
      return new Promise(resolve => {
        //Comprobamos el logeo de Google
        this.signInGoogle()
          .then(() => {
            //Comprobamos si existe el usuario en Argency
            this.isPermissionArgency();
          })
      })
    }

    logeoStart();
  }

  signInGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: 'YOUR_CLIENT_ID_HERE',
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

          console.log(datos);
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
        <KeyboardAvoidingView behavior="padding" style={styles.containerKeyboard}>
            <View style={styles.logoContainer}>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.containerFormulario}>
                  <StatusBar 
                      barStyle="light-content"
                  />
                  {/* <TextInput style={styles.input} 
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
                  </TextInput> */}
                  <View style={styles.container}>
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

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Logeate con Google</Text>
      <Button title="Logeate con Google" onPress={() => props.signIn()} />
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