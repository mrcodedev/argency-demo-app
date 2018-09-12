import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SidebarDefault extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HELLO THERE!</Text>
                <Text>NiceSidebar</Text>
            </View>
        );
    }
}
export default SidebarDefault;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});