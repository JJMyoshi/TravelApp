// HeaderContainer.jsx

import React from 'react';
import styles from './container.module.css';

function HeaderContainer({ children }) {
  return (
    <div className={styles.headerContainer}>
     <button className={styles.header_innerContainer_LEFT}>BACK</button>
      <div className={styles.header_innerContainer_MIDDLE}>{children}</div>
      <div className={styles.header_innerContainer_RIGHT}>BACK</div>
    </div>
  );
}

export default HeaderContainer;
