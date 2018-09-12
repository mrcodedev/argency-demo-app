import { createDrawerNavigator } from 'react-navigation';

//Import
import SelectMission from './../screens/Missions/SelectMission/SelectMissionScreen';
import EndMissionScreen from './../screens/Missions/EndMission/EndMissionScreen';

const AppDrawerNavigator =  createDrawerNavigator ({
    

    SelectMission: {
        screen: SelectMission,
    },
    EndMission: {
        screen: EndMissionScreen
    }, 
},
{
    initialRouteName: 'SelectMission'
});

export default AppDrawerNavigator;