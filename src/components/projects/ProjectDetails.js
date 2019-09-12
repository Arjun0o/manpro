import React from 'react';
import styles from './ProjectDetails.module.css';


const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <div className={styles.card}>
                <h3 className={styles.title}>Project Title -{id}</h3>
                <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quo quisquam perspiciatis eaque placeat ad hic, ipsum quis iusto omnis amet enim, consectetur dolor qui vero ipsa. Maiores, corporis nesciunt?</p>
                <div className={styles.footer}>
                    <p>Posted by Thor</p>
                    <p>12th September,2019</p>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;