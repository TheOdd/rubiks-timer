import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
            <TouchableOpacity style={styles.container} onPress={() => this.props.dispatch({
                        type: 'TOGGLE_TIME'
                    })}>
                <View style={styles.innerView}>
                    <Stopwatch elapsedMS={this.props.elapsedMS} stopwatchIsRunning={this.props.stopwatchIsRunning} dispatch={this.props.dispatch}/>
                    <SequenceGenerator seeds={this.state.seeds}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerView: {
        margin: '7%'
    }
})