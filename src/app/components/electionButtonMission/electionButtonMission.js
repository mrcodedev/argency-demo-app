import React, { Component } from "react";
import { 
    Text,
    TouchableOpacity,
    View
} from "react-native";

//Styles
import misionStyle from '../../styles/Missions/MissionNumElectionScreen.style';

export class ElectionButtonMission extends Component {
    render() {
        return (
            <View style={misionStyle.viewBotones}>
                {
                    this.props.rutas.map((section, index) => (
                        <TouchableOpacity
                            style={misionStyle.botonMision}
                            key={index}
                            onPress={() => {this.props.navigation.navigate(section.route)}}
                        >
                            <Text>{section.title}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}

export default ElectionButtonMission;