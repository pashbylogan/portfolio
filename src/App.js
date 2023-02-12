import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import Fictionary from "./pages/Fictionary";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/fictionary" element={<Fictionary />} />
      </div>
    </HashRouter>
  );
}

export default App;
