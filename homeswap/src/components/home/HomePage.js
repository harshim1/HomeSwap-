import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, InputGroup, FormControl, Dropdown } from 'react-bootstrap';

function HomePage() {
  const [popularLocations, setPopularLocations] = useState([]);

  useEffect(() => {
    const fetchPopularLocations = async () => {
      const response = await fetch('/api/popular-locations');
      const data = await response.json();
      setPopularLocations(data);
    };

    fetchPopularLocations();
  }, []);

  return (
    <div className="homeswap-homepage">
      <header className="hero">
        <Container className="hero-content">
          <Row className="align-items-center">
            <Col md={6} className="hero-text-col">
              <h1>Discover Unique Homes Around the World</h1>
              <p>Join HomeSwap and explore new destinations while experiencing the comfort of home.</p>
              <Link to="/search" className="btn btn-warning hero-btn">
                Explore Homes
              </Link>
            </Col>
            <Col md={6} className="hero-image-col">
              <Image
                src="./hero.png"
                alt="Hero Image"
                width="850"
                height="550"
              />
            </Col>
          </Row>
        </Container>
      </header>

      <section className="search-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <InputGroup className="search-bar mb-3">
                <FormControl
                  placeholder="Where do you want to stay?"
                  className="search-control"
                />
                <Dropdown as={InputGroup.Append}>
                  <Dropdown.Toggle as={InputGroup.Text} variant="light">
                    Date
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Select Dates</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={InputGroup.Append}>
                  <Dropdown.Toggle as={InputGroup.Text} variant="light">
                    Guests
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">1 Guest</Dropdown.Item>
                    <Dropdown.Item href="#">2 Guests</Dropdown.Item>
                    <Dropdown.Item href="#">More Guests</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link to="/search" className="btn btn-warning search-btn">
                  Search
                </Link>
              </InputGroup>
            </Col>
            <Col md={4} className="text-end">
              <p className="discover-more">
                Discover more: <Link to="/experiences">Experiences</Link> & <Link to="/about-us">About Us</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="why-choose-us py-5">
        <Container>
          <h2>Why Choose HomeSwap?</h2>
          <Row>
            <Col md={4}>
              <i className="bi bi-key text-warning fs-2 mb-3"></i>
              <h3>Unlock Unique Stays</h3>
              <p>Find unforgettable places to stay from homes to cabins and everything in between.</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-globe text-warning fs-2 mb-3"></i>
              <h3>Explore the World</h3>
              <p>Live like a local in any corner of the world. Discover hidden gems and new experiences.</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-people-circle text-warning fs-2 mb-3"></i>
              <h3>Connect with People</h3>
              <p>Be part of a global community. Meet new people and create lasting memories.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="popular-locations py-5">
        <Container>
          <h2>Explore Popular Locations</h2>
          <Row className="justify-content-center">
            {popularLocations.map((location, index) => (
              <Col sm={4} key={index} className="mb-3">
                <Link to={`/locations/${location.slug}`} className="location-link d-block">
                  <Image src={location.image} alt={location.name} rounded fluid className="location-image" />
                  <p className="location-name mt-2">{location.name}</p>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="call-to-action text-center py-5">
        <Container>
          <h2>Ready to Start Your Adventure?</h2>
          <Link to="/search" className="btn btn-warning call-to-action-btn">
            Explore Homes
          </Link>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;
