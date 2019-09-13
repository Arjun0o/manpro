import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Links.module.css';

function SignedOutLinks() {
    return (
        <div>
            <ul className={styles.list}>
                <li><NavLink to='/signup' className={styles.listItem}>Sign up</NavLink></li>
                <li><NavLink to='/signin' className={styles.listItem}>Sign in</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks;