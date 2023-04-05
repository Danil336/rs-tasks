import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header_content">
        <ul className="header_list">
          <li className="header_li">
            <NavLink to={'/'}>Main page</NavLink>
          </li>
          <li className="header_li">
            <NavLink to={'/about'}>About us</NavLink>
          </li>
          <li className="header_li">
            <NavLink to={'/myPosts'}>My posts</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
