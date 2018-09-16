import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Alert
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
        Alert.alert(
            'Logout',
            '¿Estás seguro de querer realizar Log Out?',
            [
                {
                    text: 'No', 
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancelButtonLogOut'
                },
                {
                    text: 'Si',
                    onPress: () => {
                        console.log('Acept Presed');
                        this.props.navigation.navigate('Login')
                    }
                }
            ]
        )

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
            },
        ];

        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.profileArea}>
                    <ImageBackground
                        style={styles.imgBackgroundProfile}
                        resizeMode='cover'
                        source={require('../../../../assets/detective-background.jpeg')}
                    >
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
                            <Text style={styles.textUserName}>{this.state.dataLogin.googleName}</Text>
                        </View>
                    </ImageBackground>
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
                <View
                    style={styles.LogOutArea}
                >
                    <TouchableOpacity 
                        onPress={this.logOut}
                        style={styles.link}
                    >
                        <Text>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
export default SidebarDefault;

const styles = StyleSheet.create({
    //Safearea Zone
    safeAreaContainer: {
        flex: 1,
    },
    //Background Image
    imgBackgroundProfile: {
        flex: 1,

    },
    //Profile Area: Photo + Username
    profileArea: {
        height: 220,

    },
    //Photo Area
    profilePhotoArea: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',

    },
    //Photo Profile
    profilePhoto: {
        height: 100,
        width:100,
        borderRadius: 60,
    },
    //Username Area
    usernameArea: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    //Text User 
    textUserName: {
        fontSize: 20,
        color: 'white'
    },
    //Button Section Area
    butonSectionArea: {
        flex: 6
    },
    //Links of Buttons
    link: {
        padding: 15,

    },
    LogOutArea: {
        flex: 1,
        justifyContent: 'flex-end',
    }

});