import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify'; // Import Auth from aws-amplify
import './SiteNav.css';

function SiteNav({ user, logOut }) {
  const handleLogout = async () => {
    await logOut(); // Call logOut function passed from props
  };

  return (
    <header>
      <Navbar expand="lg" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="./download.png"
              width="150"
              height="50"
              alt="Airbnb Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto">
              <Nav.Link as={Link} to="/stays">Stays</Nav.Link>
              <Nav.Link as={Link} to="/experiences">Experiences</Nav.Link>
              <Nav.Link as={Link} to="/airbnb-your-home">Airbnb Your Home</Nav.Link>
              {/* Conditional rendering based on user's authentication status */}
              {user ? (
                <>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                  <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default SiteNav;
