import { createStore } from 'redux'
import reducer from './reducer'

export function configureStore(initialState) {
    return createStore(
        reducer,
        initialState
    )
}