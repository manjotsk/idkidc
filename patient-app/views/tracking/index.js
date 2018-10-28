import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { TouchableOpacity, View, Text } from 'react-native';

import Header from '../../components/header';
import ambulanceIcon from '../../assets/img/ambulance.png';

var center = {};

const sampleCoordinates = [
  {
    latlng: {
      latitude: 30.769014,
      longitude: 76.784795,
    },
    title: 'Ambulance 1',
    description: 'I am available',
  },
  {
    latlng: {
      latitude: 30.469014,
      longitude: 76.884795,
    },
    title: 'Ambulance 2',
    description: 'I am available',
  },
  {
    latlng: {
      latitude: 31,
      longitude: 76.6,
    },
    title: 'Ambulance 1',
    description: 'I am available',
  },
];
let sampleUserLocation={
  latitude: 30.709014,
  longitude: 76.702795,
}
export default class App extends React.Component {
  state={
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
    selectedLatitude:0,
  }
  async componentDidMount(){
    let latitude = 0;
    let longitude = 0;
    let latDeltas = [];
    let lonDeltas = [];
    for (let i = 0; i < sampleCoordinates.length; i++){
      latitude = latitude + sampleCoordinates[i].latlng.latitude;
      longitude = longitude + sampleCoordinates[i].latlng.longitude;
    }
    latitude = latitude / sampleCoordinates.length;
    longitude = longitude / sampleCoordinates.length;
    for (let i = 0; i < sampleCoordinates.length; i++){
      latDeltas.push(Math.abs(sampleCoordinates[i].latlng.latitude-latitude))
      lonDeltas.push(Math.abs(sampleCoordinates[i].latlng.longitude-longitude))
    }
    this.setState({
      latitude,
      longitude,
      latitudeDelta:Math.max(...latDeltas),
      longitudeDelta:Math.max(...lonDeltas)
    })
  }
  render() {
    return (
      <React.Fragment>
        {console.log(this.state)
        }
        <Header text={'Ambulances Nearby'} />
        {this.state.latitudeDelta>0?<MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: this.state.latitudeDelta+20,
            longitudeDelta: this.state.longitudeDelta+20,
          }}
        >
          {sampleCoordinates.map((marker, key) => (
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
        </MapView>:<MapView/>}
      </React.Fragment>
    );
  }
}
