import React from 'react';
import Link from 'gatsby-link';

import { colors, fonts, dimensions } from '../../theme';
import githubIcon from '../../static/github.svg';

const styles = {
  container: {
    backgroundColor: colors.text.main,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    height: 70,
    maxWidth: dimensions.maxWidth,
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
  c: {
    fontFamily: fonts.family.main,
    color: colors.white,
    fontSize: fonts.size.xxxs,
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
      <div style={styles.navigation}>
        {
          menuItems.map(item =>
            <ListLink to={item.route} key={item.title}>{item.title}</ListLink>)
        }
      </div>
    </div>
    <div style={styles.contentContainer}>
      <div style={styles.navigation}>
        <a href="https://github.com/microfleet/core" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} style={{ width: 24 }} alt="Github" />
        </a>
      </div>
      <p style={styles.c}>{`${(new Date()).getFullYear()} Microfleet`}</p>
    </div>
  </div>
);
