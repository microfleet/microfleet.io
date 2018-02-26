import React from 'react';
import Link from 'gatsby-link';

import NavLink from './NavLink';
import styles from './Header.style';

export default ({ menuItems }) => (
  <div style={styles.container}>
    <div style={styles.contentContainer}>
      <Link to="/">
        <h3 style={styles.logo}>Microfleet</h3>
      </Link>
      <div style={styles.navContainer}>
        {
          menuItems.map(item =>
            <NavLink to={item.route} key={item.title}>{item.title}</NavLink>)
        }
      </div>
    </div>
  </div>
);
