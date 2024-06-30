import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {
    return (
        <header>

        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
            <Navbar.Brand href="#home" image src='image.jpg'>
                <img
                src="image.jpg"
                width="70"
                height="30"
                className="d-inline-block align-top"
                alt="Airbnb logo"
                />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        </header>
    )
}

export default SiteNav;
