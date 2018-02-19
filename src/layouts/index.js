import React from 'react';
import Link from 'gatsby-link';

const ListLink = props =>
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>;

export default ({ children }) =>
  <div style={{ margin: '0 auto', maxWidth: 950, padding: '1.25rem 1rem' }}>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline' }}>Microfleet</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/">Intro</ListLink>
        <ListLink to="/about/">Docs</ListLink>
        <ListLink to="/contact/">Community</ListLink>
        <ListLink to="/expertise/">Expertise</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children()}
  </div>;
