import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Verify from "./components/Verify";
import SignUpForm from "./components/signUpForm";
import MoreInfo from "./components/MoreInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/more-info" element={<MoreInfo />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/" element={<SignUpForm />} />
    </Routes>
  );
};

export default App;
