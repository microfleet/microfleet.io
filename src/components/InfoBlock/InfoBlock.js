import React from 'react';
import injectSheet from 'react-jss';

import {
  colors,
  fonts,
  dimensions,
  media,
} from '../../theme';

const styles = {
  container: props => ({
    height: 440,
    backgroundColor: props.bgColor,
    display: 'flex',
    alignItems: 'center',
  }),
  contentContainer: props => ({
    width: '100%',
    maxWidth: dimensions.maxWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: props.alignTextRight ? 'flex-end' : 'flex-start',
    margin: 'auto',
    padding: `0 ${dimensions.padding.horizontal}px`,
  }),
  textContainer: {
    width: 280,
  },
  title: {
    fontSize: fonts.size.s,
    color: colors.text.main,
  },
  subtl: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.main,
    color: colors.text.secondary,
  },
  desc: {
    fontFamily: fonts.family.secondary,
    fontSize: fonts.size.xxs,
    lineHeight: 1.7,
    color: colors.text.secondary,
  },
  [media.lessThan('medium')]: {
    title: {
      marginTop: -50,
    },
    container: () => ({
      height: 340,
      backgroundColor: colors.white,
    }),
  },
};

const InfoBlock = ({
  classes,
  title,
  subtl,
  desc,
}) => (
  <div className={classes.container}>
    <div className={classes.contentContainer}>
      <div className={classes.textContainer}>
        <h5 className={classes.title}>{title}</h5>
        <p className={classes.subtl}>{subtl}</p>
        <p className={classes.desc}>{desc}</p>
      </div>
    </div>
  </div>
);

InfoBlock.defaultProps = {
  bgColor: colors.white,
};

export default injectSheet(styles)(InfoBlock);
