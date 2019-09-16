import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    console.log(props);
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
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
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
