import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native'
import {Metrics} from '../themes'
import {getStatusBarHeight} from 'react-native-status-bar-height'
import { Entypo } from '@expo/vector-icons';
import {Actions, ActionConst} from 'react-native-router-flux'

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
        console.log(this.props.notification)
        if(this.props.notification){
            return(
                <ImageBackground style={styles.container} source={require('../assets/img/bg1.png')}>
                    <TouchableOpacity 
                        onPress={()=>this.setState({online: !this.state.online})}
                        style={this.state.online?styles.onLineButton:styles.offlineButton}
                        >
                            <Text style={styles.text}>{this.state.online?'ONLINE':'OFFLINE'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.info}>Check below who is in trouble...</Text>
                    <View style={styles.tableHeading}>
                        <Text style={styles.tableHeadingText}>Location</Text>
                        <Text style={styles.tableHeadingText}>Distance(km)</Text>
                        <Text style={styles.tableHeadingText}>Available?</Text>
                    </View>
                        <View style={styles.tableHeading}>
                            <Text style={styles.tableHeadingText}>{JSON.stringify(this.props.notification.data.location)}</Text>
                            <Text style={styles.tableHeadingText}>{JSON.stringify(this.props.notification.data.distance)}</Text>
                            <View style={styles.available}>
                                <Entypo name="check" style={styles.check} onPress={Actions.maps}/>
                                <Entypo name="cross" style={styles.cross} onPress={()=>this.setState({notification: false})}/>
                            </View>
                        </View>
                <TouchableOpacity 
                        onPress={()=>Actions.regScreen(ActionConst.RESET)}
                        style={styles.logout}
                        >
                            <Text style={styles.text}>LOGOUT</Text>
                    </TouchableOpacity>
                </ImageBackground>
            )
        }
        return(
            <ImageBackground style={styles.container} source={require('../assets/img/bg1.png')}>
                <TouchableOpacity 
                    onPress={()=>this.setState({online: !this.state.online})}
                    style={this.state.online?styles.onLineButton:styles.offlineButton}
                    >
                        <Text style={styles.text}>{this.state.online?'ONLINE':'OFFLINE'}</Text>
                </TouchableOpacity>
                <Text style={styles.info}>Check below who is in trouble...</Text>
                <View style={styles.tableHeading}>
                    <Text style={styles.tableHeadingText}>Location</Text>
                    <Text style={styles.tableHeadingText}>Distance(km)</Text>
                    <Text style={styles.tableHeadingText}>Available?</Text>
                </View>
                 <TouchableOpacity 
                        onPress={()=>{
                            Actions.regScreen(ActionConst.RESET)
                        }}
                        style={styles.logout}
                        >
                            <Text style={styles.text}>LOGOUT</Text>
                    </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const button ={
    padding: 40,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 5,
    position: 'absolute',
    right: 20,
    top: 40
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
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignContent: 'center'
    },
    tableHeadingText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        borderColor: 'white',
        borderWidth: 1
    },
    available: {
        // paddingLeft: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
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
    },
    info: {
        color: 'white',
        marginBottom: 30
    },
    logout: {
        backgroundColor: '#e74c3c',
        padding: 40,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        right: 20 
    }
})

const mapStateToProps = state => {
    return {
        notification: state.notify.notification
    }
}

export default connect(mapStateToProps)(HomeScreen)