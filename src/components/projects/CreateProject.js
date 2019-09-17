import React, { Component } from 'react';
import styles from '../auth/form.module.css';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';


class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <form className={styles.container} onSubmit={this.handleSubmit}>
                <h3 className={styles.title}>Create a New Project</h3>
                <div className={styles.input_field}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' onChange={this.handleChange} required />
                </div>
                <div className={styles.input_field}>
                    <label htmlFor="content">Content</label>
                    <input type="text" id='content' onChange={this.handleChange} pattern=".{6,}" required />
                </div>
                <button className={styles.btn}>Submit</button>
            </form >
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);