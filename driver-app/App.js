import React, {Component} from 'react'
import Routes from './src/Routes'
import { Provider } from "react-redux"
import store from './src/store/store'
import {Notifications} from 'expo'
import registerForPushNotificationsAsync from './src/screens/Notifications'
import { saveNotificationData } from './src/actions/actions';
export default class App extends Component {

  state = {
    notification: {},
  };
  
  componentDidMount() {
    registerForPushNotificationsAsync();

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
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
