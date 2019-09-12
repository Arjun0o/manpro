import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Links.module.css';

function SignedOutLinks() {
    return (
        <div>
            <ul className={styles.list}>
                <li><NavLink to='/' className={styles.listItem}>Signup</NavLink></li>
                <li><NavLink to='/' className={styles.listItem}>Signin</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks;