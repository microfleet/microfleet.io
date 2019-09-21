import React from 'react'
import MediaQuery from 'react-responsive'

import { HeaderDesktop } from './Desktop'
import { HeaderMobile } from './Mobile'

import { media } from '../../theme'

export const Header = (props) => (
  <div>
    <MediaQuery query={media.greaterThan('medium', { dropPrefix: true })}>
      <HeaderDesktop {...props} />
    </MediaQuery>
    <MediaQuery query={media.lessThan('medium', { dropPrefix: true })}>
      <HeaderMobile {...props} />
    </MediaQuery>
  </div>
)
