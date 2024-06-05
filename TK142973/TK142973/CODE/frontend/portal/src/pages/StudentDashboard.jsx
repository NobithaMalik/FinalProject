import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import Navigation from "../components/Nav/Navigation";
import Placement from "../assets/Placement.jpg";
import Placement_1 from "../assets/placement_1.jpeg";

export default function StudentDashboard(props) {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      setUser({ name: "Guest" });
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <h1>
      <Container fluid style={{ background: "powderblue" }}>
        <Row>
          <Navigation />
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img src={Placement} alt="placementPhoto" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Placement_1} alt="placementPhoto_1" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <h1 className="display-1 text-center">
            Welcome To DashBoard {user.name}
          </h1>
        </Row>
      </Container>
    </h1>
  );
}
