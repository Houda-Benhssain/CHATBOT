import React from "react";
import { useState } from "react";
import login from "../image/chatbot.png";
import { BotMessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors({
      email: "",
      password: ""
    });

    let isValid = true;
    const newErrors = {
      email: "",
      password: ""
    };

    if (!email) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } 

    if (!password) {
      newErrors.password = "Le mot de passe est requis";
      isValid = false;
    } else if (!validatePassword(password)) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }
  };

  const bubbleVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const robotVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black p-0">
      <div className="h-screen w-full overflow-hidden bg-black shadow-2xl md:flex">
        {/* Left side - Purple background with image */}
        <div className="relative h-1/2 bg-gradient-to-br from-purple-600 to-purple-900 p-8 text-white md:h-screen md:w-1/2">
          <div className="relative z-10">
            <div className="flex items-center">
             <Link to="/">
             <div className=" text-white p-2 rounded-lg mr-2">
                <BotMessageSquare size={25} />
              </div>
             </Link>
              <h1 className="text-2xl font-bold">ChatBot</h1>
            </div>
            <span className="text-sm text-white flex items-center">
              Bienvenue <BotMessageSquare className="h-3 w-3 text-white mx-1" /> sur le site web
            </span>
          </div>

          {/* Animated Robot Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src={login}
              alt="Chatbot"
              width={300}
              height={300}
              className="object-contain"
              initial={{ y: 0, rotate: 0 }}
              animate="float"
              variants={robotVariants}
            />
          </div>

          {/* Stars/bubbles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              variants={bubbleVariants}
              animate="float"
              className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-white/20"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: 5 }}
              className="absolute left-[30%] top-[50%] h-5 w-5 rounded-full bg-white/20"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: -5 }}
              className="absolute left-[70%] top-[30%] h-4 w-4 rounded-full bg-white/20"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: 7 }}
              className="absolute left-[20%] top-[70%] h-6 w-6 rounded-full bg-white/20"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: -3 }}
              className="absolute left-[80%] top-[60%] h-3 w-3 rounded-full bg-white/20"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: 2 }}
              className="absolute left-[40%] top-[20%] h-2 w-2 rounded-full bg-white/10"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: -7 }}
              className="absolute left-[60%] top-[80%] h-2 w-2 rounded-full bg-white/10"
            ></motion.div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="flex h-1/2 items-center justify-center bg-gray-900 p-8 md:h-screen md:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-white">Connexion</h2>
              <p className="text-sm text-gray-400">Entrez vos identifiants pour accéder à votre compte</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-1 ml-4">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Entrez votre email"
                  className="w-full rounded-full bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <p className="mt-1 ml-4 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-1">
                <label htmlFor="password" className="block text-lg font-medium text-gray-300 mb-1 ml-4">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  className="w-full rounded-full bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && <p className="mt-1 ml-4 text-xs text-red-500">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-purple-700 py-3 text-sm font-semibold text-white transition hover:bg-purple-600 mt-4">
                LOGIN
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-sm text-white"> vous n'avez pas de compte ?{" "}
                <a
                  href="/signup"
                  className="text-sm text-gray-400 hover:text-purple-400 hover:underline">
                  Créer un compte
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;