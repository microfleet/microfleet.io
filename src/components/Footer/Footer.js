import React from 'react';
import Link from 'gatsby-link';
import injectSheet from 'react-jss';

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
    maxWidth: dimensions.maxWidth,
    padding: `10px ${dimensions.padding.horizontal}px`,
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
  navigationMenu: {
    display: 'flex',
    flexDirection: 'row',
    // padding: '20px 0',
  },
  c: {
    fontFamily: fonts.family.main,
    color: colors.white,
    fontSize: fonts.size.xxxs,
  },
  [dimensions.media.mobile]: {
    navigationMenu: {
      flexDirection: 'column',
    },
  },
};

const NavLink = props => (
  <p style={styles.navLinkContainer}>
    <Link to={props.to} style={styles.navLink}>
      {props.children}
    </Link>
  </p>
);

const Footer = ({ menuItems, classes }) => (
  <div className={classes.container}>
    <div className={classes.contentContainer}>
      <div className={classes.navigationMenu}>
        {
          menuItems.map(item =>
            <NavLink to={item.route} key={item.title}>{item.title}</NavLink>)
        }
      </div>
    </div>
    <div className={classes.contentContainer}>
      <div className={classes.navigation}>
        <a href="https://github.com/microfleet/core" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} style={{ width: 24 }} alt="Github" />
        </a>
      </div>
      <p className={classes.c}>{`${(new Date()).getFullYear()} Microfleet`}</p>
    </div>
  </div>
);

export default injectSheet(styles)(Footer);
