import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Asset, AppLoading, SplashScreen } from 'expo';

export default class App extends React.Component {
  state = {
    isSplashReady: false,
    isAppReady: false
  };

  render() {
    if(!this.state.isSplashReady) {
      return(
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({isSplashReady: true})}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if(!this.state.isAppReady) {
      return(
        <View style={{flex: 1}}>
          <Image
            source={require('./src/app/assets/carga1.png')}
            onLoad={this._cacheSplashResourcesAsync}
          />
        </View>
      );
    }

    return(
      <View style={{flex:1}}>
        <Image source={require('./assets/icon.png')} />
      </View>
    );
  }
}

_cacheSplashResourcesAsync = async() => {
  const imageSplash = require('./src/app/assets/carga1.png');
  return Asset.fromModule(imageSplash).downloadAsync();
}

_cacheResourcesAsync = async() => {
  SplashScreen.hide();
  const images = [
    require('./assets/icon.png')
  ];

  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  await Promise.all(cacheImages);
  this.setState({isAppReady: true});
}

// export default StackNavigator({
//   SplashScreen: { screen: SplashScreen },
//   LoginScreen: { screen: LoginScreen },
//   MissionsScreen: { screen: MissionsScreen },
//   Mission1: { screen: Mission1 },
//   Mission1Inside: { screen: Mission1Inside },
//   Mission2: { screen: Mission2 },
//   Mission2Inside: { screen: Mission2Inside },
//   Mission3: { screen: Mission3 },
//   Mission3Inside: { screen: Mission3Inside },
//   TheEnd: { screen: TheEnd }
// },
// {
//   headerMode: 'screen',
//   navigationOptions: {
//     header: {
//       visible: false
//     }
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
