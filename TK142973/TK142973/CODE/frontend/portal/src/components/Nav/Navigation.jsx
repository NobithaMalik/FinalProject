import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return <>{props.admin ? <AdminNav /> : <StudentNav />}</>;
}

function AdminNav() {
  return (
    <ul className="nav nav-pills justify-content-end bg-dark">
      <li className="nav-item">
        <Link className="btn btn-dark" to="/admin/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="btn btn-dark" to="/admin/adminstration">
          Adminstration
        </Link>
      </li>
      <li className="nav-item">
        <Link className="btn btn-dark" to="/admin/reports">
          Reports
        </Link>
      </li>
      <NavDropdown title="Profile" id="basic-nav-dropdown">
        <NavDropdown.Item to="/admin/profile" as={Link}>
          Change Password
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/">
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </ul>
  );
}

function StudentNav() {
  return (
    <>
      <ul className="nav nav-pills justify-content-end bg-dark">
        <li className="nav-item">
          <Link className="btn btn-dark" to="/student/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-dark" to="/student/trainings">
            Trainings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-dark" to="/student/jobs">
            Jobs
          </Link>
        </li>
        <li className="btn btn-dark">
          <Link
            className="nav-link dropdown-toggle"
            to="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/student/profile">
                Manage Account
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
