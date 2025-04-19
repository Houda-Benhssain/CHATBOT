import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronLeft } from 'lucide-react';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Nom",
    email: "mi@xpaytech.co",
    phone: "+20-01274318900",
    address: "2000/12/12"  });

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 flex-col">
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
      <div className="relative z-10 flex flex-1 items-center justify-center py-12">
        {isEditing ? (
          <EditProfile 
            profile={profile} 
            onSave={handleProfileUpdate} 
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <div className="w-full max-w-2xl px-4">
            
            <div className="bg-white py-8 px-8 shadow-md rounded-lg border border-gray-200">
              <Link to="/chat" className="text-gray-500 hover:text-gray-700 cursor-pointer flex items-center mb-6">
                <ChevronLeft size={20} className="mr-1" />
                <span>Retour</span>
              </Link>
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile</h2>
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-gray-300 mx-auto">
                  <User className="h-12 w-12 text-gray-500" />
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500 mb-1">Nom complet</p>
                  <p className="text-gray-800 font-medium">{profile.name}</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-gray-800 font-medium">{profile.email}</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                  <p className="text-gray-800 font-medium">{profile.phone}</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500 mb-1">Date de naissance</p>
                  <p className="text-gray-800 font-medium">{profile.address}</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-slate-500 hover:from-purple-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                >
                  Editer
                </button>
              </div>
            </div>
          </div>
        )}
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
};
const EditProfile = ({ profile, onSave, onCancel }) => {
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-2xl px-4">
      <div className="bg-white py-8 px-8 shadow-md rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Editer Profile</h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm text-gray-500 mb-1">Nom</label>
            <input
              type="text"
              name="name"
              value={editedProfile.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-500 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={editedProfile.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-500 mb-1">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={editedProfile.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-500 mb-1">Date de naissance </label>
            <input
            type="date"
              name="address"
              value={editedProfile.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="3"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(editedProfile)}
            className="flex-1 bg-gradient-to-r from-purple-600 to-slate-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm font-medium"
          >
            Save Changes
          </button>
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
};

export default UserProfile;