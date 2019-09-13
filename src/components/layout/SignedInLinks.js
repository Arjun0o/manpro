import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Links.module.css';

function SignedInLinks() {
    return (
        <div>
            <ul className={styles.list}>
                <li><NavLink to='/create' className={styles.listItem}>Project</NavLink></li>
                <li><NavLink to='/' className={styles.listItem}>SignOut</NavLink></li>
                <li><NavLink to='/' className={styles.name}>NN</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks
