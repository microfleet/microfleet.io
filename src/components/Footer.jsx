import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import {
  colors, fonts, dimensions, media,
} from '../theme'
import githubIcon from '../static/github.svg'

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
    padding: `25px ${dimensions.padding.horizontal}px`,
    paddingBottom: 0,
  },
  navLinkContainer: {
    margin: 0,
    marginRight: 10,
  },
  navLink: {
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: fonts.size.xxs,
    fontWeight: fonts.weight.medium,
  },
  navigationMenu: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
  },
  c: {
    fontFamily: fonts.family.main,
    color: colors.white,
    fontSize: fonts.size.xxs,
    fontWeight: fonts.weight.medium,
  },
  [media.lessThan('medium')]: {
    navigationMenu: {
      flexDirection: 'column',
      textAlign: 'center',
      width: '100%',
    },
    navLinkContainer: {
      margin: 10,
    },
  },
}

const NavLink = ({ to, children }) => (
  <p style={styles.navLinkContainer}>
    <Link to={to} style={styles.navLink}>
      {children}
    </Link>
  </p>
)

const FooterComponent = ({ menuItems, classes }) => (
  <div className={classes.container}>
    <div className={classes.contentContainer}>
      <div className={classes.navigationMenu}>
        {
          menuItems.map((item) => (
            <div className={classes.navLinkContainer} key={item.route}>
              <NavLink to={item.route} key={item.title}>{item.title}</NavLink>
            </div>
          ))
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
)

export const Footer = injectSheet(styles)(FooterComponent)
