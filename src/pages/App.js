import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shorts from "./Shorts";
import Livestream from "./Livestream";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shorts">Shorts</Link></li>
          <li><Link to="/livestream">Livestream</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/livestream" element={<Livestream />} />
      </Routes>
    </Router>
  );
}

export default App;
