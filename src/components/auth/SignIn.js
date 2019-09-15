import React, { Component } from 'react';
import styles from './form.module.css';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';

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
        this.props.signIn(this.state);
    }

    render() {
        const { authError } = this.props;
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
                <div className={styles.redText}>
                    {authError ? <p>{authError}</p> : null}
                </div>
            </form >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);