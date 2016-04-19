import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './FriendListApp.css';

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
            <div className={styles.friendListApp}>
                <h1>The FriendList</h1>
                <FriendList friends={friendsById}/>
            </div>
        )
    }
}

