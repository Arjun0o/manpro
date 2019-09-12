import React from 'react';
import styles from './ProjectSummary.module.css'

const ProjectSummary = () => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Project Title</h3>
            <p className={styles.posted}>Posted by Thor</p>
            <p className={styles.footer}>12th September,2019</p>
        </div>
    )
}
export default ProjectSummary;