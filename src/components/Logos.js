import React from 'react';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';

import styles from './logos.module.css';

function Logos() {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={logo1} alt="logo" />
                <img src={logo3} alt="logo" />
                <img src={logo2} alt="logo" />
            </div>

        </div>
    )
}

export default Logos