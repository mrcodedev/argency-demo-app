import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class googleLogin extends Component {
    render() {
        return(
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


export default googleLogin;

const styles = StyleSheet.create({

});