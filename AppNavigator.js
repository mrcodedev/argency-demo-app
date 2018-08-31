import { createStackNavigator } from 'react-navigation';


import LoginScreen from './src/app/screens/LoginScreen';
import SelectMissionScreen from './src/app/screens/SelectMissionScreen';
import MissionOneScreen from './src/app/screens/MissionOneScreen';
import MissionTwoScreen from './src/app/screens/MissionTwoScreen';
import MissionThreeScreen from './src/app/screens/MissionThreeScreen';
import MissionOneElectionScreen from './src/app/screens/MissionOneElectionScreen';
import MissionTwoElectionScreen from './src/app/screens/MissionTwoElectionScreen';
import MissionThreeElectionScreen from './src/app/screens/MissionThreeElectionScreen';
import EndMissionScreen from './src/app/screens/EndMissionScreen';

//Settings Google
import GoogleLoginScreen from './GoogleLoginScreen';



const AppStackNavigator =  createStackNavigator({
    GoogleLogin: {
      screen: GoogleLoginScreen 
    },
    Login: {
      screen: LoginScreen
    },
    SelectMission: {
      screen: SelectMissionScreen,
    },
    MisionOne: {
      screen: MissionOneScreen
    },
    MisionTwo: {
      screen: MissionTwoScreen
    },
    MisionThree: {
      screen: MissionThreeScreen
    },
    MisionOneElection: {
      screen: MissionOneElectionScreen
    },
    MisionTwoElection: {
      screen: MissionTwoElectionScreen
    },
    MisionThreeElection: {
      screen: MissionThreeElectionScreen
    },
    EndMision: {
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