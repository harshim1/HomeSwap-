import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './SiteNav.css';

function SiteNav(props) {
  const handleLogout = () => {
    props.logOut();
  };

  return (
    <header>
      <Navbar expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./download.png" // Adjusted src path to correctly point to download.png
              width="150"
              height="50"
              alt="Airbnb Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto">
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              {/* Add additional Nav components here */}
              <Nav.Link as={Link} to="/stays">Stays</Nav.Link>
              <Nav.Link as={Link} to="/experiences">Experiences</Nav.Link>
              <Nav.Link as={Link} to="/airbnb-your-home">Airbnb Your Home</Nav.Link>
              {/* Adjust styling if needed for buttons */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default SiteNav;
