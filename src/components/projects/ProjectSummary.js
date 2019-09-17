import React from 'react';
import styles from './ProjectSummary.module.css';

const ProjectSummary = ({ project }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.posted}>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className={styles.footer}>12th September,2019</p>
        </div>
    )
}
export default ProjectSummary;