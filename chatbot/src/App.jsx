import React from "react";
<<<<<<< HEAD
import { Routes,Route } from "react-router-dom";
import ChatInterface from "./Pages/interface_chat";
=======
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import ChatInterface from "./Pages/interface_chat";
>>>>>>> 94a90658ea22b4abd62fb3140276d34cad884b3d

// import Home from "./Pages/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
export default function App() {
  return (
<<<<<<< HEAD
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatInterface />} />
    </Routes>
    </>
=======
    <div >
      {/* <ChatInterface /> */}
       {/* <Home/>  */}
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      
    </div>
>>>>>>> 94a90658ea22b4abd62fb3140276d34cad884b3d
  );
}
