import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Stopwatch extends Component {
    componentDidMount() {
        this.lastTime = Date.now()
        this.stopwatchId = setInterval(
            () => this.updateTime(),
            25
        )
    }

    componentWillUnmount() {
        clearInterval(this.stopwatchId)
    }

    updateTime() {
        const newTime = Date.now()
        this.props.dispatch({
            type: 'UPDATE_TIME',
            elapsedMS: newTime - this.lastTime
        })
        this.lastTime = newTime
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.stopwatchIsRunning && !this.props.stopwatchIsRunning) {
            clearInterval(this.stopwatchId)
        } else if (!prevProps.stopwatchIsRunning && this.props.stopwatchIsRunning) {
            this.lastTime = Date.now()
            this.stopwatchId = setInterval(
                () => this.updateTime(),
                25
            )
        }
    }

    render() {
        const elapsed = this.props.elapsedMS
        const ms = elapsed % 1000
        const seconds = Math.floor(elapsed / 1000) % 60
        const minutes = Math.floor(elapsed / 1000 / 60)
        return (
            <Text style={styles.textStyle}>{minutes}:{seconds.toString().length !== 2 ? '0' + seconds.toString() : seconds}:{ms.toString().length !== 3 ? (ms.toString().length === 2 ? '0' + ms.toString() : '00' + ms.toString()) : ms}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Avenir Next',
        fontSize: 50
    }
})