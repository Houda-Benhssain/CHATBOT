import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from "../image/login2.png"
import { MessageCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EmailValide = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'L\'email est requis';
      valid = false;
    } else if (!EmailValide(email)) {
      newErrors.email = 'Veuillez entrer un email valide';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Le mot de passe est requis';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
      valid = false;
    }

    setErrors(newErrors);
    setIsSubmitting(false);

    if (valid) {
      console.log("Formulaire valide !");
    }
  };

  return (
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
              </div>
            </div>
          </div>
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
