import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Fictionary from "./pages/Fictionary";
import IpFinder from "./pages/IpFinder";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fictionary" element={<Fictionary />} />
          <Route path="/canyouseeme" element={<IpFinder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
