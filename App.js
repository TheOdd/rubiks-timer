import React from 'react'
import { configureStore, history } from './configureStore'
import Root from './containers/Root'

const store = configureStore()

export default class App extends React.Component {
    render() {
        return (
            <Root store={store} history={history}/>
        )
    }
}
