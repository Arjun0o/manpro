import React, { Component } from 'react';
import styles from './form.module.css';


class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
                <h3 className={styles.title}>Sign Up</h3>
                <div className={styles.input_field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={this.handleChange} required />
                </div>
                <div className={styles.input_field}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange} pattern=".{6,}" required />
                </div>
                <div className={styles.input_field}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' onChange={this.handleChange} required />
                </div>
                <div className={styles.input_field}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' onChange={this.handleChange} required />
                </div>
                <button className={styles.btn}>Sign UP</button>
            </form >
        )
    }
}
export default SignUp;