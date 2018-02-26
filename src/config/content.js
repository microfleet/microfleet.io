const cappasity = require('../static/cappasity.png');
const radioFx = require('../static/radiofx.png');
const cappasityToken = require('../static/cappasity-token.png');

export const MENU = [
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
];

export const MAIN = {
  customers: [
    cappasity,
    radioFx,
    cappasityToken,
  ],
};

export default MAIN;
