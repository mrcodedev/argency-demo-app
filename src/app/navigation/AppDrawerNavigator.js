import React from 'react';

import { createDrawerNavigator } from 'react-navigation';

//Select Screen Missions
import SelectMissionScreen from '../screens/Missions/SelectMission/SelectMissionScreen';

//Mission One
import MissionOneScreen from '../screens/Missions/MissionOne/MissionOneScreen';
import MissionOneElectionScreen from '../screens/Missions/MissionOne/MissionOneElectionScreen';

// //Mission Two
import MissionTwoScreen from '../screens/Missions/MissionTwo/MissionTwoScreen';
import MissionTwoElectionScreen from '../screens/Missions/MissionTwo/MissionTwoElectionScreen';

// //Mission Three
import MissionThreeScreen from '../screens/Missions/MissionThree/MissionThreeScreen';
import MissionThreeElectionScreen from '../screens/Missions/MissionThree/MissionThreeElectionScreen';

//End Mission
import EndMissionScreen from '../screens/Missions/EndMission/EndMissionScreen';

//
import Sidebar from '../components/Sidebar/SidebarDefault';

const AppDrawerNavigator =  createDrawerNavigator ({
    SelectMission: {
        screen: SelectMissionScreen,
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
    }

},
{
    initialRouteName: 'SelectMission',
    contentComponent: ({navigation}) => <Sidebar navigation={navigation} />
});

export default AppDrawerNavigator;