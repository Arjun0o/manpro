import React from 'react';
import styles from './Notifications.module.css';


const Notifications = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.text}>Notifications</h3>
            <ul className={styles.notification}>
                <li>Notification</li>
                <li>Notification</li>
                <li>Notification</li>
            </ul>
        </div>
    )
}

export default Notifications;
