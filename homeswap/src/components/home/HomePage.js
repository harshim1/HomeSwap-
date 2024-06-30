import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage()
{
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <h1>
                        Airbnb Clone
                    </h1>
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage;