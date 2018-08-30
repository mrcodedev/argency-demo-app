import { createStackNavigator } from 'react-navigation';


import LoginScreen from './src/app/screens/LoginScreen';
import SelectMissionScreen from './src/app/screens/SelectMissionScreen';
import MisionOneScreen from './src/app/screens/MisionOneScreen';
import MisionTwoScreen from './src/app/screens/MisionTwoScreen';
import MisionThreeScreen from './src/app/screens/MisionThreeScreen';
import MisionOneElectionScreen from './src/app/screens/MisionOneElectionScreen';
import MisionTwoElectionScreen from './src/app/screens/MisionTwoElectionScreen';
import MisionThreeElectionScreen from './src/app/screens/MisionThreeElectionScreen';
import EndMision from './src/app/screens/EndMision';


const AppStackNavigator =  createStackNavigator({
    Login: {
      screen: LoginScreen
    },
    SelectMission: {
      screen: SelectMissionScreen,
    },
    MisionOne: {
      screen: MisionOneScreen
    },
    MisionTwo: {
      screen: MisionTwoScreen
    },
    MisionThree: {
      screen: MisionThreeScreen
    },
    MisionOneElection: {
      screen: MisionOneElectionScreen
    },
    MisionTwoElection: {
      screen: MisionTwoElectionScreen
    },
    MisionThreeElection: {
      screen: MisionThreeElectionScreen
    },
    EndMision: {
      screen: EndMision
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },);

export default AppStackNavigator;