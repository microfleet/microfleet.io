import React from 'react'
import Link from 'gatsby-link'

import { HeaderNavLink } from './NavLink'
import styles from './styles'

export const HeaderDesktop = ({ menuItems }) => (
  <div style={styles.container}>
    <div style={styles.contentContainer}>
      <Link to="/">
        <h3 style={styles.logo}>Microfleet</h3>
      </Link>
      <div style={styles.navContainer}>
        {menuItems.map((item) => (
          <HeaderNavLink to={item.route} key={item.title}>{item.title}</HeaderNavLink>
        ))}
      </div>
    </div>
  </div>
)
