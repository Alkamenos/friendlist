import React, { Component, PropTypes } from 'react';
import styles from './FriendListItem.css';

export default class FriendListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        return (
            <li className={styles.friendListItem}>
                <div className={styles.friendInfos}>
                    <div><span>{this.props.name}</span></div>
                </div>
            </li>
        );
    }
}