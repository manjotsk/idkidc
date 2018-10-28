import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { TouchableOpacity, View, Text } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import Header from '../../components/header';
import ambulanceIcon from '../../assets/img/ambulance.png';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBeh75JqojgoQtpQHToEuNVJDfImJ4Fko4';

export default class App extends React.Component {
  state = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
    selectedLatitude: 0,
    drivers: [],
    bestAmbulanceLat:0,
    bestAmbulanceLon:0,
    showPath:false
  };

  async componentDidMount() {
    let userLocation = this.props.navigation.getParam('userLocation');
    let drivers = this.props.navigation.getParam('drivers');

    drivers = drivers.map(function (driver) {
      return {
        latlng: {
          latitude: driver.location.coordinates[0],
          longitude: driver.location.coordinates[1],
        },
        title: driver.vehicleNumber,
        description: 'I am available',
      };
    });

    userLocation = {
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude,
    };

    console.log(userLocation);
    console.log(drivers);

    let latitude = 0;
    let longitude = 0;
    let latDeltas = [];
    let lonDeltas = [];

    for (let i = 0; i < drivers.length; i++) {
      latitude = latitude + drivers[i].latlng.latitude;
      longitude = longitude + drivers[i].latlng.longitude;
    }

    latitude = latitude / drivers.length;
    longitude = longitude / drivers.length;

    console.log(latitude, longitude);

    for (let i = 0; i < drivers.length; i++) {
      latDeltas.push(Math.abs(drivers[i].latlng.latitude - latitude));
      lonDeltas.push(Math.abs(drivers[i].latlng.longitude - longitude));
    }
    console.log({ latitude, longitude });

    this.setState({
      latitude,
      longitude,
      latitudeDelta: Math.max(...latDeltas),
      longitudeDelta: Math.max(...lonDeltas),
      drivers,
    });
    var max=10000;
    var key=0;
    
    for(let i=0; i < drivers.length; i++){
      var dist = Math.sqrt( Math.pow((this.props.navigation.getParam('userLocation').latitude-drivers[i].latlng.latitude), 2) + Math.pow((this.props.navigation.getParam('userLocation').longitude-drivers[i].latlng.longitude), 2) );
      if (dist<max){
        key=i;
      }
    }
    this.setState({
      bestAmbulanceLat:drivers[key].latlng.latitude,
      bestAmbulanceLon:drivers[key].latlng.longitude,
    },()=>{
      this.setState({
        showPath:true
      })
    })
  }
  render() {
    let userLocation = this.props.navigation.getParam('userLocation');
    let drivers = this.props.navigation.getParam('drivers');

    drivers = drivers.map(function (driver) {
      return {
        latlng: {
          latitude: driver.location.coordinates[1],
          longitude: driver.location.coordinates[0],
        },
        title: driver.vehicleNumber,
        description: 'I am available',
      };
    });

    userLocation = {
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude,
    };

    const origin = { latitude: 37.3318456, longitude: -122.0296002 };
    const destination = { latitude: 37.771707, longitude: -122.4053769 };

    return (
      <React.Fragment>
        {console.log(this.state)}
        <Header text={'Ambulances Nearby'} />

        {this.state.latitude != 0 ?
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.state.longitude,
              longitude: this.state.latitude,
              latitudeDelta: this.state.latitudeDelta + 0.2,
              longitudeDelta: this.state.longitudeDelta + 0.2,
            }}
          >
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude
              }}
            />
            {drivers.map((marker, key) => (
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
            {console.log('\n\n\n\n\nstate',this.state)
            }
            {console.log(userLocation.latitude,userLocation.longitude)
            }
            <MapViewDirections
            origin={{
              latitude:30.764745,
              longitude:76.793639,
            }}
            destination={{
              latitude: 30.764865,
              longitude: 76.787042,
            }}
            // origin={origin}
            // destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />
          </MapView> : null
        }
      </React.Fragment>
    );
  }
}
