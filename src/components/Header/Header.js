import React from 'react';
import MediaQuery from 'react-responsive';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

import { media } from '../../theme';

export const Header = props => (
  <div>
    <MediaQuery query={media.greaterThan('medium', { dropPrefix: true })}>
      <HeaderDesktop {...props} />
    </MediaQuery>
    <MediaQuery query={media.lessThan('medium', { dropPrefix: true })}>
      <HeaderMobile {...props} />
    </MediaQuery>
  </div>
);

export default Header;
