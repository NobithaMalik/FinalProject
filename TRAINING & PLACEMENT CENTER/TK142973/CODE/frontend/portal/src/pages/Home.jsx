import { useEffect } from "react";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import CollegeLogo from "../assets/cvr_logo.png";
import CollegeBg from "../assets/college.jpg";
import Officer from "../assets/officer.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/utils/Footer";

export default function Home() {
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  return (
    <>
      <Container fluid style={{ background: "powderblue" }}>
        <Row>
          <Row>
            <Col lg={3}>
              <img
                src={CollegeLogo}
                alt="college logo"
                style={{
                  marginLeft:'35%',
                  width: "10rem",
                  height: "12rem",
                }}
              />
            </Col>
            <Col lg={9}>
              <h3 className="text-dark display-4 fw-bold" style={{fontSize:'40px'}}>
                <marquee behavior="slide" direction="left">CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY</marquee>
              </h3>
              <h3 className="text-dark text-center display-4 fw-bold" style={{fontSize:'35px',marginTop:'2%',paddingLeft:'40px'}}>
                PLACEMENTS & TRAINING CENTER
              </h3>
            </Col>
          </Row>
        </Row>
        <Row className="mt-2">
          <Col lg={8}>
            <Card style={{ width: "50rem", height: "inherit" }}>
              <Card.Img src={CollegeBg} />
              <Card.ImgOverlay>
                <Card.Text className="text-light">
                  <Card.Text className="mt-5 pt-5 fst-italic">
                    
                  </Card.Text>

                  <Card.Text className="mt-1 fst-italic">
                    
                  </Card.Text>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col lg={4} className="mt-5 me-ms-auto">
            <div className="vstack gap-3 w-75 me-auto ms-auto mt-5">
              <h5 className="display-5">Login As</h5>
              <Link className="btn btn-outline-dark" to="/login">
                Admin
              </Link>
              <Link className="btn btn-outline-dark" to="/login">
                Student
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={6}>
            <Card>
              <Row>
                <Col lg={4}>
                  <Card.Img src={Officer}></Card.Img>
                </Col>
                <Col lg={8}>
                  <Card.Body>
                    <Card.Title>Mr. Y. Sreedhar, M.Tech </Card.Title>
                    <Card.Text>
                      Assistant Professor - Training & Placement Officer
                    </Card.Text>
                    <Card.Text>Mobile Number - +91 9963855537</Card.Text>
                    <Card.Text>Landline Number - 08414 661 663</Card.Text>
                    <Card.Text>Email id - tpo@cbit.edu.in</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-center display-6">
                  Placements
                </Card.Title>
                <hr />
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item action>2021</ListGroup.Item>
                    <ListGroup.Item action>2020</ListGroup.Item>
                    <ListGroup.Item action>2019</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
      <div className="bg-light text-center">
        <p className="fs-3 text-muted">
          Placement & Training Center {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}
