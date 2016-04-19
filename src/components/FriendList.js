import React, { Component, PropTypes } from 'react';

import FriendListItem from './FriendListItem';
import styles from './FriendList.css';

export default class FriendList extends Component {
    static propTypes = {
        friends: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        function map(friends, actions) {
            let list = [];

            for (let record in friends) {
                let friend = friends[record];

                list.push(
                    <FriendListItem key={friend.id}
                                    id={friend.id}
                                    name={friend.name}
                                    starred={friend.starred}
                        {...actions}
                    />
                )
            }
            return list;
        }

        return (
            <ul className={styles.friendList}>{map(this.props.friends, this.props.actions)}</ul>
        );
    }
}