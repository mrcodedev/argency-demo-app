import { createStackNavigator } from 'react-navigation';

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

//Settings Google
import GoogleLoginScreen from '../../../examples/GoogleLoginScreen';


const AppStackNavigator =  createStackNavigator({
    Login: {
      screen: LoginScreen
    },
    GoogleLogin: {
      screen: GoogleLoginScreen 
    },
    SelectMission: {
      screen: SelectMissionScreen,
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
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },);

export default AppStackNavigator;