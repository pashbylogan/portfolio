import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import Fictionary from "./pages/Fictionary";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Bloglist />} />
          <Route path="/blogs/blog-details/:id/:title" element={<BlogDetails />} />
          <Route path="/fictionary" element={<Fictionary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
