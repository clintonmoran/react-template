import React from "react";
import styles from './header.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from '../../../Images/hw_logo.svg';

const Header = () => {
  return (
    <div>
      <div className={styles.top_header}></div>
      <div className={styles.nav__container}>
        <img className={styles.nav__logo} src={logo}/>
        <nav className={styles.nav__list}>
          <ul>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} to="/">Home</Link>
            </li>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} to="/about">About</Link>
            </li>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} to="/hooks">Hooks</Link>
            </li>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} to="/testing">Tests</Link>
            </li>
          </ul>
        </nav>
      </div>
     
    </div>
  );
};

export default Header;
