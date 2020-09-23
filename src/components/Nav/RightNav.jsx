import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

// import Nav from './Nav';
// import Users from '../Users/Users';
// import Register from '../Register/Register';
// import Home from '../Home/Home';

// TROUVER COMMENT ALIGNER LE HEADER dans le css \\

const Ul = styled.ul` 
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li, Link{
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

// TROUVER COMMENT ALIGNER LE HEADER \\

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <Router>
                {/* <Nav /> */}
                <div>
                    <nav>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Users">Utilisateurs</Link></li>
                        <li><Link to="/Register">Inscription</Link></li>
                        {/* <li>Sign In</li>
                        <li>Sign Up</li> */}
                    </nav>
                </div>
            </Router>
        </Ul>
    )
}

export default RightNav