const defaultState = {
    elapsedMS: 0,
    stopwatchIsRunning: true
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_TIME':
            return {
                elapsedMS: state.elapsedMS + action.elapsedMS,
                stopwatchIsRunning: state.stopwatchIsRunning
            }
        case 'TOGGLE_TIME':
            return {
                elapsedMS: state.elapsedMS,
                stopwatchIsRunning: !state.stopwatchIsRunning
            }
        default:
            return state
    }
}

export default reducer