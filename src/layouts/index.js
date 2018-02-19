import React from 'react';
import { GoogleFont } from 'react-typography';

import typography from '../utils/typography';
import Header from '../components/Header';

export default ({ children }) => (
  <div>
    <GoogleFont typography={typography} />
    <Header />
    {children()}
  </div>
);
