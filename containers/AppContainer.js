import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import StopwatchPage from '../components/StopwatchPage'

const AppContainer = ({ elapsedMS, stopwatchIsRunning, dispatch }) => {
    return (
        <View style={styles.container}>
            <StopwatchPage elapsedMS={elapsedMS} stopwatchIsRunning={stopwatchIsRunning} dispatch={dispatch}/>
        </View>
    )
}

AppContainer.propTypes = {
    elapsedMS: PropTypes.number,
    stopwatchIsRunning: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        elapsedMS: state.elapsedMS,
        stopwatchIsRunning: state.stopwatchIsRunning
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})