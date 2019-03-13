import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <h1>
          <span role="img" aria-label="party">
            {' '}
            🎉
          </span>
          Isomorphic React App Boilerplate
        </h1>
      </Link>
    </div>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
