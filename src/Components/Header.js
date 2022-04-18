import React from 'react';
import { Navbar, Dropdown} from 'react-bootstrap';
import logo from '../assets/gec.jpeg'
import './Header.css';


function Header(props) {
  return (
    <>
      <div className='navbar'>
        <div className="header">
          <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
          </Navbar.Brand>
        </div>
        <div className='navbar-container'>
          <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Login As
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                          <Dropdown.Item href="#" onClick={() => props.setModalShow(true)}>NGO</Dropdown.Item>
                          <Dropdown.Item href="#">Donor</Dropdown.Item>
                      </Dropdown.Menu>
            </Dropdown>
        </div>

      </div>
    </>
  );
}

export default Header;
