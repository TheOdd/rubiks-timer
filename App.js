import React from 'react'
import { configureStore, history } from './configureStore'
import Root from './containers/Root'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

const store = configureStore()

class Stopwatch extends React.Component {
    render() {
        return (
            <Root store={store} history={history}/>
        )
    }
}

export default createBottomTabNavigator({
    Stopwatch: {
        screen: Stopwatch,
        navigationOptions: {
            tabBarLabel: 'Stopwatch',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-stopwatch' : 'ios-stopwatch-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            )
        }
    }
}, {
    initialRouteName: 'Stopwatch'
})