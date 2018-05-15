import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Stopwatch from './Stopwatch'
import SequenceGenerator from './SequenceGenerator'

export default class StopwatchPage extends Component {
    constructor(props) {
        super(props)
        const seeds = []
        for (let i = 0; i < this.props.sequenceLength; i++) {
            seeds.push([Math.random(), Math.random()])
        }
        this.state = {
            seeds: seeds
        }
    }

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
                <SequenceGenerator seeds={this.state.seeds}/>
            </View>
        )
    }
}