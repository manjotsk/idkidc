import React from 'react';
import MapView, { Marker } from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
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
          />
        ))}
      </MapView>
    );
  }
}
