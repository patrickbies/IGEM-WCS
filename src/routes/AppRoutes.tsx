import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Project from "@/pages/Project";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        {/*<Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes