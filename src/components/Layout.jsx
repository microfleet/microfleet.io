import * as React from 'react'
import { GoogleFont } from 'react-typography'

import typography from '../config/typography'
import { Header } from './Header'
import { Footer } from './Footer'

import { MENU } from '../config/content'

export const Layout = ({ children }) => (
  <div>
    <GoogleFont typography={typography} />
    <Header menuItems={MENU} />
    {children}
    <Footer menuItems={MENU} />
  </div>
)
