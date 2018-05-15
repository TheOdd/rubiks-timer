const defaultState = {
    sequenceLength: 25,
    elapsedMS: 0,
    stopwatchIsRunning: true
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_TIME':
            return {
                sequenceLength: state.sequenceLength,
                elapsedMS: state.elapsedMS + action.elapsedMS,
                stopwatchIsRunning: state.stopwatchIsRunning
            }
        case 'TOGGLE_TIME':
            return {
                sequenceLength: state.sequenceLength,
                elapsedMS: state.elapsedMS,
                stopwatchIsRunning: !state.stopwatchIsRunning
            }
        default:
            return state
    }
}

export default reducer