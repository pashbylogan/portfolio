import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Fictionary from "./pages/Fictionary";
import IpFinder from "./pages/IpFinder";
import Iframe from "./pages/iframe";
import HashnodePosts from "./pages/Blog";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fictionary" element={<Fictionary />} />
          <Route path="/canyouseeme" element={<IpFinder />} />
          <Route path="/docs" element={<Iframe url="https://www.starfallprojects.co.uk/projects/deploy-host-docs/deploy-mkdocs-material-cloudflare/" title="MkDocs" />} />
          <Route path="/blog" element={<HashnodePosts username="pashbyl" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
