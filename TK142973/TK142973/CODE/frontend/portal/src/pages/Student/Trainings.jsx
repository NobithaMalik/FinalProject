import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Alert,
  Card,
  Form,
} from "react-bootstrap";
import Navigation from "../../components/Nav/Navigation";
import TrainingApi from "../../api/TrainingApi";
import { useEffect } from "react";
import UserApi from "../../api/UserApi";

export default function Trainings() {
  const [trainings, setTrainings] = useState([]);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [single, setSingle] = useState({});
  const [open, setOpen] = useState(false);

  function getData() {
    TrainingApi.getAllTrainings().then((res) => {
      if (res.status === 200 || res.status === 201) {
        setTrainings(res.data);
      }
    });
  }

  useEffect(getData, []);


  const [resume, setResume] = useState(null);

const handleResume = (e) => {
  const file = e.target.files[0]; // Get the selected file from the input
  setResume(file); // Set the selected file in the state
};


  const handleEnroll = (singleJob) => {
    const user = JSON.parse(localStorage.getItem("user"));

 
      UserApi.applyIntern(user._id,singleJob._id, {
        resume
      }).then((res) => {
        alert("applied Success")
      });
   
  };

  return (
    <Container fluid style={{ background: "powderblue" }}>
      <Row>
        <Navigation />
      </Row>
      <Row className="mt-5">
        <Alert show={error} variant="danger">
          Already Enrolled For This Training
        </Alert>
        <Alert show={success} variant="success">
          Successfully Enrolled For Training
        </Alert>
        <Table hover border variant="light">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Training Title</th>
              <th>Training Subject</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{training.title}</td>
                  <td>{training.subject}</td>
                  <td>{training.date}</td>
                  <td>
                    <Row>
                      <Col lg={4}>
                        <Button
                          variant="info"
                          onClick={() => {
                            setSingle(training);
                            setOpen(!open);
                          }}
                        >
                          Details
                        </Button>
                      </Col>
                      <Col lg={4}>
                        <div className=" flex">

                        <input type="file" name="resume" id="" onChange={handleResume} />
                        <Button
                          variant="warning"
                          onClick={() => {
                            handleEnroll(training);
                          }}
                        >
                          Enroll
                        </Button>
                        </div>
                      </Col>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Row hidden={!open}>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Training Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Training Subject"
                        value={single.subject}
                        readOnly
                        name="subject"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Training Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={single.title}
                        readOnly
                        placeholder="Training Title"
                        name="title"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Training Date</Form.Label>
                      <Form.Control
                        type="date"
                        readOnly
                        value={single.date}
                        placeholder="Job Type"
                        name="date"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Descritpion</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        readOnly
                        value={single.description}
                        placeholder="Descritpion"
                        name="description"
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Row>
    </Container>
  );
}
