import { useState, useEffect } from "react";
import { Col, Form, Row, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserApi from "../../api/UserApi";
import { getAdminPassword } from "./AdminPassword";

export default function StudentAuth(props) {
  const [isLogin, setLogin] = useState(true);
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (
      data.email === "admin@gmail.com" &&
      data.password === getAdminPassword()
    ) {
      navigate("/admin/");
    } else {
      UserApi.getUser(data.email, data.password).then((res) => {
        if (res.status === 200) {
          if (res.data._id == null) {
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 3000);
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/student/");
          }
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      });
    }
  };

  const handleChange = () => {
    setLogin(!isLogin);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    UserApi.addUser(data).then((res) => {
      if (res.status === 200) {
        setSucess(true);
        setTimeout(() => {
          setSucess(false);
        }, 3000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    });
  };
  return (
    <div className="mt-2 pt-5">
      <Alert show={success} variant="success">
        Succesfully Registered
      </Alert>
      <Alert show={error} variant="danger">
        Please Check Credentails
      </Alert>
      {isLogin ? (
        <>
          <h4 className="display-6 text-center">Login Here</h4>
          <Form onSubmit={handleLogin}>
            <Form.Control
              className="mt-3"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <Form.Control
              className="mt-3"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <Row className="mt-3">
              <Col lg={7}>
                <Button type="submit" variant="outline-dark">
                  Login
                </Button>
              </Col>
              <Col lg={5}>
                <Button onClick={handleChange} variant="outline-dark">
                  Not Registered ? Register
                </Button>
              </Col>
            </Row>
          </Form>
        </>
      ) : (
        <>
          <h4 className="display-6 text-center">Register Here</h4>
          <Form onSubmit={handleRegister}>
            <Form.Control
              className="mt-3"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <Form.Control
              className="mt-3"
              type="number"
              name="phone"
              placeholder="Enter Phone"
            />
            <Form.Control
              className="mt-3"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <Form.Control
              className="mt-3"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <Row className="mt-3">
              <Col lg={8}>
                <Button type="submit" variant="outline-dark">
                  Register
                </Button>
              </Col>
              <Col lg={4}>
                <Button onClick={handleChange} variant="outline-dark">
                  Registered ? Login
                </Button>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </div>
  );
}
