import React from 'react';
import styles from './ProjectSummary.module.css';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.posted}>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className={styles.footer}>{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
    )
}
export default ProjectSummary;