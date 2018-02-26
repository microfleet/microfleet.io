import React from 'react';
import MediaQuery from 'react-responsive';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export const Header = props => (
  <div>
    <MediaQuery query="(min-width: 801px)">
      <HeaderDesktop {...props} />
    </MediaQuery>
    <MediaQuery query="(max-width: 800px)">
      <HeaderMobile {...props} />
    </MediaQuery>
  </div>
);

export default Header;
