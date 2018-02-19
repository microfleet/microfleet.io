import React from 'react';
import Link from 'gatsby-link';

import { colors, fonts } from '../../styles/theme';
import classNames from './Header.module.css';

const styles = {
  container: {
    height: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.mainColor,
    margin: 'auto',
  },
  logo: {
    display: 'inline',
    color: colors.white,
  },
  navLinkContainer: {
    margin: 0,
    marginRight: 20,
  },
  navLink: {
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: fonts.size.xxs,
  },
  navigation: {
    display: 'flex',
  },
};

const ListLink = props => (
  <p style={styles.navLinkContainer}>
    <Link to={props.to} style={styles.navLink}>
      {props.children}
    </Link>
  </p>
);

export default () => (
  <div
    className={classNames.container}
    style={styles.container}
  >
    <Link to="/">
      <h3 style={styles.logo}>Microfleet</h3>
    </Link>
    <div style={styles.navigation}>
      <ListLink to="/">Intro</ListLink>
      <ListLink to="/about/">Docs</ListLink>
      <ListLink to="/contact/">Community</ListLink>
      <ListLink to="/expertise/">Expertise</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </div>
  </div>
);
