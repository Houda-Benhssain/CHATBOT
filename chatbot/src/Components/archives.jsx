import { useState } from 'react';
import { Mic, MicOff, Headphones, Search, Undo2, Trash2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatbotArchives() {
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 'conv-78901',
      title: 'Problème de connexion',
      preview: 'Je ne parviens pas à me connecter à mon compte...',
      date: '15 juin 2023',
      time: '14:32',
      isVoice: true,
      duration: '2:45',
    },
    {
      id: 'conv-78900',
      title: 'Question sur abonnement',
      preview: 'Différences entre abonnements Premium et Pro...',
      date: '14 juin 2023',
      time: '11:15',
      isVoice: false,
    },
  ];

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const restoreConversation = (conversationId) => {
    console.log('Restaurer la conversation:', conversationId);
  };

  const deleteConversation = (conversationId) => {
    console.log('Supprimer la conversation:', conversationId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-purple-950 text-gray-100 p-4 md:p-6">
      <div className="flex justify-between items-center mb-8">
        <Link to="/chat" className="flex items-center text-purple-300 hover:text-purple-400 transition-colors">
          <span className="mr-2">&larr;</span> Retour
        </Link>
        <div className="flex items-center">
          <span className="text-xl font-bold text-white mr-3">Chatbot</span>
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <header className="mb-8 mt-4">
          <h1 className="text-3xl font-bold text-purple-400 mb-2">Archives Vocales</h1>
          <p className="text-purple-200">Historique de vos conversations</p>
        </header>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-purple-900/30 shadow-lg">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-purple-400 h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Rechercher dans les archives..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800/70 border border-purple-900/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-purple-100 placeholder-purple-300/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="group bg-gray-900/40 hover:bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-purple-700/50 transition-all duration-300 shadow-sm"
              >
                <div className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-purple-300 truncate">{conversation.title}</h3>
                    </div>
                    <p className="text-gray-300 line-clamp-2 text-sm">{conversation.preview}</p>
                    <p className="text-xs text-purple-400/80 mt-2">
                      {conversation.date} • {conversation.time}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => restoreConversation(conversation.id)}
                      className="p-2 rounded-full bg-purple-700 hover:bg-purple-600 text-white transition"
                      title="Restaurer"
                    >
                      <Undo2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deleteConversation(conversation.id)}
                      className="p-2 rounded-full bg-red-600 hover:bg-red-500 text-white transition"
                      title="Supprimer"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-900/50 rounded-xl p-8 text-center border border-gray-800">
              <p className="text-gray-400">Aucune conversation trouvée</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}