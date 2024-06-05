import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import Navigation from "../../components/Nav/Navigation";
import JobApi from "../../api/JobApi";
import TrainingApi from "../../api/TrainingApi";

export default function Adminstration(props) {
  const [isJob, setJob] = useState(true);
  const [isTraining, setTraining] = useState(true);

  return (
    <Container fluid style={{ background: "powderblue" }}>
      <Row>
        <Navigation admin />
      </Row>
      <Row className="mt-5 text-center">
        <Col lg={3}></Col>
        <Col lg={3}>
          <Button
            className="mb-3 w-100"
            onClick={() => {
              setJob(!isJob);
            }}
          >
            Add Job
          </Button>
        </Col>
        <Col lg={3}>
          <Button
            className="w-100"
            onClick={() => {
              setTraining(!isTraining);
            }}
          >
            Add Training
          </Button>
        </Col>
      </Row>

      <AddJob
        show={isJob}
        onHide={() => {
          setJob(false);
        }}
      />

      <AddTraining
        show={isTraining}
        onHide={() => {
          setTraining(false);
        }}
      />
    </Container>
  );
}

function AddJob(props) {
  const [success, setSuccess] = useState(false);

  const handleAddJob = (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    data["date"] = new Date().toLocaleDateString();
    JobApi.addJob(data).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          e.target.reset();
        }, 3000);
      }
    });
  };

  return (
    <Card hidden={props.show}>
      <Card.Body>
        <Alert show={success} variant="success">
          Job Posted Succesfully
        </Alert>
        <Form onSubmit={handleAddJob}>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Job Title" name="title" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Required SkillSet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Required SkillSet"
                name="skills"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Job Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job Company"
                name="company"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Job City</Form.Label>
              <Form.Control type="text" placeholder="Job City" name="city" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Required Cgpa</Form.Label>
              <Form.Control
                type="number"
                placeholder="Required Cgpa"
                name="requiredCgpa"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Job Type</Form.Label>
              <Form.Control type="text" placeholder="Job Type" name="type" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>CTC</Form.Label>
              <Form.Control type="number" placeholder="CTC" name="ctc" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>About Job</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="About Job"
                name="about"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Button variant="primary" type="submit" className="w-100 mt-2">
                Submit
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

function AddTraining(props) {
  const [success, setSuccess] = useState(false);

  const handleAddTraining = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    TrainingApi.addTraining(data).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          e.target.reset();
        }, 3000);
      }
    });
  };

  return (
    <Card hidden={props.show} className="text-center">
      <Card.Body>
        <Alert show={success}>Training Added Succesfully</Alert>
        <Form onSubmit={handleAddTraining}>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Training Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Training Subject"
                name="subject"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Training Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Training Title"
                name="title"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Training Date</Form.Label>
              <Form.Control type="date" placeholder="Job Type" name="date" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Descritpion</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descritpion"
                name="description"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Button variant="primary" type="submit" className="w-100 mt-2">
                Submit
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
