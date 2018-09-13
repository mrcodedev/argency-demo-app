import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage,
    SafeAreaView,
    TouchableOpacity
} from "react-native";

class SidebarDefault extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataLogin: '',
        }
    }

    loadData = async () => {
        try {
            let data = await AsyncStorage.getItem('dataLogin');
            if(data !== null) {
                this.setState({
                    dataLogin: JSON.parse(data),
                })

                console.log(this.state.dataLogin);
            }else{
                console.log('ERROR EN RECOGER DATOS ASYNC');
            }
        } catch(error) {
            console.log(`Error devolver Async: ${error}`);
        }
    }

    logOut = () => {
        console.log('TOY FUERA :D LOGUT');
        this.props.navigation.navigate('Login')
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        const routes = [
            {
                title: 'Datos usuario',
                route: 'Profile',
                isRoute: 1
            },
            {
                title: 'Pistas Misión',
                route: 'Pistas',
                isRoute: 1
            },
            {
                title: 'Lista Misiones',
                route: 'SelectMission',
                isRoute: 1
            },
            {
                title: 'Misión 1',
                route: 'MissionOne',
                isRoute: 1
            },
            {
                title: 'Misión 2',
                route: 'MissionTwo',
                isRoute: 1
            },
            {
                title: 'Misión 3',
                route: 'MissionThree',
                isRoute: 1
            },
            {
                title: 'LogOut',
                route: this.logOut,
                isRoute: 0
            }
        ];

        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.profileArea}>
                    <View
                        style={styles.profilePhotoArea}
                    >
                        <Image
                            source={{uri: this.state.dataLogin.googlePhotoUrl}} 
                            style={styles.profilePhoto}
                        />
                    </View>
                    <View
                        style={styles.usernameArea}
                    >
                        <Text>{this.state.dataLogin.googleName}</Text>
                    </View>
                </View>
                <View
                    style={styles.butonSectionArea}
                >
                    {
                        routes.map((section, indexSection) => (
                            <TouchableOpacity 
                                onPress={section.isRoute == 0 ? section.route : () => {this.props.navigation.navigate(section.route)}}
                                style={styles.link}
                                key={indexSection}
                            >
                                <Text>{section.title}</Text>
                            </TouchableOpacity>
                        )
                    )}
                </View>
            </SafeAreaView>
        );
    }
}
export default SidebarDefault;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    profileArea: {
        height: 220, 
        backgroundColor: 'yellow'
    },
    profilePhotoArea: {
        height: 150,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePhoto: {
        height: 100,
        width:100,
        borderRadius: 60
    },
    usernameArea: {
        height: 25,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    butonSectionArea: {
        height: 400,
        backgroundColor: 'green'
    },
    link: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#eee',

    }
});