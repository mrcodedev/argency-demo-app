import { createStackNavigator, DrawerNavigator } from 'react-navigation';

//Login Screen Start
import LoginScreen from '../screens/Login/LoginScreen';

//Select Screen Missions
import SelectMissionScreen from '../screens/Missions/SelectMission/SelectMissionScreen';

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

import Prueba from '../navigation/AppDrawerNavigator';

const AppNavigator =  createStackNavigator({
    Login: {
      screen: LoginScreen
    },
    SelectMission: {
      screen: Prueba,
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  );

export default AppNavigator;