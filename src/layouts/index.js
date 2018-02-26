import React from 'react';
import { GoogleFont } from 'react-typography';

import typography from '../config/typography';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { MENU } from '../config/content';

export default ({ children }) => (
  <div>
    <GoogleFont typography={typography} />
    <Header menuItems={MENU} />
    {children()}
    <Footer menuItems={MENU} />
  </div>
);
