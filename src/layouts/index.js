import React from 'react';

import Header from '../components/Header';

export default ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 950, padding: '1.25rem 1rem' }}>
    <Header />
    {children()}
  </div>
);
