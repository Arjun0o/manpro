import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className={styles.container}>
                <div>
                    <ProjectList projects={projects} />
                </div>
                <div>
                    <Notifications />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard);