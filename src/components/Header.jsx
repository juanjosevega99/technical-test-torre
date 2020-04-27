import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/torre.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="torre" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">ACCOUNT</a>
        </li>
        <li>
          <a href="/">SIGN OUT</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
