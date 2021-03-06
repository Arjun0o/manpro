import React from 'react';
import styles from './ProjectDetails.module.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';


const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return (
            <div>
                <div className={styles.card}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.text}>{project.content}</p>
                    <div className={styles.footer}>
                        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                        <p>{moment(project.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.error}>
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
        project: project,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);