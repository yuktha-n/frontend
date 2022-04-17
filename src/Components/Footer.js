import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='social-container'>
        <div className='social-container-row'>
            <a href="https://www.instagram.com/yuktha_naveen"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="mailto:giveethcare@gmail.com"
                className="gmail social">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
        </div>
        <div className='website-rights'>
        <small>© Copyright 2022 GEC. All rights reserved.</small>
        </div>
    </div>
  );
}

export default Footer;