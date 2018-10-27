import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Metrics} from '../themes'

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
            <View style={styles.status}>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    status: {
        
    }
})