import React from 'react';
import Link from 'gatsby-link';

import styles from './Header.style';

export default props => (
  <p style={styles.navLinkContainer}>
    <Link to={props.to} style={styles.navLink}>
      {props.children}
    </Link>
  </p>
);
