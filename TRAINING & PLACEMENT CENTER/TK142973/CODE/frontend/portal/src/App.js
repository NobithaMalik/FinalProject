import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Pages from "./pages/Index.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/admin" element={<Pages.AdminDashboard />} />
        <Route path="/admin/adminstration" element={<Pages.Adminstration />} />
        <Route path="/admin/reports" element={<Pages.Reports />} />
        <Route path="/student" element={<Pages.StudentDashboard />} />
        <Route path="/student/jobs" element={<Pages.Jobs />} />
        <Route path="/student/trainings" element={<Pages.Trainings />} />
        <Route path="/student/profile" element={<Pages.Profile />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/admin/profile" element={<Pages.AdminProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
