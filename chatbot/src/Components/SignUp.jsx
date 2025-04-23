import React, { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateField = (name, value) => {
    const error = value.trim() === '' ? 'Ce champ est requis' : '';
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        const isFormValid = Object.keys(formData).every(field => 
      validateField(field, formData[field])
    );

    if (isFormValid) {
      alert('Inscription réussie !');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-start p-4 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/2 z-0">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-800/30 to-purple-600/30" style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-700/40 to-purple-500/40" style={{
          clipPath: "polygon(100% 0, 100% 80%, 20% 100%)"
        }}></div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-700 to-purple-500 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600 to-fuchsia-400 rounded-full blur-3xl opacity-20 z-0"></div>
            <div className="absolute top-6 left-6 flex items-center z-20">
        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </div>
        <span className="text-xl font-bold text-white">Chatbot</span>
      </div>
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-600 opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-purple-500/20 relative z-10 backdrop-blur-sm mt-16 ml-16">
        <div className="py-5 px-6 relative z-10">
          <h2 className="text-center tracking-tight text-4xl font-bold text-white">
            Créer un compte
          </h2>
        </div>
        <div className="p-8 relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-purple-100 text-sm font-medium mb-2">
                Nom complet *
              </label>
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-slate-950 border ${errors.fullName ? 'border-red-500' : 'border-purple-500/30'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-purple-200/50`}
                placeholder="Votre nom complet"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-purple-100 text-sm font-medium mb-2">
                Adresse email *
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-purple-500/30'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-purple-200/50`}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-purple-100 text-sm font-medium mb-2">
                Mot de passe *
              </label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-slate-950 border ${errors.password ? 'border-red-500' : 'border-purple-500/30'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-purple-200/50`}
                placeholder="••••••••"
              />
              {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-purple-100 text-sm font-medium mb-2">
                Confirmer mot de passe *
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-slate-950 border ${errors.confirmPassword ? 'border-red-500' : 'border-purple-500/30'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-purple-200/50`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-purple-700 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 font-medium text-lg"
            >
              S'inscrire
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-purple-100 text-sm">
              Vous avez déjà un compte?{" "}
              <a href="/login" className="text-purple-300 hover:text-white font-medium hover:underline transition-colors duration-200">
                Se connecter
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;