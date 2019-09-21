import React from 'react'
import injectSheet from 'react-jss'

import { colors } from '../theme'
import { Layout } from '../components/Layout'

const styles = {
  root: {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
    color: colors.mainColor,
  },
}

const ContactPage = ({ classes }) => (
  <Layout>
    <div className={classes.root}>
      <h1 className={classes.text}>Work in progress</h1>
    </div>
  </Layout>
)

export default injectSheet(styles)(ContactPage)
