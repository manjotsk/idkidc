import React from 'react';
import { Animated, Easing } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

import HomeScreen from './views/home/';
import TrackingScreen from './views/tracking';

const transitionConfig = () => ({
  transitionSpec: {
    duration: 500,
    easing: Easing.out(Easing.poly(6)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: sceneProps => {
    const { position, layout, scene } = sceneProps;

    const thisSceneIndex = scene.index;
    const height = layout.initHeight;

    const translateY = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [height, 0, 0],
    });

    const slideFromBottom = { transform: [{ translateY }] };

    return slideFromBottom;
  },
});

const RootStack = createStackNavigator(
  {
    HomeScreen,
    TrackingScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    transitionConfig,
    lazy: true,
    headerMode: 'none',
    cardStyle: {
      shadowColor: 'transparent',
    },
  }
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'ProximaNova-Regular': require('./assets/fonts/ProximaNova-Regular.otf'),
      'ProximaNova-Bold': require('./assets/fonts/ProximaNova-Bold.otf'),
      'ProximaNova-Light': require('./assets/fonts/ProximaNova-Light.otf'),
    });
    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    if (this.state.fontLoaded) {
      return <RootStack />;
    }

    return null;
  }
}

export default App;
