import React, {Component} from 'react'
import {Platform} from 'react-native'
import Routes from './src/Routes'
import { Provider } from "react-redux"
import store from './src/store/store'
import {Notifications, Constants, Permissions, Location} from 'expo'
import registerForPushNotificationsAsync from './src/screens/Notifications'
import { saveNotificationData } from './src/actions/actions'
import { Font } from 'expo';
import axios from 'axios'

export default class App extends Component {

  state = {
    notification: {},
    fontLoaded: false,
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
    this.setState({ location });
  };

  updateLocation =()=>{
    const {location} = this.state
      this.setState({loading: true})
      axios.post('https://kinkyu.herokuapp.com/kinkyu/api/v1/driver/updateLocation', {
          long: JSON.stringify(location.coords.latitude),
          lat: JSON.stringify(location.coords.longitude),
          pushToken: token
        })
        .then( (response)=> {
          console.log(response);
        })
        .catch( (error)=> {
          console.log(error);
        });
  }
  
  async componentDidMount() {
    let token = await Notifications.getExpoPushTokenAsync();
    setTimeout(()=>{
      const {location} = this.state
        this.setState({loading: true})
        axios.post('https://kinkyu.herokuapp.com/kinkyu/api/v1/driver/updateLocation', {
            long: JSON.stringify(location.coords.latitude),
            lat: JSON.stringify(location.coords.longitude),
            pushToken: token
          })
          .then( (response)=> {
            console.log(response);
          })
          .catch( (error)=> {
            console.log(error);
          });
    }, 3000)

    registerForPushNotificationsAsync();
    
    await Font.loadAsync({
      'ProximaNova-Regular': require('./src/assets/fonts/ProximaNova-Regular.otf'),
      'ProximaNova-Bold': require('./src/assets/fonts/ProximaNova-Bold.otf'),
      'ProximaNova-Light': require('./src/assets/fonts/ProximaNova-Light.otf'),
    });
    this.setState({
      fontLoaded: true,
    });

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.setState({notification: notification})
    store.dispatch(saveNotificationData(notification))
    console.log(notification)
  }

  render() {
    if (this.state.fontLoaded) {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
  else {
    return null
  }
  }
}
