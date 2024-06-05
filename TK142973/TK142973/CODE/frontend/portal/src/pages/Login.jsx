import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentAuth from "../components/auth/StudentAuth";

export default function Login() {
  return (
    <Container fluid style={{ background: "powderblue" }}>
      <Row style={{ height: "100vh" }}>
        <Col lg={6}>
          <Card className="bg-light h-100">
            <Card.Body>
              <img src='https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-transparent-register-now-button-png-image_6369159.png' alt="Register"
              style={{
                margin:'15%',
                
              }} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <div className="mt-1">
            <Link to="/" className="btn btn-outline-dark">
              Home
            </Link>
          </div>
          <StudentAuth />
        </Col>
      </Row>
    </Container>
  );
}
