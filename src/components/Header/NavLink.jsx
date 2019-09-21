import React from 'react'
import Link from 'gatsby-link'

import styles from './styles'

export const HeaderNavLink = ({ to, handleClick, children }) => (
  <p style={styles.navLinkContainer}>
    <Link to={to} style={styles.navLink} onClick={handleClick}>
      {children}
    </Link>
  </p>
)
