import { useEffect } from "react";
import { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Table,
  Form,
  Modal,
  Card,
  Alert,
} from "react-bootstrap";
import Navigation from "../../components/Nav/Navigation";
import JobApi from "../../api/JobApi";
import TrainingApi from "../../api/TrainingApi";
import UserApi from "../../api/UserApi";
import Footer from "../../components/utils/Footer";
import axios from "axios";

export default function Reports(props) {
  const [report, setReport] = useState(0);

  return (
    <Container fluid style={{ background: "powderblue" }}>
      <Row>
        <Navigation admin />
      </Row>
      <Row className="text-center mt-5">
        <Col lg={2}></Col>
        <Col lg={1}></Col>
        <Col lg={2}>
          <Button
            variant="outline-primary"
            onClick={() => {
              setReport(1);
            }}
          >
            Student Report
          </Button>
        </Col>
        <Col lg={2}>
          <Button
            variant="outline-primary"
            onClick={() => {
              setReport(2);
            }}
          >
            Job Report
          </Button>
        </Col>
        <Col lg={2}>
          <Button
            variant="outline-primary"
            onClick={() => {
              setReport(3);
            }}
          >
            Training Report
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        {report === 1 ? <StudentReport /> : null}
        {report === 2 ? <JobReport /> : null}
        {report === 3 ? <TrainingReport /> : null}
      </Row>
    </Container>
  );
}

// function JobReport() {
//   const [jobs, setJobs] = useState([]);

//   const [edit, setEdit] = useState(false);

//   const [application , setapplication] = useState(false)

//   const [success, setSuccess] = useState(false);

//   const [singleJob, setSingleJob] = useState({});

//   function getData() {
//     JobApi.getAllJobs().then((res) => {
//       if (res.status === 200 || res.status === 201) {
//         setJobs(res.data);
//       }
//     });
//   }

//   useEffect(getData, []);

//   const handleUpdateJob = (e) => {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget));
//     JobApi.updateJob(data.id, data).then((res) => {
//       if (res.status === 200) {
//         setSuccess(true);
//         setTimeout(() => {
//           setSuccess(false);
//           getData();
//           e.target.reset();
//         }, 3000);
//       }
//     });
//   };

// const gettingApplication = async(e,props) =>{
//   e.preventDefault()
//   try{
//     const responce = await axios.get(`http://localhost:5000/appli/${props}`)
//     console.log(responce,"getting data")

//   }catch(error){
//     console.log(error)
//   }
// }


//   return (
//     <Table hover variant="light" bordered>
//       <Modal
//         show={edit}
//         onHide={() => {
//           setEdit(false);
//         }}
//       >
//         <Card>
//           <Card.Body>
//             <Alert show={success} variant="success">
//               Job Updated Succesfully
//             </Alert>
//             <Form onSubmit={handleUpdateJob}>
//               <Row>
//                 <input type="text" name="id" hidden value={singleJob._id} />
//                 <Form.Group as={Col}>
//                   <Form.Label>Job Title</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Job Title"
//                     name="title"
//                     value={singleJob.title}
//                     onChange={(e) => {
//                       setSingleJob({ title: e.target.value });
//                     }}
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col}>
//                   <Form.Label>Required SkillSet</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Required SkillSet"
//                     name="skills"
//                     value={singleJob.skills}
//                     onChange={(e) => {
//                       setSingleJob({ skills: e.target.value });
//                     }}
//                   />
//                 </Form.Group>
//               </Row>
//               <Row>
//                 <Form.Group as={Col}>
//                   <Form.Label>Job Company</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Job Company"
//                     name="company"
//                     value={singleJob.company}
//                     onChange={(e) => {
//                       setSingleJob({ company: e.target.value });
//                     }}
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col}>
//                   <Form.Label>Job City</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Job City"
//                     name="city"
//                     value={singleJob.city}
//                     onChange={(e) => {
//                       setSingleJob({ city: e.target.value });
//                     }}
//                   />
//                 </Form.Group>
//               </Row>
//               <Row>
//                 <Form.Group as={Col}>
//                   <Form.Label>Job Type</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Job Type"
//                     name="type"
//                     value={singleJob.type}
//                     onChange={(e) => {
//                       setSingleJob({ type: e.target.value });
//                     }}
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col}>
//                   <Form.Label>CTC</Form.Label>
//                   <Form.Control
//                     type="number"
//                     placeholder="CTC"
//                     name="ctc"
//                     value={singleJob.ctc}
//                     onChange={(e) => {
//                       setSingleJob({ ctc: e.target.value });
//                     }}
//                   />
//                 </Form.Group>
//               </Row>
//               <Row>
//                 <Form.Group as={Col}>
//                   <Form.Label>About Job</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={3}
//                     placeholder="About Job"
//                     name="about"
//                     value={singleJob.about}
//                     onChange={(e) => {
//                       setSingleJob({ about: e.target.value });
//                     }}
//                   />
//                 </Form.Group>
//               </Row>
//               <Row>
//                 <Form.Group as={Col}>
//                   <Button
//                     variant="primary"
//                     type="submit"
//                     className="w-100 mt-2"
//                   >
//                     Submit
//                   </Button>
//                 </Form.Group>
//               </Row>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Modal>

//       <thead>
//         <tr>
//           <th>S.No</th>
//           <th>Title</th>
//           <th>Date Posted</th>
//           <th>Students Registered</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {jobs.map((job, index) => {
//           return (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{job.title}</td>
//               <td>{job.date}</td>
//               <td>{job.studentsRegistered}</td>
//               <td>
//                 <Row className="w-100">
//                   <Col lg={4}></Col>
//                   <Col lg={2}>
//                     <Button
//                       variant="info"
//                       onClick={() => {
//                         setEdit(true);
//                         setSingleJob(job);
//                       }}
//                     >
//                       Edit
//                     </Button>
//                   </Col>
//                   <Col lg={1}>
//                     <Button
//                       variant="danger"
//                       onClick={() => {
//                         JobApi.deleteJob(job._id).then((res) => {
//                           if (res.status === 200) {
//                             getData();
//                           }
//                         });
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </Col>
//                   <Col >
//                     <Button
//                       variant="danger"
//                       onClick={() => {
//                         gettingApplication(job._id)}}
//                     >
//                       View Applocations
//                     </Button>
//                   </Col>


//                 </Row>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </Table>
//   );
// }

function StudentReport() {
  const [stundents, setStudents] = useState([]);

  function getData() {
    UserApi.getAllUsers().then((res) => {
      if (res.status === 200 || res.status === 201) {
        setStudents(res.data);
      }
    });
  }

  useEffect(getData, []);

  return (
    <Table hover variant="light" bordered>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        {stundents.map((student, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

// function TrainingReport(props) {
//   const [trainings, setTrainings] = useState([]);

//   const [singleTraining, setSingleTraining] = useState({});

//   const [success, setSuccess] = useState(false);

//   const [edit, setEdit] = useState(false);

//   function getData() {
//     TrainingApi.getAllTrainings().then((res) => {
//       if (res.status === 200 || res.status === 201) {
//         setTrainings(res.data);
//       }
//     });
//   }
//   useEffect(getData, []);

//   const handleTrainingUpdate = (e) => {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget));
//     TrainingApi.updateTraining(data.id, data).then((res) => {
//       if (res.status === 200) {
//         setSuccess(true);
//         setTimeout(() => {
//           setSuccess(false);
//           getData();
//         }, 3000);
//       }
//     });
//   };


//   const gettingApplication = async (jobId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/trainings/appli/${jobId}`);
//       if (response.status === 200) {
//         setApplications(response.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const downloadResume = (resumeUrl) => {
//     // You can implement the logic to download the resume here
//     window.open(resumeUrl, "_blank");
//   };




//   return (
//     <Table hover variant="light" bordered>
//       <Modal
//         show={edit}
//         onHide={() => {
//           setEdit(false);
//         }}
//       >
//         <Card>
//           <Card.Body>
//             <Alert show={success} variant="success">
//               Training Updated Succesfully
//             </Alert>
//             <Form onSubmit={handleTrainingUpdate}>
//               <input type="text" name="id" value={singleTraining._id} hidden />
//               <Row>
//                 <Form.Group as={Col}>
//                   <Form.Label>Training Subject</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Training Subject"
//                     value={singleTraining.subject}
//                     onChange={(e) => {
//                       setSingleTraining({ subject: e.target.value });
//                     }}
//                     name="subject"
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col}>
//                   <Form.Label>Training Title</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={singleTraining.title}
//                     onChange={(e) => {
//                       setSingleTraining({ title: e.target.value });
//                     }}
//                     placeholder="Training Title"
//                     name="title"
//                   />
//                 </Form.Group>
//               </Row>
//               <Row>
//                 <Form.Group as={Col}>
//                   <Form.Label>Training Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     value={singleTraining.date}
//                     onChange={(e) => {
//                       setSingleTraining({ date: e.target.value });
//                     }}
//                     placeholder="Job Type"
//                     name="date"
//                   />
//                 </Form.Group>
//               </Row>
//               <Row>
//                 <Form.Group as={Col}>
//                   <Form.Label>Descritpion</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={3}
//                     value={singleTraining.description}
//                     onChange={(e) => {
//                       setSingleTraining({
//                         description: e.target.value,
//                       });
//                     }}
//                     placeholder="Descritpion"
//                     name="description"
//                   />
//                 </Form.Group>
//               </Row>
//               <Row>
//                 <Form.Group as={Col}>
//                   <Button
//                     variant="primary"
//                     type="submit"
//                     className="w-100 mt-2"
//                   >
//                     Submit
//                   </Button>
//                 </Form.Group>
//               </Row>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Modal>
//       <thead>
//         <tr>
//           <th>S.No</th>
//           {/* <th>Subject</th> */}
//           <th>Title</th>
//           <th>Date</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {trainings.map((training, index) => {
//           return (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               {/* <td>{training.subject}</td> */}
//               <td>{training.title}</td>
//               <td>{training.date}</td>
//               <td>
//                 <Row className="w-100">
//                   <Col lg={4}></Col>
//                   <Col lg={2}>
//                     <Button
//                       variant="info"
//                       onClick={() => {
//                         setSingleTraining(training);
//                         setEdit(true);
//                       }}
//                     >
//                       Edit
//                     </Button>
//                   </Col>
//                   <Col lg={1}>
//                     <Button
//                       variant="danger"
//                       onClick={() => {
//                         TrainingApi.deleteTraining(training._id).then((res) => {
//                           if (res.status === 200) {
//                             getData();
//                           }
//                         });
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </Col>
//                   <Col lg={1}>
//                     <Button
//                       variant="danger"
//                       onClick={() => {
//                         gettingApplication(training._id)
//                       }}
//                     >
//                       View APPLICATONS
//                     </Button>
//                   </Col>
//                 </Row>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </Table>
//   );
// }



function JobReport() {
  const [jobs, setJobs] = useState([]);
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [singleJob, setSingleJob] = useState({});
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    JobApi.getAllJobs().then((res) => {
      if (res.status === 200 || res.status === 201) {
        setJobs(res.data);
      }
    });
  };

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    JobApi.updateJob(data.id, data).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          getData();
          e.target.reset();
        }, 3000);
      }
    });
  };

  const gettingApplication = async (jobId) => {
    try {
      const response = await axios.get(`http://localhost:5000/jobs/appli/${jobId}`);
      if (response.status === 200) {
        setApplications(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const downloadResume = (resumeUrl) => {
    // You can implement the logic to download the resume here
    window.open(resumeUrl, "_blank");
  };

  return (
    <Table hover variant="light" bordered>
      <Modal
        show={edit}
        onHide={() => {
          setEdit(false);
        }}
      >
        <Card>
          <Card.Body>
            <Alert show={success} variant="success">
              Job Updated Succesfully
            </Alert>
            <Form onSubmit={handleUpdateJob}>
              <Row>
                <input type="text" name="id" hidden value={singleJob._id} />
                <Form.Group as={Col}>
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Job Title"
                    name="title"
                    value={singleJob.title}
                    onChange={(e) => {
                      setSingleJob({ title: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Required SkillSet</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Required SkillSet"
                    name="skills"
                    value={singleJob.skills}
                    onChange={(e) => {
                      setSingleJob({ skills: e.target.value });
                    }}
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
                    value={singleJob.company}
                    onChange={(e) => {
                      setSingleJob({ company: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Job City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Job City"
                    name="city"
                    value={singleJob.city}
                    onChange={(e) => {
                      setSingleJob({ city: e.target.value });
                    }}
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
                    value={singleJob.type}
                    onChange={(e) => {
                      setSingleJob({ type: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>CTC</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="CTC"
                    name="ctc"
                    value={singleJob.ctc}
                    onChange={(e) => {
                      setSingleJob({ ctc: e.target.value });
                    }}
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
                    value={singleJob.about}
                    onChange={(e) => {
                      setSingleJob({ about: e.target.value });
                    }}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-2"
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Modal> 

      <thead>
        <tr>
          <th>S.No</th>
          <th>Title</th>
          <th>Date Posted</th>
          {/* <th>Students Registered</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{job.title}</td>
            <td>{job.date}</td>
            {/* <td>{job.studentsRegistered}</td> */}
            <td>
              <Row className="w-100">
                <Col lg={2}>
                  <Button
                    variant="info"
                    onClick={() => {
                      setEdit(true);
                      setSingleJob(job);
                    }}
                  >
                    Edit
                  </Button>
                </Col>
                <Col lg={2}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      JobApi.deleteJob(job._id).then((res) => {
                        if (res.status === 200) {
                          getData();
                        }
                      });
                    }}
                  >
                    Delete
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => gettingApplication(job._id)}
                  >
                    View Applications
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
        ))}
      </tbody>
      {/* Table to display applications */}
      {applications.length > 0 && (
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Resume</th>
          </tr>
          {applications.map((application, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{application.Students[0].name}</td>
              <td>{application.Students[0].email}</td>
              <td>{application.Students[0].phone}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => downloadResume(`http://localhost:5000/resume/${application.resume}`)}

                >
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
}

function TrainingReport(props) {
  const [trainings, setTrainings] = useState([]);
  const [singleTraining, setSingleTraining] = useState({});
  const [success, setSuccess] = useState(false);
  const [edit, setEdit] = useState(false);
  const [applications, setApplications] = useState([]); // Added state for applications

  function getData() {
    TrainingApi.getAllTrainings().then((res) => {
      if (res.status === 200 || res.status === 201) {
        setTrainings(res.data);
      }
    });
  }
  useEffect(getData, []);

  const handleTrainingUpdate = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    TrainingApi.updateTraining(data.id, data).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          getData();
        }, 3000);
      }
    });
  };

  const gettingApplication = async (trainingId) => { // Changed parameter name to trainingId
    try {
      const response = await axios.get(`http://localhost:5000/trainings/apli/${trainingId}`);
      if (response.status === 200) {
        setApplications(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const downloadResume = (resumeUrl) => {
    // You can implement the logic to download the resume here
    window.open(resumeUrl, "_blank");
  };

  return (
    <Table hover variant="light" bordered>
      <Modal
        show={edit}
        onHide={() => {
          setEdit(false);
        }}
      >
        <Card>
          <Card.Body>
            <Alert show={success} variant="success">
              Training Updated Succesfully
            </Alert>
            <Form onSubmit={handleTrainingUpdate}>
              <input type="text" name="id" value={singleTraining._id} hidden />
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Training Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Training Subject"
                    value={singleTraining.subject}
                    onChange={(e) => {
                      setSingleTraining({ subject: e.target.value });
                    }}
                    name="subject"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Training Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={singleTraining.title}
                    onChange={(e) => {
                      setSingleTraining({ title: e.target.value });
                    }}
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
                    value={singleTraining.date}
                    onChange={(e) => {
                      setSingleTraining({ date: e.target.value });
                    }}
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
                    value={singleTraining.description}
                    onChange={(e) => {
                      setSingleTraining({
                        description: e.target.value,
                      });
                    }}
                    placeholder="Descritpion"
                    name="description"
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-2"
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Modal>

      <thead>
        <tr>
          <th>S.No</th>
          <th>Title</th>
          <th>Date</th> {/* Changed "Date Posted" to "Date" to align with JobReport */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {trainings.map((training, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{training.title}</td>
            <td>{training.date}</td> {/* Changed to "date" to align with JobReport */}
            <td>
              <Row className="w-100">
                <Col lg={2}>
                  <Button
                    variant="info"
                    onClick={() => {
                      setSingleTraining(training);
                      setEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                </Col>
                <Col lg={2}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      TrainingApi.deleteTraining(training._id).then((res) => {
                        if (res.status === 200) {
                          getData();
                        }
                      });
                    }}
                  >
                    Delete
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => gettingApplication(training._id)} // Pass training id
                  >
                    View Applications
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
        ))}
      </tbody>
      {/* Table to display applications */}
      {applications.length > 0 && (
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Resume</th>
          </tr>
          {applications.map((application, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{application.Students[0].name}</td>
              <td>{application.Students[0].email}</td>
              <td>{application.Students[0].phone}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => downloadResume(`http://localhost:5000/resumes/${application.resumes}`)}
                >
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
}
