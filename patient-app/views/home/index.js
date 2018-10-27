import React from 'react';

import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from './style';
import Header from '../../components/header';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Header text={'Patient App'} />
        <View>
          <Text>Hello</Text>
          <View>
            <Text style={{ fontFamily: 'ProximaNova-Regular' }}>
              Open up App.js to start working on your app!
            </Text>
            <TouchableWithoutFeedback>
              <View style={styles.emergencyButton}>
                <Text style={styles.emergencyButtonText}>Emergency</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <View>
                <Text style={styles.reportText}>Report an accident</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
