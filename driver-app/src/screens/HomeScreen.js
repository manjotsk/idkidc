import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import {Metrics} from '../themes'
import {getStatusBarHeight} from 'react-native-status-bar-height'
import { Entypo } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux'

import registerForPushNotificationsAsync from './Notifications'
import { connect } from 'react-redux';

class HomeScreen extends React.Component {

    state= {
        online: true
    }

    componentDidMount() {
        registerForPushNotificationsAsync()
    }

    render() {
        if(!this.props.notification)
        return(
            <View style={styles.container}>
                <Text>Check below who is in trouble...</Text>
                <View style={styles.tableHeading}>
                    <Text style={styles.tableHeadingText}>Location</Text>
                    <Text style={styles.tableHeadingText}>Distance(km)</Text>
                    <Text style={styles.tableHeadingText}>Available?</Text>
                </View>
                <View style={styles.tableHeading}>
                    <Text style={styles.tableHeadingText}>{JSON.stringify(this.props.notification.location)}</Text>
                    <Text style={styles.tableHeadingText}>{JSON.stringify(this.props.notification.distance)}</Text>
                    <View style={styles.available}>
                        <Entypo name="cross" style={styles.cross} onPress={Actions.maps}/>
                        <Entypo name="check" style={styles.check}/>
                    </View>
                </View>
            </View>
        )
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                onPress={()=>this.setState({online: !this.state.online})}
                style={this.state.online?styles.onLineButton:styles.offlineButton}
                >
                    <Text style={styles.text}>{this.state.online?'ONLINE':'OFFLINE'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const button ={
    padding: 40,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 5
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    offlineButton: {
        ...button,
        backgroundColor: '#e74c3c'
    },
    onLineButton: {
        ...button,
        backgroundColor: '#4bb543'
    },

    text: {
        color: 'white'
    },
    tableHeading: {
        flexDirection: 'row',
    },
    tableHeadingText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20
    },
    available: {
        marginTop: 10,
        flex: 0.7,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    cross: {
        color: '#e74c3c',
        flex: 1,
        alignSelf: 'center',
        fontSize: 20
    },
    check: {
        color: '#4bb543',
        flex: 1,
        alignSelf: 'center',
        fontSize: 20
    }
})

const mapStateToProps = state => {
    return {
        notification: state.notify.notification
    }
}

export default connect(mapStateToProps)(HomeScreen)