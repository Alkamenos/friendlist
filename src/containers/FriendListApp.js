import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { FriendList } from '../components';

@connect(state => ({
    friendlist: state.friendlist
}))
export default class FriendListApp extends Component {
    static propTypes = {
        friendlist: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { friendlist: { friendsById }, dispatch } = this.props;
        return (
            <div>
                <h1>The FriendList</h1>
                <FriendList friends={friendsById}/>
            </div>
        )
    }
}

