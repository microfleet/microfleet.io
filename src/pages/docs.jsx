import React from 'react'
import injectSheet from 'react-jss'

import { colors, dimensions } from '../theme'
import docsImage from '../static/docs-img.png'

const styles = {
  root: {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContentBg: {
    paddingTop: 90,
    backgroundColor: colors.mainColor,
    height: 280,
    display: 'flex',
  },
  image: {
    position: 'absolute',
    width: 670,
    top: 115,
    margin: 'auto',
    left: '50%',
    transform: 'translate(-50%)',
  },
  blockContainer: {
    width: '100%',
    maxWidth: dimensions.maxWidth,
    margin: '0 auto',
    padding: `40px ${
      dimensions.padding.horizontal
    }px 15px ${
      dimensions.padding.horizontal
    }px`,
  },
  text: {
    textAlign: 'center',
    color: colors.mainColor,
  },
}

const DocsPage = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.mainContentBg}>
      <img src={docsImage} className={classes.image} alt="" />
    </div>
  </div>
)

export default injectSheet(styles)(DocsPage)
