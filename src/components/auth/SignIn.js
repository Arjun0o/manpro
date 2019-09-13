import React, { Component } from 'react';
import styles from './form.module.css';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
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
                <h3 className={styles.title}>Sign In</h3>
                <div className={styles.input_field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={this.handleChange} required />
                </div>
                <div className={styles.input_field}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange} pattern=".{6,}" required />
                </div>
                <button className={styles.btn}>Login</button>
            </form >
        )
    }
}
export default SignIn;