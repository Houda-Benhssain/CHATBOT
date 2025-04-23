import React from "react"
import { useState } from "react"
import { MessageCircle, Mail, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const validatePassword = (password) => {
    return password.length >= 6
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors({
      email: "",
      password: "",
    })

    let isValid = true
    const newErrors = {
      email: "",
      password: "",
    }

    if (!email) {
      newErrors.email = "Email est requis"
      isValid = false
    }

    if (!password) {
      newErrors.password = "Mot de passe est requis"
      isValid = false
    } else if (!validatePassword(password)) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères"
      isValid = false
    }

    if (!isValid) {
      setErrors(newErrors)
      return
    }

    // Add your authentication logic here
    console.log({ email, password })
  }

  const bubbleVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#111827] p-0 overflow-hidden">
      <div className="relative h-screen w-full">
        {/* Diagonal purple background */}
        <div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-br  to-purple-900"
          style={{
            clipPath: "polygon(0 0, 0 100%, 100% 0)",
          }}
        >
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
              className="absolute left-[20%] top-[4%] h-3 w-3 rounded-full bg-white/20"
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
              style={{ y: 5 }}
              className="absolute left-[40%] top-[6%] h-5 w-5 rounded-full bg-white/20"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: -5 }}
              className="absolute left-[68%] top-[30%] h-4 w-4 rounded-full bg-white/20"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: 7 }}
              className="absolute left-[10%] top-[70%] h-6 w-6 rounded-full bg-white/20"
            ></motion.div>
            <motion.div
              variants={bubbleVariants}
              animate="float"
              style={{ y: -3 }}
              className="absolute  top-[60%] h-3 w-3 rounded-full bg-white/20"
            ></motion.div>
          </div>
        </div>

        {/* Content container */}
        <div className="relative h-full w-full flex flex-col md:flex-row">
          {/* Left side content */}
          <div className="h-1/2 md:h-full md:w-1/2 p-8 flex flex-col  z-10">
            <div className="flex items-center">
              <Link to="/">
                <div className="text-white p-2 rounded-lg mr-2">
                  <MessageCircle size={25} />
                </div>
              </Link>
              <h1 className="text-2xl font-bold text-white">ChatBot</h1>
            </div>

            <div className="mt-8 md:mt-16">
              <h2 className="text-5xl font-bold mb-4 text-white">Bienvenue à nouveau!</h2>
              <p className="text-purple-200 "></p>
            </div>
          </div>

          {/* Right side content */}
          <div className="h-1/2 md:h-full md:w-1/2 flex items-center justify-center p-8 z-10">
            <div className="w-full max-w-md">
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-white">Connexion</h2>
                <p className="text-sm text-gray-400 ">Entrez vos identifiants pour accéder à votre compte</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-lg font-medium text-white ">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="Entrez votre email"
                      className={`w-full px-4 py-3 bg-slate-950 border ${errors.fullName ? 'border-red-500' : 'border-purple-500/30'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-purple-200/50`}

                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Mail className="absolute right-4 top-3 text-gray-400" size={20} />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-lg font-medium text-white ">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••••"
                      className={`w-full px-4 py-3 bg-slate-950 border ${errors.fullName ? 'border-red-500' : 'border-purple-500/30'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-purple-200/50`}

                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Lock className="absolute right-4 top-3 text-gray-400" size={20} />
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-purple-700 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 font-medium text-lg"
                  >
                  LOGIN
                </button>
              </form>

              <div className="mt-6 text-center">
                <span className="text-white">vous n'avez pas de compte ? </span>
                <Link to="/signup" className="text-purple-400 hover:text-purple-300 hover:underline ">
                  Créer un compte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}