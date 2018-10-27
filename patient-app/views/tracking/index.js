import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { TouchableOpacity, View, Text } from 'react-native';

import Header from '../../components/header';

import ambulanceIcon from '../../assets/img/ambulance.png';

const sampleCoordinates = [
  {
    latlng: {
      latitude: 24.78825,
      longitude: -12.4324,
    },
    title: 'Ambulance 1',
    description: 'I am available',
  },
  {
    latlng: {
      latitude: -37.78825,
      longitude: -22.4324,
    },
    title: 'Ambulance 2',
    description: 'I am available',
  },
  {
    latlng: {
      latitude: 37.78825,
      longitude: -12.4324,
    },
    title: 'Ambulance 1',
    description: 'I am available',
  },
];

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header text={'Ambulances Nearby'} />
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {[
            {
              latlng: {
                latitude: 37.78825,
                longitude: -122.4324,
              },
              title: 'Ambulance 1',
              description: 'I am available',
            },
          ].map((marker, key) => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              key={key}
              image={ambulanceIcon}
            >
              <Callout tooltip>
                <TouchableOpacity onPress={() => alert(`Clicked`)}>
                  <View style={{ backgroundColor: '#FFFFFF' }}>
                    <Text>
                      {marker.title}
                      {'\n'}
                      {marker.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </React.Fragment>
    );
  }
}
