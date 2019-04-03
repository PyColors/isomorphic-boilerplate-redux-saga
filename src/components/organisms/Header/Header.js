import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="mui-appbar mui--z1">
    <div className="mui-container">
      <table>
        <tr className="mui--appbar-height">
          <td className="mui--text-title">Isomorphic React App Boilerplate</td>
          <td className="mui--text-right">
            <ul className="mui-list--inline mui--text-body2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>

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
