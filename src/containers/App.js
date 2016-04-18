import React, { Component } from 'react';
import { Provider } from 'react-redux';

import DevTools from './DevTools';
import FriendListApp from './FriendListApp';


export default class App extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <FriendListApp />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}