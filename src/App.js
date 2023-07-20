import "./App.css";
import Header from "./Comps/header";
import Pool from "./Comps/pool";
import Home from "./Comps/home";
import Groom from "./Comps/groom";
import Boarding from "./Comps/boarding";
import Details from "./Comps/details";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path="" element={<Home/>} />
          <Route exact path="/Comps/Home" element={<Home/>} />
          <Route exact path="/Comps/pool" element={<Pool />} />
          <Route exact path="/Comps/groom" element={<Groom />} />
          <Route exact path="/Comps/boarding" element={<Boarding />} />
          <Route exact path="/Comps/details" element={<Details />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
