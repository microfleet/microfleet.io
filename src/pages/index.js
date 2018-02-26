import React from 'react';
import Link from 'gatsby-link';

import InfoBlock from '../components/InfoBlock';
import { colors, fonts, dimensions } from '../theme';
import mainImage from '../static/main-image.png';
import { MAIN } from '../config/content';

const styles = {
  root: {
    overflow: 'hidden',
    position: 'relative',
  },
  bgImage: {
    position: 'absolute',
    width: '67%',
    minWidth: 1050,
    right: -50,
    zIndex: 0,
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
    padding: '40px 0',
  },
  mainContentTextContainer: {
    width: 380,
    paddingTop: 60,
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
};

export default () => (
  <div style={styles.root}>
    <img src={mainImage} style={styles.bgImage} alt="" />
    {/* eslint-disable max-len */}
    <div style={styles.mainContentBg}>
      <div
        style={{
          ...styles.blockContainer,
          backgroundColor: colors.mainColor,
        }}
      >
        <div style={styles.mainContentTextContainer}>
          <h1 style={styles.text}>
            Microfleet Fastlane to the market
          </h1>
          <p style={{ ...styles.text, opacity: 0.7 }}>
            Opinionated framework with simple, flexible, scalable and resilent prebuilt microservices that glue together like lego blocks.
          </p>
          <Link to="/" style={styles.buttonLink}>
            Get started
          </Link>
        </div>
      </div>
    </div>
    <InfoBlock
      title="Resilient"
      subtl="Consists of several blocks"
      desc="If one of them crushes the others continue working. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    />
    <InfoBlock
      title="Scalable"
      subtl="Clone blocks boosting"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet"
      bgColor={colors.grey.light}
      alignTextRight
    />
    <InfoBlock
      title="Simple"
      subtl="Readable code, small  functional scope"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem"
    />
    <div style={styles.codeBlockBg}>
      <div style={styles.blockContainer}>
        <h3>
          Code example
        </h3>
        <p style={styles.darkText}>
          Use attributes from other resources to create an infrastructure composed of resources across multiple providers.
        </p>
        <pre style={styles.codeBlock}>
          {`
    http localhost:3000/mservice/add

    HTTP/1.1 400 Bad Request
    Connection: keep-alive
    Date: Mon, 22 May 2017 21:11:32 GMT
    Transfer-Encoding: chunked
    cache-control: no-cache
    content-encoding: gzip
    content-type: application/json; charset=utf-8
    vary: accept-encoding

    {
        "error": "Bad Request",
        "message": "add validation failed: data should be array",
        "name": "ValidationError",
        "statusCode": 400
    }
          `}
        </pre>
        <p style={styles.darkText}>
          The intro contains a walkthrough guide, introductory literature, and a range of examples to experiment with Microfleet.
        </p>
        <Link to="/" style={styles.buttonLink}>
          Get started
        </Link>
      </div>
    </div>
    <div style={styles.blockContainer}>
      <p style={styles.customersText}>
        Some of our customers
      </p>
      <div style={styles.customers}>
        {
          MAIN.customers.map(customer => (
            <div style={styles.customerContainer} key={customer}>
              <img src={customer} style={styles.customer} alt="" />
            </div>
          ))
        }
      </div>
    </div>
    {/* eslint-enable max-len */}
  </div>
);
