import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Stopwatch from './Stopwatch'

export default class StopwatchPage extends Component {
    render() {
        return (
            <View>
                <Stopwatch elapsedMS={this.props.elapsedMS} stopwatchIsRunning={this.props.stopwatchIsRunning} dispatch={this.props.dispatch}/>
                <Button
                    onPress={() => this.props.dispatch({
                        type: 'TOGGLE_TIME'
                    })}
                    title={`${this.props.stopwatchIsRunning ? 'Stop' : 'Start'} Stopwatch`}
                    color='blue'
                    accessibilityLabel='Toggle Stopwatch'
                />
            </View>
        )
    }
}