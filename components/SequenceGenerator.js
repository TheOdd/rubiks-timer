import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

const generateMoveSequence = seed => {
    const moves = ['U', 'D', 'L', 'R', 'F', 'B']
    const movesPrime = moves.map(str => str + '\'')
    const moveRepeatNum = Math.floor(seed[0] * (4 - 1)) + 1
    const moveIndexNum = Math.floor(seed[1] * (6))

    if (moveRepeatNum === 3)
        return `${movesPrime[moveIndexNum]}`
    else
        return `${moves[moveIndexNum]}${moveRepeatNum === 1 ? '' : moveRepeatNum}`
}

export default class SequenceGenerator extends Component {
    render() {
        return (
            <Text style={styles.textStyle}>
                {this.props.seeds.map(seed => generateMoveSequence(seed)).join(' ')}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Avenir Next',
        fontSize: 25,
        textAlign: 'center'
    }
})