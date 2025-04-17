import React from "react";
import { Routes,Route } from "react-router-dom";
import ChatInterface from "./Pages/interface_chat";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatInterface />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      </>
 
  );
}
