import React from 'react';
import styles from './ProjectList.module.css';

const ProjectList = () => {
    return (
        <div>
            <div className={styles.card}>
                <h3 className={styles.title}>Project Title</h3>
                <p className={styles.posted}>Posted by Thor</p>
                <p className={styles.footer}>12th September,2019</p>
            </div>
            <div className={styles.card}>
                <h3 className={styles.title}>Project Title</h3>
                <p className={styles.posted}>Posted by Thor</p>
                <p className={styles.footer}>12th September,2019</p>
            </div>
            <div className={styles.card}>
                <h3 className={styles.title}>Project Title</h3>
                <p className={styles.posted}>Posted by Thor</p>
                <p className={styles.footer}>12th September,2019</p>
            </div>
        </div>
    )
}
export default ProjectList;