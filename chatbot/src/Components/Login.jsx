<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from "../image/login2.png"
import { MessageCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196

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

<<<<<<< HEAD
    if (!isValid) {
      setErrors(newErrors);
      return;
=======
    setErrors(newErrors);
    setIsSubmitting(false);

    if (valid) {
      console.log("Formulaire valide !");
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
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
<<<<<<< HEAD
    <div className="flex min-h-screen w-full items-center justify-center bg-black p-0">
      <div className="h-screen w-full overflow-hidden bg-black shadow-2xl md:flex">
        {/* Left side - Purple background with image */}
        <div className="relative h-1/2 bg-gradient-to-br from-purple-600 to-purple-900 p-8 text-white md:h-screen md:w-1/2">
          <div className="relative z-10">
            <div className="flex items-center">
             <Link to="/">
             <div className=" text-white p-2 rounded-lg mr-2">
                <BotMessageSquare size={25} />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex flex-col">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const size = `${Math.random() * 10 + 5}px`;
          const duration = `${Math.random() * 20 + 10}s`;
          const delay = `${Math.random() * 5}s`;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-purple-500 animate-float"
              style={{
                left,
                top,
                width: size,
                height: size,
                animationDuration: duration,
                animationDelay: delay,
              }}
            />
          );
        })}
      </div>
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-purple-600 rounded-lg mr-2">
            <div className="bg-purple-600 text-white p-2 rounded-lg">
              <MessageCircle size={20} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            Chatbot
          </h1>
        </div>
        <hr className="border-t border-gray-700 mt-2 w-full" />
      </div>
      <div className="relative z-10 flex flex-1 items-center justify-center pb-12">
        <div className="w-full max-w-5xl flex items-center justify-center px-4">
          <div className="w-full sm:max-w-md px-4">
            <div className="bg-slate-900/80 backdrop-blur-sm py-8 px-6 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-800 transition-all duration-300 hover:shadow-purple-500/10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2">
                    Connexion
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Entrez vos identifiants pour accéder à votre compte
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 group-focus-within:text-purple-400 transition-colors duration-200">
                      Email
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Entrez votre adresse email"
                        className={`appearance-none block w-full pl-10 pr-3 py-3 bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 sm:text-sm`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400 animate-shake">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 group-focus-within:text-purple-400 transition-colors duration-200">
                      Mot de passe
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        className={`appearance-none block w-full pl-10 pr-3 py-3 bg-slate-800/50 border ${errors.password ? 'border-red-500' : 'border-slate-700'} rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 sm:text-sm`}
                      />
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-400 animate-shake">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Link to="/chat"><button
                    type="submit"
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    Se connecter
                  </button></Link>
                  
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-400">
                Vous n'avez pas de compte ?{' '}
                <Link to="/signup" className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 hover:from-purple-300 hover:to-pink-200 transition-all duration-300">
                  Inscription
                </Link>
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
              </div>
             </Link>
              <h1 className="text-2xl font-bold">ChatBot</h1>
            </div>
            <span className="text-sm text-white flex items-center">
              Bienvenue <BotMessageSquare className="h-3 w-3 text-white mx-1" /> sur le site web
            </span>
          </div>
<<<<<<< HEAD

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
=======
          <div className="hidden md:flex items-center justify-center w-1/2 px-8">
            <div className="relative w-full max-w-md">
              <img 
                src={login} 
                alt="Animation robot" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
