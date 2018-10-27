import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from './style';
import Header from '../../components/header';
import PlusAnimation from '../../components/plusanimation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };
  }

  handleEmergencyPress() {
    if (!this.state.play) {
      this.setState({
        play: true,
      });
    } else {
      this.setState({
        play: false,
      });
    }
  }

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
