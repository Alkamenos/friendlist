import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './FriendListApp.css';

import * as FriendsActions from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

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
        const actions = bindActionCreators(FriendsActions, dispatch);

        return (
            <div className={styles.friendListApp}>
                <h1>The FriendList</h1>
                <AddFriendInput addFriend={actions.addFriend}/>
                <FriendList friends={friendsById} actions={actions}/>
            </div>
        )
    }
}

