import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

class openButtonDrawer extends Component {
    render() {
        return (
            <Ionicons 
            name="md-menu"
            size={32}
            color="white"
            style={{ padding: 15 ,marginTop: 15, paddingLeft: 10 }}
            onPress={() => this.props.navigation.openDrawer()}
        />
        );
    }
}
export default openButtonDrawer;