import React, { Component } from "react";
import { 
    Text,
    TouchableOpacity,
    View
} from "react-native";

//Styles
import misionStyle from '../../styles/Missions/SelectMissionScreen.style';

export class SelectMissionButton extends Component {
    render() {
        return (
            <View style={misionStyle.viewBotones}>
            {
                this.props.rutas.map((section, indexSection) => (
                    <TouchableOpacity
                        style={misionStyle.botonMision}
                        onPress={() => {this.props.navigation.navigate(section.route)}}
                        key={indexSection}
                    > 
                    <Text>{section.title}</Text>
                    </TouchableOpacity>
            )
            )}
        </View>
        );
    }
}

export default SelectMissionButton;