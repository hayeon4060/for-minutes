<<<<<<< HEAD
import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";
// import logo from "../images/fmlogo.png";
import logo from "../images/txtlogo.svg";



function Navigation() {
    const [click,setClick] = useState(false);
    const [button,setButton]=useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    
    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }else {
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton();
    }, []);
    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" onClick={closeMobileMenu}>
                    <img
                      alt=""
                      src={logo}
                      width="110"
                      className="img-logo"
                    />                        
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/minutes" className="nav-links" onClick={closeMobileMenu}>
                            MinutesList
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
                            Post
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </>
    )
}

=======
import React from "react";
//import { Link } from "react-router-dom";
import { Heading, Text, Link, Table, Box, Container } from "gestalt";
import "gestalt/dist/gestalt.css";
import "./Navigation.css";
import logo from "../images/fmlogo.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="white" variant="light" expand="lg" sticky="top">
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                For Minutes
                {/* For Minutes 글자 보이게 수정 바람! */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end navalign"
              >
                <Navbar.Text>
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/minutes">MinutesList</Nav.Link>
                    <Nav.Link href="/post">Post</Nav.Link>
                    {/* 귀찮아서 임시로 바꿔 놓음 */}
                    {/* <NavDropdown
                      align="end"
                      title="My"
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item href="/minutes">
                        MinutesList
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/post">Post</NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
            <br />
          </Router>
        </div>
      </div>
    </div>
  );
};
>>>>>>> 2295ecacbeccc47d800bc256fcc2da17e319c44a

export default Navigation;
