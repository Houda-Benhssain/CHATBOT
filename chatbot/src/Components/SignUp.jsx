import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import profilee from "../image/profilee.png";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(String(phone));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
      birthDate: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom complet est requis';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "L'email est requis";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Le numéro de téléphone est requis';
      valid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Veuillez entrer un numéro valide';
      valid = false;
    }

    if (!formData.birthDate) {
      newErrors.birthDate = 'La date de naissance est requise';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Logique supplémentaire si le formulaire est valide
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex">
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
      <div className="hidden md:flex w-1/2 relative items-center justify-center shadow-purple">
        <img
          src={profilee}
          className="w-2/4 h-2/4 object-cover"
          style={{
            maxHeight: '400px',
            filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))',
          }}
        />
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
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        
        <div className="relative z-10 flex flex-1 items-center justify-center pb-12">
          <div className="w-full max-w-lg px-4">
            <div className="bg-slate-900/80 backdrop-blur-sm mt-16 py-8 px-6 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-800 transition-all duration-300 hover:shadow-purple-500/10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-300 mb-2">
                    Inscription
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Créez un compte pour commencer à utiliser notre service
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="group">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 group-focus-within:text-purple-400 transition-colors duration-200">
                      Nom complet
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange}
                        placeholder="Entrez votre nom complet"
                        className={`appearance-none block w-full pl-10 pr-3 py-3 bg-slate-800/50 border ${errors.fullName ? 'border-red-500' : 'border-slate-700'} rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 sm:text-sm`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-400 animate-shake">
                          <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                  </div>
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
                        id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                        placeholder="Entrez votre adresse email"
                        className={`appearance-none block w-full pl-10 pr-3 py-3 bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 sm:text-sm`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400 animate-shake">
                          <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 group-focus-within:text-purple-400 transition-colors duration-200">
                        Numéro de téléphone
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <input
                          id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                          placeholder="Entrez votre numéro"
                          className={`appearance-none block w-full pl-10 pr-3 py-3 bg-slate-800/50 border ${errors.phone ? 'border-red-500' : 'border-slate-700'} rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 sm:text-sm`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-400 animate-shake">
                            <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="birthDate" className="block text-sm font-medium text-gray-300 group-focus-within:text-purple-400 transition-colors duration-200">
                        Date de naissance
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <input
                          id="birthDate" name="birthDate" type="date" value={formData.birthDate} onChange={handleChange}
                          className={`appearance-none block w-full pl-10 pr-3 py-3 bg-slate-800/50 border ${errors.birthDate ? 'border-red-500' : 'border-slate-700'} rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 sm:text-sm`}
                        />
                        {errors.birthDate && (
                          <p className="mt-1 text-sm text-red-400 animate-shake">
                            <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            {errors.birthDate}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          id="password" name="password" type="password" value={formData.password} onChange={handleChange}
                          placeholder="Créez un mot de passe"
                          className={`appearance-none block w-full pl-10 pr-3 py-3 bg-slate-800/50 border ${errors.password ? 'border-red-500' : 'border-slate-700'} rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 sm:text-sm`}
                        />
                        {errors.password && (
                          <p className="mt-1 text-sm text-red-400 animate-shake">
                            <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            {errors.password}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 group-focus-within:text-purple-400 transition-colors duration-200">
                        Confirmation
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <input
                          id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange}
                          placeholder="Confirmez le mot de passe"
                          className={`appearance-none block w-full pl-10 pr-3 py-3 bg-slate-800/50 border ${errors.confirmPassword ? 'border-red-500' : 'border-slate-700'} rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 sm:text-sm`}
                        />
                        {errors.confirmPassword && (
                          <p className="mt-1 text-sm text-red-400 animate-shake">
                            <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-900 to-purple-900 hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                  >
                    S'inscrire
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-400">
                Vous avez déjà un compte ?{' '}
                <Link
                  to="/login"
                  className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 hover:from-purple-300 hover:to-pink-200 transition-all duration-300"
                >
                  Connexion
                </Link>
              </div>
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