import React from "react";
import { Routes,Route } from "react-router-dom";
import ChatInterface from "./Pages/interface_chat";
// import FAQ from "./Components/Documentation";
import Home from "./Pages/Home";
import ChatbotArchives from "./Components/archives";
import SignUp from "./Components/SignUp";


// import ChatInterface from "./Pages/interface_chat";

// import Home from "./Pages/Home";
import Login from "./Components/Login";
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatInterface />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/archives" element={<ChatbotArchives />} />
      {/* <Route path="/faq" element={<FAQ />} /> */}
     
    </Routes>
    </>

  );
}