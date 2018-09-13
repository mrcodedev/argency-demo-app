import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PistasScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PistasScreen</Text>
            </View>
        );
    }
}
export default PistasScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});