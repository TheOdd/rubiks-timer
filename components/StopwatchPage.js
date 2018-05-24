import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Stopwatch from './Stopwatch'
import SequenceGenerator from './SequenceGenerator'

const generateSeeds = length => {
    const seeds = []
    for (let i = 0; i < length; i++) {
        seeds.push([Math.random(), Math.random()])
    }
    return seeds
}

export default class StopwatchPage extends Component {
    constructor(props) {
        super(props)
        const seeds = generateSeeds(this.props.sequenceLength)
        this.state = {
            seeds: seeds
        }
    }

    updateSeeds() {
        const newSeeds = generateSeeds(this.props.sequenceLength)
        this.setState({
            seeds: newSeeds
        })
    }

    handlePress() {
        if (!this.props.stopwatchIsRunning) {
            this.updateSeeds()
            this.props.dispatch({
                type: 'RESET_TIME'
            })
        }
        this.props.dispatch({
            type: 'TOGGLE_TIME'
        })
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.handlePress()}>
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