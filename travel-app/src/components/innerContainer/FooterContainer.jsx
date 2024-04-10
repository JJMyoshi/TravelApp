// FooterContainer.jsx

import React from 'react';
import styles from './container.module.css';

function FooterContainer({ children }) {
  return (
    <div className={styles.footerContainer}>
      <button className={styles.footerButton}>Home</button>
      <button className={styles.footerButton}>Calendar</button>
      <button className={styles.footerButton}>Events</button>
      <button className={styles.footerButton}>Account</button>
    </div>
  );
}

export default FooterContainer;
