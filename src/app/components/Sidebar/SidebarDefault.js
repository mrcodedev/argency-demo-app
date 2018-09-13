import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage,
    SafeAreaView,
    ScrollView,
    DrawerItems,
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

    componentWillMount() {
        this.loadData();
    }

    render() {
        const routes = [
            {
                title: 'Elige Misión',
                route: 'EndMission',
            },
        ];

        return (
            // <View style={styles.container}>
            //     <View style=>
            //         <Image
            //             source={{uri: this.state.dataLogin.googlePhotoUrl}}
            //             style={styles.imageAvatar}
            //         />
            //         <Text style={styles.textName}>{this.state.dataLogin.googleName}</Text>
            //     </View>
            // </View>
            <SafeAreaView style={{flex:1}}>
                <View style={{height: 220, backgroundColor: 'yellow'}}>
                    <View
                        style={{ height: 150, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Image
                            source={{uri: this.state.dataLogin.googlePhotoUrl}} 
                            style={{height: 100, width:100, borderRadius: 60}}
                        />
                    </View>
                    <View
                        style={{height: 25, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Text>{this.state.dataLogin.googleName}</Text>
                    </View>
                </View>
                <View
                    style={{height: 400, backgroundColor: 'green'}}
                >
                    {
                        routes.map((e, i) => (
                            <TouchableOpacity 
                                onPress={() => {this.props.navigation.navigate(e.route)}}
                                style={styles.link}
                                key={i}
                            >
                                <Text>{e.title}</Text>
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imageAvatar: {
        width: 66,
        height: 66,
        marginTop: 40
    },
    textName: {
        padding: 15,
        fontSize: 18,
        
    },
    link: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#eee',

    }
});