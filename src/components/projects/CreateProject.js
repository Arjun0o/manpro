import React, { Component } from 'react';
import styles from '../auth/form.module.css';

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
        console.log(this.state);
    }
    render() {
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
                <button className={styles.btn}>Login</button>
            </form >
        )
    }
}
export default CreateProject;