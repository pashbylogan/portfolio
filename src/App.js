import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import Fictionary from "./pages/Fictionary";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/fictionary" element={<Fictionary />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
