import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <div>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.logo}>ManPro</Link>
                {links}
            </nav>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
