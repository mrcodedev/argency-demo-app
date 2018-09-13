import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ProfileUser extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileUser</Text>
            </View>
        );
    }
}
export default ProfileUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});