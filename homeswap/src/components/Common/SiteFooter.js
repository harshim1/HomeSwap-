import React from 'react';
import Container from 'react-bootstrap/Container';
import './SiteFooter.css'; // Import CSS file for styling

function SiteFooter() {
    return (
        <footer className="custom-footer">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">© Airbnb 2024</p>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="#">Site Map</a></li>
                        <li className="list-inline-item"><a href="#">Support</a></li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}

export default SiteFooter;
