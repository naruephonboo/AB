import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import Pre from "./components/Pre";




import {BrowserRouter, Routes, Route,} from 'react-router-dom';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Pre/>}/> */}
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
    </Routes>
  </BrowserRouter>
  );
};

export default App;
