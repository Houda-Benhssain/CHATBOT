import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Edit, Mail, Phone, Calendar, User } from 'lucide-react';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    birthDate: '1990-05-15',
    phone: '+33 6 12 34 56 78',
    email: 'jean.dupont@example.com'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Section Informations */}
      <div className="w-full md:w-1/2 p-8">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-purple-400 mb-4">
            <ChevronLeft className="mr-1" />
            Retour
          </Link>
          <h1 className="text-2xl font-bold">Mon Profil</h1>
        </div>

        <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
          {/* Photo de profil */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-purple-500">
                <User className="h-12 w-12 text-purple-400" />
              </div>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 hover:bg-purple-700 text-white py-1 px-4 rounded-full text-sm flex items-center gap-1"
              >
                <Edit className="h-3 w-3" />
                {isEditing ? 'Annuler' : 'Modifier'}
              </button>
            </div>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Prénom</label>
                  <input
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Nom</label>
                  <input
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Email</label>
                <div className="flex items-center bg-slate-800 border border-slate-700 rounded px-3 py-2">
                  <Mail className="h-4 w-4 text-slate-500 mr-2" />
                  <input
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Téléphone</label>
                <div className="flex items-center bg-slate-800 border border-slate-700 rounded px-3 py-2">
                  <Phone className="h-4 w-4 text-slate-500 mr-2" />
                  <input
                    name="phone"
                    type="tel"
                    value={profile.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Date de naissance</label>
                <div className="flex items-center bg-slate-800 border border-slate-700 rounded px-3 py-2">
                  <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                  <input
                    name="birthDate"
                    type="date"
                    value={profile.birthDate}
                    onChange={handleChange}
                    className="w-full bg-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded mt-4"
              >
                Enregistrer
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-400">Nom complet</p>
                <p className="text-lg">{profile.firstName} {profile.lastName}</p>
              </div>

              <div className="flex items-center">
                <Mail className="h-4 w-4 text-slate-500 mr-2" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p>{profile.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-4 w-4 text-slate-500 mr-2" />
                <div>
                  <p className="text-sm text-slate-400">Téléphone</p>
                  <p>{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                <div>
                  <p className="text-sm text-slate-400">Date de naissance</p>
                  <p>
                    {new Date(profile.birthDate).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Photo illustrative à droite */}
      <div className="hidden md:block w-1/2 bg-slate-900">
        <div className="h-full flex items-center justify-center p-8">
          <div className="relative w-full h-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-slate-800 border-2 border-purple-500 flex items-center justify-center mx-auto mb-4">
                  <User className="h-16 w-16 text-purple-400" />
                </div>
                <h2 className="text-xl font-semibold mb-1">{profile.firstName} {profile.lastName}</h2>
                <p className="text-purple-400">{profile.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}