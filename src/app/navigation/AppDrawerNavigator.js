import React from 'react';

import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import AppNavigatorDefault from '../navigation/AppNavigator';

//Select Screen Missions
import SelectMissionScreen from '../screens/Missions/SelectMission/SelectMissionScreen';

//Profile
import ProfileUserScreen from '../screens/Profile/ProfileUserScreen';

//Pistas
import PistasScreen from '../screens/Pistas/PistasScreen';

//Mission One
import MissionOneScreen from '../screens/Missions/MissionOne/MissionOneScreen';
import MissionOneElectionScreen from '../screens/Missions/MissionOne/MissionOneElectionScreen';

//Mission Two
import MissionTwoScreen from '../screens/Missions/MissionTwo/MissionTwoScreen';
import MissionTwoElectionScreen from '../screens/Missions/MissionTwo/MissionTwoElectionScreen';

//Mission Three
import MissionThreeScreen from '../screens/Missions/MissionThree/MissionThreeScreen';
import MissionThreeElectionScreen from '../screens/Missions/MissionThree/MissionThreeElectionScreen';

//End Mission
import EndMissionScreen from '../screens/Missions/EndMission/EndMissionScreen';

//Login Screen
import LoginScreen from '../screens/Login/LoginScreen';

//Sidebar App
import Sidebar from '../components/SidebarDefault/SidebarDefault';

const AppDrawerNavigator =  createDrawerNavigator ({
    SelectMission: {
        screen: SelectMissionScreen,
    },
    Profile: {
        screen: ProfileUserScreen
    },
    Pistas: {
        screen: PistasScreen
    },
    EndMission: {
        screen: EndMissionScreen
    },
    MissionOne: {
        screen: MissionOneScreen
    },
    MissionTwo: {
        screen: MissionTwoScreen
    },
    MissionThree: {
        screen: MissionThreeScreen
    },
    MissionOneElection: {
        screen: MissionOneElectionScreen
    },
    MissionTwoElection: {
        screen: MissionTwoElectionScreen
    },
    MissionThreeElection: {
        screen: MissionThreeElectionScreen
    },
    EndMission: {
        screen: EndMissionScreen
    },
    Login: {
        screen: LoginScreen,
        //LOCK THE DRAWER MENU
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })
    }
},
{
    initialRouteName: 'SelectMission',
    contentComponent: ({navigation}) => <Sidebar navigation={navigation} />
});

export default AppDrawerNavigator;