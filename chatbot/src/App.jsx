import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import ChatInterface from "./Pages/interface_chat";

// import Home from "./Pages/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
export default function App() {
  return (
    <div >
      {/* <ChatInterface /> */}
       {/* <Home/>  */}
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      
    </div>
  );
}
