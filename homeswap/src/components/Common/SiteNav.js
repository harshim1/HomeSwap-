import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './SiteNav.css';

function SiteNav({ logOut }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [shouldReload, setShouldReload] = useState(true); // State to control reloading

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
        setEmail(currentUser.attributes.email);
      } catch (error) {
        setIsAuthenticated(false);
        setEmail('');
      }
    };

    checkAuthState(); // Check auth state when component mounts
  }); 
  const handleLogout = async () => {
    await logOut(); // Call logOut function passed from props
    setIsAuthenticated(false); // Update auth state on logout
    setShouldReload(true); // Allow reload on next login
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
              {isAuthenticated ? (
                <>
                  <Nav.Link>Hello, {email}</Nav.Link>
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
