import React from 'react';
import styles from './ProjectDetails.module.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
        return (
            <div>
                <div className={styles.card}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.text}>{project.content}</p>
                    <div className={styles.footer}>
                        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                        <p>12th September,2019</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);