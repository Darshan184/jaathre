import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Login from "./components/Login";
import HampiUtsav from "./components/HampiUtsav";
import MysoreDasara from "./components/MysoreDasara";
import UdupiPariyaya from "./components/UdupiPariyaya";
import Shravanabelagola from "./components/ShravanaBelagola";
import PattadakalluNrutyotsava from "./components/PattadakalluNrutyotsava";
import Register from "./components/Register";
import SirsiMarikamba from "./components/SirsiMarikamba";
import SiddagangaJaathre from "./components/SiddagangaJaathre";
import KaveriSankramana from "./components/KaveriSankramana";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hampiutsav" element={<HampiUtsav />} />
          <Route path="/mysoredasara" element={<MysoreDasara />} />
          <Route path="/udupipariyaya" element={<UdupiPariyaya />} />
          <Route path="/shravanabelagola" element={<Shravanabelagola />} />
          <Route
            path="/pattadakallunrutyotsava"
            element={<PattadakalluNrutyotsava />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/sirsimarikamba" element={<SirsiMarikamba />} />
          <Route path="/siddagangaJaathre" element={<SiddagangaJaathre />} />
          <Route path="/KaveriSankramana" element={<KaveriSankramana />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
