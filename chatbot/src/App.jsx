import React from "react";
import { Routes,Route } from "react-router-dom";
import ChatInterface from "./Pages/interface_chat";
<<<<<<< HEAD
import Home from "./Pages/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

=======
import UserProfile from "./Components/Profile";
// import ChatInterface from "./Pages/interface_chat";

// import Home from "./Pages/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Pages/Home";
>>>>>>> 208e0e9188cd195656984ca06bd666ff008305b3
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatInterface />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      </>
 
=======
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
    </>

>>>>>>> 208e0e9188cd195656984ca06bd666ff008305b3
  );
}
