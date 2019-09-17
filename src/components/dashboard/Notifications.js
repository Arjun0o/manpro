import React from 'react';
import styles from './Notifications.module.css';
import moment from 'moment';


const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className={styles.container}>
            <h3 className={styles.text}>Notifications</h3>
            <ul className={styles.notification}>
                {notifications && notifications.map(item => {
                    return <li key={item.id}>
                        <span className={styles.text1}>- {item.user} </span>
                        <span className={styles.content}> {item.content}</span>
                        <div className={styles.date}>{moment(item.time.toDate()).fromNow()}</div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Notifications;
