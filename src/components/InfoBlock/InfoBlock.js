import React from 'react';

import { colors, fonts, dimensions } from '../../theme';

const styles = {
  container: bgColor => ({
    height: 440,
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
  }),
  contentContainer: alignTextRight => ({
    width: '100%',
    maxWidth: dimensions.maxWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: alignTextRight ? 'flex-end' : 'flex-start',
    margin: 'auto',
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

};

export const InfoBlock = ({
  title,
  subtl,
  desc,
  bgColor,
  alignTextRight,
}) => (
  <div style={styles.container(bgColor)}>
    <div style={styles.contentContainer(alignTextRight)}>
      <div style={styles.textContainer}>
        <h5 style={styles.title}>{title}</h5>
        <p style={styles.subtl}>{subtl}</p>
        <p style={styles.desc}>{desc}</p>
      </div>
    </div>
  </div>
);

InfoBlock.defaultProps = {
  bgColor: colors.white,
};

export default InfoBlock;
