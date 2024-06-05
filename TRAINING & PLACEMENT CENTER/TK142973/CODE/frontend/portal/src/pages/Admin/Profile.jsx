import { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Navigation from "../../components/Nav/Navigation";
import * as AdminPassword from "../../components/auth/AdminPassword";

export default function Profile() {
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const [errorText, setErrorText] = useState("");

  const [old, setOld] = useState(AdminPassword.getAdminPassword());
  const [newPass, setNewPass] = useState("");

  return (
    <Container fluid>
      <Row>
        <Navigation admin />
      </Row>
      <Row style={{ background: "powderblue", height: "93vh" }}>
        <Col lg={4}></Col>
        <Col lg={4} className="mt-2">
          <h1 className="display-6 text-center">Change Password</h1>
          <div className="mt-2 pt-5">
            <Alert show={success} variant="success">
              {errorText}
            </Alert>
            <Alert show={error} variant="danger">
              {errorText}
            </Alert>
          </div>
          <div class="form-group">
            <label for="old">Old Password</label>
            <input
              type="password"
              id="old"
              class="form-control"
              placeholder="Old Password"
              aria-describedby="helpId"
              value={old}
              onChange={(e) => setOld(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="new">New Password</label>
            <input
              type="password"
              id="new"
              class="form-control"
              placeholder="New Password"
              aria-describedby="helpId"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              class="btn btn-primary mt-2 w-50"
              onClick={() => {
                if (newPass === old) {
                  setErrorText("New Password cannot be same as old password");
                  setError(true);
                  setTimeout(() => {
                    setError(false);
                  }, 3000);
                }
                if (newPass.length < 8) {
                  setErrorText("Password must be atleast 8 characters long");
                  setError(true);
                  setTimeout(() => {
                    setSucess(false);
                  }, 3000);
                }
                if (newPass.length >= 8 && newPass !== old) {
                  AdminPassword.ChangePassword(newPass);
                  setErrorText("Password Changed Successfully");
                  setSucess(true);
                  setOld("");
                  setNewPass("");
                  setTimeout(() => {
                    setSucess(false);
                  }, 3000);
                }
              }}
            >
              Submit
            </button>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
}
