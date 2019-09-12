import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <ProjectList />
                </div>
                <div>
                    <Notifications />
                </div>
            </div>
        )
    }
}
export default Dashboard;