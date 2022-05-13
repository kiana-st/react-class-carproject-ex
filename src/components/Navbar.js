import React from 'react';
import styles from './navbar.module.css';
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to='/'>Home Page</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/products/us'>About Us</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>


                </ul>
            </div>
            <div className={styles.logo}>
                <img src={logo} className={styles.img_logo} alt="LOGO"/>
            </div>
        </header>
    )
}

export default Navbar