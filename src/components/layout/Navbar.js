import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.logo}>ManPro</Link>
                <SignedInLinks />
                {/* <SignedOutLinks/> */}
            </nav>
        </div>
    )
}

export default Navbar;
