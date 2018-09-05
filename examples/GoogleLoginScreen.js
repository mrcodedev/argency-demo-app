import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import Expo from "expo";

export default class GoogleLoginScreen extends React.Component {
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
            console.log(this.state.signedIn);
            //Comprobamos si existe el usuario en Argency
            this.state.signedIn ? this.isPermissionArgency() : console.log('No se ha logeado :(');
          })
      })
    }

    logeoStart();
  }

  signInGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: 'ID_CLIENT_HERE',
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
          console.log(`ERROR: Status: ${response.status}, statusText: ${response.statusText}`);
        }
    } catch(e) {
      console.log(`Error conexión Argency: ${e}`);
    }
  }

  render() {
    return (
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
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})