import React, { useState } from 'react';
import { Mail, Phone, Calendar, User, KeyIcon } from 'lucide-react';

const EditProfile = ({ profile, onSave, onCancel }) => {
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProfile);
  };

  return (
    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 px-4">
      <div className="w-full md:w-1/3 flex items-center justify-center p-4">
        <div className="relative w-full max-w-xs">
          <div className="w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-purple-500 mx-auto">
            <User className="h-16 w-16 text-purple-400" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 px-4">
        <div className="bg-slate-900/80 backdrop-blur-sm py-8 px-6 shadow-xl rounded-2xl border border-slate-800">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-6 text-center">
            Modifier le profil
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-start gap-4">
              <User className="h-6 w-6 text-purple-400 mt-3" />
              <div className="flex-1">
                <label className="block text-sm text-purple-300 mb-2">Nom complet</label>
                <input
                  name="name"
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg"
                />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-purple-400 mt-3" />
              <div className="flex-1">
                <label className="block text-sm text-purple-300 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg"
                />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-purple-400 mt-3" />
              <div className="flex-1">
                <label className="block text-sm text-purple-300 mb-2">Téléphone</label>
                <input
                  name="phone"
                  type="tel"
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg"
                />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Calendar className="h-6 w-6 text-purple-400 mt-3" />
              <div className="flex-1">
                <label className="block text-sm text-purple-300 mb-2">Date de naissance</label>
                <input
                  name="birthDate"
                  type="date"
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg"
                />
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <KeyIcon className="h-6 w-6 text-purple-400 mt-3" />
              <div className="flex-1">
                <label className="block text-sm text-purple-300 mb-2">Mot de passe</label>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-lg"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 hover:from-purple-700 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-lg"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;