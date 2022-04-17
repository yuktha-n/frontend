import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEthereum,
    faGratipay
  } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <>
      <div className='navbar'>
        <div className="header">
            {/* <Link to='/home'>
                    <FontAwesomeIcon icon={faGratipay} size="3x" />
            </Link> */}
            <h2>GEC</h2>
        </div>
        <div className='navbar-container'>
              <Link to='/sign-up'>
                <Button buttonStyle='btn--outline'>SIGN UP</Button>
              </Link>
        </div>
      </div>
    </>
  );
}

export default Header;