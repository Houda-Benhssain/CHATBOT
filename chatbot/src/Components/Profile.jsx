// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Mail, Phone, Calendar, User, MessageCircle, ChevronLeft } from 'lucide-react';
// import profilee from "../image/profilee.png";
// import EditProfile from './edititProfile';

// const UserProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: "Jean Dupont",
//     email: "jean.dupont@example.com",
//     phone: "+33 6 12 34 56 78",
//     birthDate: "1990-05-15"
//   });

//   const handleProfileUpdate = (updatedProfile) => {
//     setProfile(updatedProfile);
//     setIsEditing(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex flex-col">
//       <div className="absolute inset-0 overflow-hidden opacity-20">
//         {[...Array(20)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute rounded-full bg-purple-500 animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${Math.random() * 10 + 5}px`,
//               height: `${Math.random() * 10 + 5}px`,
//               animationDuration: `${Math.random() * 20 + 10}s`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="absolute top-6 left-6 z-10">
//         <div className="flex items-center">
//           <div className="w-8 h-8 bg-purple-600 rounded-lg mr-2">
//             <div className="bg-purple-600 text-white p-2 rounded-lg">
//               <MessageCircle size={20} />
//             </div>
//           </div>
//           <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
//             Chatbot
//           </h1>
//         </div>
//         <hr className="border-t border-gray-700 mt-2 w-full" />
//       </div>
//       <div className="relative z-10 flex flex-1 items-center justify-center pb-12">
//         {isEditing ? (
//           <EditProfile 
//             profile={profile} 
//             onSave={handleProfileUpdate} 
//             onCancel={() => setIsEditing(false)}
//           />
//         ) : (
//           <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 px-4">
//             <div className="w-full md:w-1/3 flex items-center justify-center p-4">
//               <div className="relative w-full max-w-xs">
//                 <img 
//                   src={profilee}
//                   alt="Profil utilisateur" 
//                   className="w-full h-auto object-contain"
//                   style={{
//                     maxHeight: '400px',
//                     filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))'
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="w-full md:w-2/3 px-4">
//               <div className="bg-slate-900/80 backdrop-blur-sm py-8 px-6 shadow-xl rounded-2xl border border-slate-800 transition-all duration-300 ">
//                 <Link to="/chat" className="absolute top-4 left-4 text-purple-400 cursor-pointer flex items-center">
//                   <ChevronLeft size={24} className="mr-1" />
//                   <span>Retour</span>
//                 </Link>
                
//                 <div className="text-center mb-6">
//                   <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
//                     Mon Profil
//                   </h2>
//                 </div>
                
//                 <div className="flex flex-col items-center mb-8">
//                   <div className="relative">
//                     <div className="w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-purple-500">
//                       <User className="h-16 w-16 text-purple-400" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6 mb-6">
//                   <div className="flex items-start gap-4">
//                     <User className="h-6 w-6 text-purple-400 mt-2" />
//                     <div>
//                       <p className="text-sm text-purple-300 mb-1">Nom complet</p>
//                       <p className="text-white font-medium text-lg">{profile.name}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Mail className="h-6 w-6 text-purple-400 mt-2" />
//                     <div>
//                       <p className="text-sm text-purple-300 mb-1">Email</p>
//                       <p className="text-white font-medium text-lg">{profile.email}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Phone className="h-6 w-6 text-purple-400 mt-2" />
//                     <div>
//                       <p className="text-sm text-purple-300 mb-1">Téléphone</p>
//                       <p className="text-white font-medium text-lg">{profile.phone}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Calendar className="h-6 w-6 text-purple-400 mt-2" />
//                     <div>
//                       <p className="text-sm text-purple-300 mb-1">Date de naissance</p>
//                       <p className="text-white font-medium text-lg">
//                         {new Date(profile.birthDate).toLocaleDateString('fr-FR', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric'
//                         })}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="w-full bg-gradient-to-r from-purple-600  hover:from-purple-700  text-white py-3 px-6 rounded-lg text-lg font-medium mt-6 shadow-lg"
//                 >
//                   Modifier le profil
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes float {
//           0% { transform: translateY(0) rotate(0deg); opacity: 1; }
//           100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
//         }
//         .animate-float {
//           animation: float linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default UserProfile;