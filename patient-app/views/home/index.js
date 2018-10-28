import React from 'react';
import axios from 'axios';
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { Location, Permissions } from 'expo';

import styles from './style';
import Header from '../../components/header';
import PlusAnimation from '../../components/plusanimation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      location: null,
      drivers: [],
    };
  }

  handleEmergencyPress() {
    if (!this.state.play) {
      this.setState({
        play: true,
      });
      const url = `https://kinkyu.herokuapp.com/kinkyu/api/v1/driver/queryDrivers?long=${
        this.state.location.coords.longitude
      }&lat=${this.state.location.coords.latitude}`;
      setTimeout(() => {
        axios
          .get(url)
          .then(res => {
            const drivers = res.data;
            this.setState({ drivers, play: false });
            this.props.navigation.navigate('TrackingScreen', {
              userLocation: this.state.location,
              drivers,
            });
          })
          .catch(error => {
            this.setState({ play: false });
          });
      }, 3000);
    } else {
      this.setState({
        play: false,
      });
    }
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    const location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let buttonText = '';
    let statusText = '';

    if (this.state.play) {
      buttonText = 'Cancel';
      statusText = 'Looking for ambulances nearby...';
    } else {
      buttonText = 'Emergency';
      statusText = ' ';
    }

    return (
      <React.Fragment>
        <Header text={'Patient App'} />
        <View style={styles.container}>
          <Text>{JSON.stringify(this.state.location)}</Text>
          <View style={{ flex: 1 }}>
            <View style={styles.userDetails}>
              <Text style={styles.userDetailsText}>Logged in as Lavish Thakkar</Text>
            </View>
            <PlusAnimation play={this.state.play} />
          </View>
          <View style={styles.searchStatus}>
            <Text style={[styles.userDetailsText, { textAlign: 'center', fontSize: 18 }]}>
              {statusText}
            </Text>
          </View>
          <View>
            <TouchableWithoutFeedback onPress={this.handleEmergencyPress.bind(this)}>
              <View style={styles.emergencyButton}>
                <Text style={styles.emergencyButtonText}>{buttonText}</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <View>
                <Text style={styles.reportText}>Report an accident</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default Home;
