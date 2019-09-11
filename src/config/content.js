const cappasity = require('../static/cappasity.png');
const radioFx = require('../static/radiofx.png');
const cappasityToken = require('../static/cappasity-token.png');
const resilientImage = require('../static/resilient.png');
const scalableImage = require('../static/scalable.png');
const simpleImage = require('../static/simple.png');

export const MENU = [
  /*
  {
    title: 'Intro',
    route: '/',
  },
  {
    title: 'Docs',
    route: '/docs',
  },
  {
    title: 'Guides',
    route: '/guides',
  },
  {
    title: 'Community',
    route: '/community',
  },
  {
    title: 'Expertise',
    route: '/expertise',
  },
  {
    title: 'Contact',
    route: '/contact',
  },
   */
];

export const MAIN = {
  customers: [
    cappasity,
    radioFx,
    cappasityToken,
  ],
  infoBlocks: [
    {
      title: 'Resilient',
      subtl: 'Consists of several blocks',
      desc: 'If one of them crushes the others continue working. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
      image: {
        src: resilientImage,
        key: 'resilientImage',
      },
    },
    {
      title: 'Scalable',
      subtl: 'Clone blocks boosting',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet',
      image: {
        src: scalableImage,
        key: 'scalableImage',
      },
    },
    {
      title: 'Simple',
      subtl: 'Readable code, small  functional scope',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem',
      image: {
        src: simpleImage,
        key: 'simpleImage',
      },
    },
  ],
  codeExample: `
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
  `,
};

export default MAIN;
