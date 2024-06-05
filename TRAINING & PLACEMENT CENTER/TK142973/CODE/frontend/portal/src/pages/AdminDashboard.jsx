import { Carousel, Container, Row } from "react-bootstrap";
import Navigation from "../components/Nav/Navigation";
import Placement from "../assets/Placement.jpg";
import Placement_1 from "../assets/placement_1.jpeg";

export default function AdminDashboard(props) {
  return (
    <Container fluid>
      <Row>
        <Navigation admin />
      </Row>
      <Row>
        <Carousel>
          <Carousel.Item>
            <img src={Placement} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Placement_1} alt="" />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <h1 className="display-1 text-center">Welcome To DashBoard Admin</h1>
      </Row>
    </Container>
  );
}
