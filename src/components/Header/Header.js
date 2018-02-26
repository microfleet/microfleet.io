import React from 'react';
import Link from 'gatsby-link';

import { colors, fonts, dimensions } from '../../theme';

const styles = {
  container: {
    height: 90,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    width: '100%',
    maxWidth: dimensions.maxWidth,
  },
  logo: {
    display: 'inline',
    color: colors.white,
  },
  navLinkContainer: {
    margin: 0,
    marginRight: 25,
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

export default ({ menuItems }) => (
  <div style={styles.container}>
    <div style={styles.contentContainer}>
      <Link to="/">
        <h3 style={styles.logo}>Microfleet</h3>
      </Link>
      <div style={styles.navigation}>
        {
          menuItems.map(item =>
            <ListLink to={item.route} key={item.title}>{item.title}</ListLink>)
        }
      </div>
    </div>
  </div>
);
