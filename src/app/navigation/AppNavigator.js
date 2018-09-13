import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login/LoginScreen';

import DrawerNavigatorDefault from './AppDrawerNavigator';

const AppNavigator =  createStackNavigator({
    Login: {
      screen: LoginScreen
    },
    SelectMission: {
      screen: DrawerNavigatorDefault,
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    // initialRouteName: 'SelectMission',
    initialRouteName: 'Login',
  },
);

export default AppNavigator;