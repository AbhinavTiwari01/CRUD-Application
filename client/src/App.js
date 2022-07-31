import React from "react";
import AddUser from "./Components/AddUser";
import AllUser from "./Components/AllUser";
import MyCrudApplication from "./Components/MyCrudApplication";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditUser from "./Components/EditUser";


function App() {
  return (
    <div>
       <NavBar/>
       <Router>
      <Routes>
      <Route exact path="/add" element ={<AddUser/>}/>
      <Route exact path="/all" element={<AllUser/>}/>
      <Route exact path="/" element={<MyCrudApplication/>}/>
      <Route exact path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
