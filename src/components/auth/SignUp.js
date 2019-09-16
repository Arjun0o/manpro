import React, { Component } from 'react';
import styles from './form.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authAction';


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
        this.props.signUp(this.state);
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
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
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);