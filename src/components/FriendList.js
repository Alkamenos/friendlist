import React, { Component, PropTypes } from 'react';

import FriendListItem from './FriendListItem';

export default class FriendList extends Component {
    static propTypes = {
        friends: PropTypes.object.isRequired
    };

    render() {
        function map(friends) {
            let list = [];

            for (let record in friends) {
                let friend = friends[record];

                list.push(
                    <FriendListItem key={friend.id}
                                    id={friend.id}
                                    name={friend.name}
                    />
                )
            }
            return list;
        }

        return (
            <ul >{map(this.props.friends)}</ul>
        );
    }
}