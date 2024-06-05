import { useState } from "react";
import { Form, Row, Button, Alert } from "react-bootstrap";

export default function Footer(props) {
  const [success, setSuccess] = useState(false);

  return (
    <Row className="w-50 ms-auto me-auto mt-3">
      <Alert variant="success" show={success}>
        Message Sent Successfully
      </Alert>
      <div className="jumbotron jumbotron-fluid text-center">
        <p className="lead">Contact Us</p>
        <Form>
          <Form.Control className="mt-3" type="text" placeholder="Enter Name" />
          <Form.Control
            className="mt-3"
            type="email"
            placeholder="Enter Email"
          />
          <Form.Control
            className="mt-3"
            rows={4}
            as="textarea"
            placeholder="Enter Your Message"
          />
          <div className="text-center">
            <Button
              variant="outline-dark mt-2"
              onClick={() => {
                setSuccess(true);
                setTimeout(() => {
                  setSuccess(false);
                }, 2000);
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Row>
  );
}
