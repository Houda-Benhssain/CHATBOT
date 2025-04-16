import React from "react";
import { Routes,Route } from "react-router-dom";
import ChatInterface from "./Pages/interface_chat";
// import ChatInterface from "./Pages/interface_chat";

// import Home from "./Pages/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Pages/Home";
import UserProfile from "./Components/Profile";
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<UserProfile />} />
      <Route path="/chat" element={<ChatInterface />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>

  );
}
