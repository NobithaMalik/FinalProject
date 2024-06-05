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
import JobApi from "../../api/JobApi";
import { useEffect } from "react";
import UserApi from "../../api/UserApi";

export default function Trainings() {
  const [jobs, setJobs] = useState([]);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [msg, setMsg] = useState("");

  const [single, setSingle] = useState({});
  const [open, setOpen] = useState(false);

  function getData() {
    JobApi.getAllJobs().then((res) => {
      if (res.status === 200 || res.status === 201) {
        setJobs(res.data);
      }
    });
  }

  useEffect(getData, []);

  const [resume , setresume ] = useState('')

 const handleimage = (e) =>{
  const file = e.target.files[0]; // Get the selected file from the input
  setresume(file)
 }
  
  const handleEnroll = (singleJob) => {
    console.log(singleJob)
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.cgpa < singleJob.requiredCgpa) {
      setMsg("Your CGPA is less than required CGPA");
      setError(true);
      return;
    }
    



      UserApi.applyForJob(user._id,singleJob._id, {
          resume
        },
      ).then((res) => {
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
          {msg}
        </Alert>
        <Alert show={success} variant="success">
          Successfully Applied For Job
        </Alert>
        <Table hover border variant="light">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Job Title</th>
              <th>Job Skills</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{job.title}</td>
                  <td>{job.skills}</td>
                  <td>{job.date}</td>
                  <td>
                    <Row>
                      <Col lg={4}>
                        <Button
                          variant="info"
                          onClick={() => {
                            setSingle(job);
                            setOpen(!open);
                          }}
                        >
                          Details
                        </Button>
                      </Col>
                      <Col lg={4}>
                        <div className=" flex">
                        <input type="file" name="resume" onChange={handleimage} required />
                        <Button
                          variant="warning"
                          onClick={() => {
                            handleEnroll(job);
                          }}
                        >
                          Apply
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
      </Row>
      <Row hidden={!open}>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Alert show={success} variant="success">
                Job Updated Succesfully
              </Alert>
              <Form>
                <Row>
                  <Form.Group as={Col}>
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Job Title"
                      name="title"
                      value={single.title}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Required SkillSet</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Required SkillSet"
                      name="skills"
                      value={single.skills}
                      readOnly
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
                      value={single.company}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Job City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Job City"
                      name="city"
                      value={single.city}
                      readOnly
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col}>
                    <Form.Label>Job Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Job Type"
                      name="type"
                      value={single.type}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>CTC</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="CTC"
                      name="ctc"
                      value={single.ctc}
                      readOnly
                    />
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
                      value={single.about}
                      readOnly
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
}
