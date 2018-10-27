import React from 'react';

import { View, Text } from 'react-native';

import styles from './style';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <View>
          <Text style={{ fontFamily: 'ProximaNova-Regular' }}>
            Open up App.js to start working on your app!
          </Text>
        </View>
      </View>
    );
  }
}

export default Home;
