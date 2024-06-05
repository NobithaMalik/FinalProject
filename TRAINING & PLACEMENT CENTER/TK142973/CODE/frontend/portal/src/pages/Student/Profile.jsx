import {
  Container,
  Card,
  Alert,
  Form,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import UserApi from "../../api/UserApi";
import Navigation from "../../components/Nav/Navigation";

export default function Profile() {
  const [user, setUser] = useState({});

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [phone, setPhone] = useState(0);

  const [msg, setMsg] = useState("");

  const [passwordChange, setPasswordChange] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setName(user.name);
    setEmail(user.email);
    setCgpa(user.cgpa);
    setPhone(user.phone);
  }, [user.name, user.email, user.cgpa, user.phone]);

  const handleChangePassword = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const oldPassword = data["old"];
    const newPassword = data["new"];

    const userPassword = user["password"];

    if (passwordChange) {
      if (oldPassword === userPassword) {
        UserApi.updateUser(user._id, { password: newPassword }).then((res) => {
          if (res.status === 200) {
            setMsg("Password Updated Successfully");
            localStorage.setItem("user", JSON.stringify(res.data));
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          } else {
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 3000);
            setMsg("Someting went wrong, please try again");
          }
        });
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        setMsg("Old password is incorrect");
      }
    } else {
      UserApi.updateUser(user._id, {
        name: name,
        email: email,
        cgpa: cgpa,
        phone: phone,
      }).then((res) => {
        if (res.status === 200) {
          setMsg("Profile Succesfully Updated");
          localStorage.setItem("user", JSON.stringify(res.data));
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
          setMsg("Someting went wrong, please try again");
        }
      });
    }
  };
  return (
    <Container fluid style={{ background: "powderblue" }}>
      <Row>
        <Navigation />
      </Row>
      <Row className="mt-5">
        <Col lg={3}></Col>
        <Col lg={6}>
          <Card className="mb-5">
            <Card.Body>
              <Alert show={success} variant="success">
                {msg}
              </Alert>
              <Alert show={error} variant="danger">
                {msg}
              </Alert>
              <Form onSubmit={handleChangePassword}>
                <Row hidden={passwordChange}>
                  <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Please Change Name Here"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="name"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Enter Email Here"
                      name="email"
                    />
                  </Form.Group>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        placeholder="Enter Phone Here"
                        name="phone"
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Cgpa</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Please Change CGPA Here"
                        value={cgpa}
                        onChange={(e) => {
                          setCgpa(e.target.value);
                        }}
                        name="cgpa"
                      />
                    </Form.Group>
                  </Row>
                </Row>
                <Row hidden={!passwordChange}>
                  <Form.Group as={Col}>
                    <Form.Label>Please Enter Old Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Please Enter Old Password"
                      name="old"
                    />
                  </Form.Group>
                </Row>
                <Row hidden={!passwordChange}>
                  <Form.Group as={Col}>
                    <Form.Label>Please Enter New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Please Enter New Password"
                      name="new"
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
        </Col>
        <Col lg={3}>
          <ListGroup>
            <ListGroupItem action onClick={() => setPasswordChange(false)}>
              Change Details
            </ListGroupItem>
            <ListGroupItem action onClick={() => setPasswordChange(true)}>
              Change Password
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
