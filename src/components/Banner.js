import React from 'react';
import styles from './banner.module.css';
import banner from '../images/mountain.jpg';

function Banner() {
  return (
    <div className={styles.container}>
        <img src={banner}/>
        <div className={styles.textContainer}>
            <h1>shadzi</h1>
            <p>we're learning <span>React.js</span></p>
        </div>
    </div>
  )
}

export default Banner
