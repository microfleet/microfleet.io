import React from 'react';
import injectSheet from 'react-jss';

import { colors } from '../theme';

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
};

const ExpertisePage = ({ classes }) => (
  <div className={classes.root}>
    <h1 className={classes.text}>Work in progress</h1>
  </div>
);

export default injectSheet(styles)(ExpertisePage);
