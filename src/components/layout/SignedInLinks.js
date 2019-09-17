import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Links.module.css';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';
function SignedInLinks(props) {
    return (
        <div>
            <ul className={styles.list}>
                <li><NavLink to='/create' className={styles.listItem}>New Project</NavLink></li>
                <li><a onClick={props.logOut} className={styles.listItem}>SignOut</a></li>
                <li><NavLink to='/' className={styles.name}>{props.profile.initials}</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
