import React from 'react';
import Link from 'gatsby-link';
import injectSheet from 'react-jss';

import InfoBlock from '../components/InfoBlock';
import {
  colors,
  fonts,
  dimensions,
  media,
} from '../theme';
import { MAIN } from '../config/content';

import mainImage from '../static/main-image.png';
import rocketImage from '../static/rocket.png';

const imgStyle = {
  display: 'none',
  alignSelf: 'flex-end',
  width: '40%',
  margin: 0,
};

const styles = {
  root: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  bgImage: {
    position: 'absolute',
    width: 1050,
    right: -50,
    zIndex: 0,
  },
  rocketImage: {
    ...imgStyle,
    width: '80%',
    position: 'relative',
    margin: 'auto',
    right: -100,
  },
  resilientImage: {
    ...imgStyle,
    margin: '30px 0 0 0',
  },
  scalableImage: {
    ...imgStyle,
    alignSelf: 'flex-start',
  },
  simpleImage: {
    ...imgStyle,
  },
  mainContentBg: {
    backgroundColor: colors.mainColor,
    height: 568,
    display: 'flex',
  },
  blockContainer: {
    width: '100%',
    maxWidth: dimensions.maxWidth,
    margin: '0 auto',
    padding: `40px ${dimensions.padding.horizontal}px`,
  },
  mainContentTextContainer: {
    width: 380,
    paddingTop: 60,
    position: 'relative',
    zIndex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fonts.size.m,
    fontFamily: fonts.family.main,
    marginTop: 40,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.family.main,
    marginTop: 40,
  },
  darkText: {
    color: colors.secondaryColor,
    fontSize: fonts.size.xxxs,
    maxWidth: 350,
  },
  customersText: {
    fontFamily: fonts.family.main,
    fontSize: fonts.size.s,
    color: colors.secondaryColor,
  },
  buttonLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    height: 60,
    border: `solid 2px ${colors.thirdColor}`,
    fontFamily: fonts.family.main,
    fontSize: fonts.size.xs,
    color: colors.thirdColor,
    fontWeight: fonts.weight.medium,
  },
  codeBlockBg: {
    backgroundColor: colors.grey.light,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 50,
  },
  codeBlock: {
    color: colors.white,
    backgroundColor: colors.text.main,
    lineHeight: 1.5,
    padding: 20,
  },
  customers: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  customerContainer: {
    minWidth: 0,
    marginRight: 30,
  },
  customer: {
    maxWidth: 120,
    maxHeight: 40,
  },
  [media.lessThan('medium')]: {
    bgImage: { display: 'none' },
    rocketImage: { display: 'flex' },
    resilientImage: { display: 'flex' },
    scalableImage: { display: 'flex' },
    simpleImage: { display: 'flex' },
    mainContentTextContainer: {
      width: 300,
      paddingTop: 20,
    },
    text: {
      fontSize: fonts.size.xxs,
    },
    codeBlock: {
      fontSize: fonts.size.xxs,
      padding: 10,
    },
  },
  [media.lessThan('small')]: {
    rocketImage: {
      width: '120%',
      right: -50,
    },
    codeBlock: {
      fontSize: 9,
      padding: 0,
    },
  },
  [media.between('small', 'medium')]: {
    bgImage: { right: -350 },
  },
  [media.between('medium', 'large')]: {
    bgImage: { right: -350 },
  },
  [media.between('large', 'xlarge')]: {
    bgImage: { right: -200 },
  },
  [media.greaterThan('xlarge')]: {
    bgImage: {
      right: `calc((100% - ${dimensions.maxWidth}px) / 2 - 300px)`,
    },
  },
};

const MainPage = ({ classes }) => (
  <div className={classes.root}>
    <img src={mainImage} className={classes.bgImage} alt="" />
    {/* eslint-disable max-len */}
    <div className={classes.mainContentBg}>
      <div
        style={{
          ...styles.blockContainer,
          display: 'flex',
          backgroundColor: colors.mainColor,
        }}
      >
        <div className={classes.mainContentTextContainer}>
          <h1 className={classes.title}>
            Microfleet Fastlane to the market
          </h1>
          <p className={classes.text}>
            Opinionated framework with simple, flexible, scalable and resilent
            prebuilt microservices that glue together like lego blocks.
          </p>
          <Link to="/" className={classes.buttonLink}>
            Get started
          </Link>
        </div>
        <img src={rocketImage} className={classes.rocketImage} alt="" />
      </div>
    </div>
    {
      MAIN.infoBlocks.map(({
        title, subtl, desc, image,
      }, index) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img src={image.src} className={classes[image.key]} alt="" />
          <InfoBlock
            title={title}
            subtl={subtl}
            desc={desc}
            alignTextRight={index % 2 !== 0}
          />
        </div>
      ))
    }
    <div className={classes.codeBlockBg}>
      <div className={classes.blockContainer}>
        <h3>
          Code example
        </h3>
        <p className={classes.darkText}>
          Use attributes from other resources to create an infrastructure
          composed of resources across multiple providers.
        </p>
        <pre className={classes.codeBlock}>{MAIN.codeExample}</pre>
        <p className={classes.darkText}>
          The intro contains a walkthrough guide, introductory literature,
          and a range of examples to experiment with Microfleet.
        </p>
        <Link to="/" className={classes.buttonLink}>
          Get started
        </Link>
      </div>
    </div>
    <div className={classes.blockContainer}>
      <p className={classes.customersText}>
        Some of our customers
      </p>
      <div className={classes.customers}>
        {
          MAIN.customers.map(customer => (
            <div className={classes.customerContainer} key={customer}>
              <img src={customer} className={classes.customer} alt="" />
            </div>
          ))
        }
      </div>
    </div>
    {/* eslint-enable max-len */}
  </div>
);

export default injectSheet(styles)(MainPage);
