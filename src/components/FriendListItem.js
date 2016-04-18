import React, { Component, PropTypes } from 'react';

export default class FriendListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        return (
            <li >
                <div >
                    <div><span>{this.props.name}</span></div>
                </div>
            </li>
        );
    }
}