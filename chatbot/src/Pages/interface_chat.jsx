import React, { useState, useEffect } from "react";
import { Sidebar } from "../Components/sidebar";
import { ChatHeader } from "../Components/chat-header";
import { ChatMessages } from "../Components/chat-messages";
import { ChatInput } from "../Components/chat-input";
import { Archive, Trash2, Sliders, User, Mail, Edit, LogOut, X, AlertTriangle,BotMessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

// Données constantes du profil
const USER_PROFILE_DATA = {
  fullName: "Jean Martin",
  email: "jean.martin@example.com",
  password: "monmotdepasse"
};

export default function ChatInterface() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState({ id: "new", title: "Nouvelle discussion" });
  const [chats, setChats] = useState([
    { id: "chat1", title: "Discussion précédente 1", time: "Il y a 2 jours" },
    { id: "chat2", title: "Aide assistant vocal", time: "Il y a 1 semaine" },
    { id: "chat3", title: "Idées de projet", time: "Il y a 2 semaines" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [userProfile, setUserProfile] = useState(USER_PROFILE_DATA);

  // Charger uniquement les chats et messages depuis localStorage
  useEffect(() => {
    const savedChats = localStorage.getItem("chats");
    const savedMessages = localStorage.getItem("messages");

    if (savedChats) setChats(JSON.parse(savedChats));
    if (savedMessages) {
      const allMessages = JSON.parse(savedMessages);
      if (currentChat.id in allMessages) {
        setMessages(allMessages[currentChat.id]);
      }
    }
  }, [currentChat.id]);

  // Sauvegarder uniquement les chats et messages
  useEffect(() => {
    if (messages.length > 0) {
      const savedMessages = JSON.parse(localStorage.getItem("messages") || "{}");
      savedMessages[currentChat.id] = messages;
      localStorage.setItem("messages", JSON.stringify(savedMessages));

      if (currentChat.id === "new" && messages.length >= 2) {
        const newChatId = `chat-${Date.now()}`;
        const newChat = {
          id: newChatId,
          title: messages[0].content.substring(0, 20) + "...",
          time: "À l'instant",
        };

        const updatedChats = [newChat, ...chats];
        setChats(updatedChats);
        localStorage.setItem("chats", JSON.stringify(updatedChats));
        setCurrentChat(newChat);

        const updatedMessages = { ...savedMessages };
        updatedMessages[newChatId] = messages;
        delete updatedMessages["new"];
        localStorage.setItem("messages", JSON.stringify(updatedMessages));
      }
    }
  }, [messages, chats, currentChat]);

  const saveProfile = () => {
    // Met simplement à jour le state local
    setIsEditingProfile(false);
  };

  const handleDeleteAccount = () => {
    // Réinitialise aux valeurs constantes
    setUserProfile(USER_PROFILE_DATA);
    setShowProfileModal(false);
    setShowDeleteConfirm(false);
  };

  // Gestion des conversations
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const createNewChat = () => {
    setCurrentChat({ id: "new", title: "Nouvelle discussion" });
    setMessages([]);
    setSidebarOpen(false);
  };

  const switchChat = (chatId) => {
    const chat = chats.find((c) => c.id === chatId);
    if (chat) {
      setCurrentChat(chat);
      const savedMessages = JSON.parse(localStorage.getItem("messages") || "{}");
      setMessages(chatId in savedMessages ? savedMessages[chatId] : []);
      setSidebarOpen(false);
    }
  };

  const deleteChat = (chatId) => {
    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));

    const savedMessages = JSON.parse(localStorage.getItem("messages") || "{}");
    if (chatId in savedMessages) {
      delete savedMessages[chatId];
      localStorage.setItem("messages", JSON.stringify(savedMessages));
    }

    if (currentChat.id === chatId) createNewChat();
  };

  // Fonctions de configuration
  const deleteAllChats = () => {
    if (confirm("Voulez-vous vraiment supprimer toutes les conversations ?")) {
      setChats([]);
      localStorage.removeItem("chats");
      localStorage.removeItem("messages");
      createNewChat();
      setShowConfigModal(false);
    }
  };

  const archiveAllChats = () => {
    console.log("Archivage des conversations");
    setShowConfigModal(false);
  };

  const manageChats = () => {
    console.log("Gestion des archives");
    setShowConfigModal(false);
  };

  const openProfile = () => {
    setShowProfileModal(true);
    setShowConfigModal(false);
  };

  // Gestion des messages
  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      setTimeout(() => {
        const responses = [
          "Je comprends votre question. Pouvez-vous donner plus de détails ?",
          "C'est une question intéressante. Voici ce que j'en pense...",
          "D'après mes connaissances, ce sujet a plusieurs aspects à considérer.",
          "Je serais ravi de vous aider ! Laissez-moi vous expliquer comment cela fonctionne.",
          "Merci pour votre question. La réponse dépend de plusieurs facteurs.",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Erreur lors de la réponse :", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Désolé, une erreur s'est produite. Veuillez réessayer." },
      ]);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-950 text-gray-300">
      {showConfigModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center ">
    <div 
      className="relative bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl w-full max-w-md mx-4 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-gradient-to-r from-bg-gray-700/80 to-bg-gray-700/80 p-4">
        <div className="flex items-center">
          <Archive className="text-white mr-2" size={22} />
          <h3 className="text-xl font-semibold text-white">Gestion des conversations</h3>
          <button 
            onClick={() => setShowConfigModal(false)}
            className="ml-auto p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="text-white" size={20} />
          </button>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <button
          onClick={archiveAllChats}
          className="w-full flex items-center gap-4 p-3 hover:bg-purple-50 dark:hover:bg-gray-700/80 rounded-lg transition-all duration-200 group border border-gray-100 dark:border-gray-700"
        >
          <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
            <Archive size={18} className="text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-left">
            <span className="block font-medium text-gray-800 dark:text-gray-100">Archiver tous les chats</span>
            <span className="block text-xs text-gray-500 dark:text-gray-400">Sauvegarde toutes les conversations</span>
          </div>
        </button>
        
        <button
          onClick={deleteAllChats}
          className="w-full flex items-center gap-4 p-3 hover:bg-red-50 dark:hover:bg-gray-700/80 rounded-lg transition-all duration-200 group border border-gray-100 dark:border-gray-700"
        >
          <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors">
            <Trash2 size={18} className="text-red-600 dark:text-red-400" />
          </div>
          <div className="text-left">
            <span className="block font-medium text-gray-800 dark:text-gray-100">Supprimer tous les chats</span>
            <span className="block text-xs text-gray-500 dark:text-gray-400">Action irréversible</span>
          </div>
        </button>
        <Link to="/archives"><button
          onClick={manageChats}
          className="w-full flex items-center gap-4 p-3 hover:bg-blue-50 dark:hover:bg-gray-700/80 rounded-lg transition-all duration-200 group border border-gray-100 dark:border-gray-700"
        >
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
            <Sliders size={18} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <span className="block font-medium text-gray-800 dark:text-gray-100">Gérer les archives</span>
            <span className="block text-xs text-gray-500 dark:text-gray-400">Voir les conversations archivées</span>
          </div>
        </button></Link>
        
      </div>
      <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
        <button
          onClick={() => setShowConfigModal(false)}
          className="px-4 py-2 text-sm rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-800 dark:text-gray-200"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
)}

      {showProfileModal && (
  <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
    <div 
      className="bg-white rounded-lg w-full max-w-sm border border-gray-200 shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center p-4 border-b border-gray-200  text-purple-700">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg mr-2">
          <BotMessageSquare size={25} />
        </div>
        <h1 className="text-xl font-bold">ChatBot</h1>
        <button 
          onClick={() => {
            setShowProfileModal(false);
            setIsEditingProfile(false);
          }}
          className="ml-auto text-purple transition-colors duration-200"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4">
        {!isEditingProfile ? (
          <>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600">
                  <User className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{userProfile.fullName}</h3>
                  <p className="text-sm text-gray-500">{userProfile.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <button
                onClick={() => setIsEditingProfile(true)}
                className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700"
              >
                <Edit className="text-gray-500" size={18} />
                <span>Modifier le profil</span>
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Nom complet</label>
              <input
                type="text"
                value={userProfile.fullName}
                onChange={(e) => setUserProfile({...userProfile, fullName: e.target.value})}
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={userProfile.email}
                onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Mot de passe</label>
              <input
                type="password"
                value={userProfile.password}
                onChange={(e) => setUserProfile({...userProfile, password: e.target.value})}
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                placeholder="Nouveau mot de passe"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={() => setIsEditingProfile(false)}
                className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-gray-700"
              >
                Annuler
              </button>
              <button
                onClick={saveProfile}
                className="px-4 py-2 text-sm rounded bg-purple-600 hover:bg-purple-500 transition-colors duration-200 text-white"
              >
                Enregistrer
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 space-y-3">
        {!isEditingProfile && (
          <>
            <button 
              onClick={() => setShowProfileModal(false)}
              className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700 text-sm"
            >
              <LogOut className="text-gray-500" size={16} />
              <span>Déconnexion</span>
            </button>
            
            <button 
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full flex items-center gap-3 p-2 hover:bg-red-50 rounded transition-colors duration-200 text-red-600 text-sm"
            >
              <Trash2 className="text-red-500" size={16} />
              <span>Supprimer mon compte</span>
            </button>
          </>
        )}
      </div>
    </div>
  </div>
)}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 "></div>
          <div className="bg-white rounded-lg w-full max-w-sm p-6 border border-gray-200 shadow-xl relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="text-red-500" size={20} />
                <span>Confirmer la suppression</span>
              </h3>
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">
              Êtes-vous sûr de vouloir supprimer définitivement votre compte ? 
              Cette action est irréversible et supprimera toutes vos données.
            </p>
            
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">
                Entrez votre mot de passe pour confirmer
              </label>
              <input
                type="password"
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                placeholder="Votre mot de passe"
              />
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-gray-700"
              >
                Annuler
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 text-sm rounded bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white"
              >
                Supprimer définitivement
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-900 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          onClose={() => setSidebarOpen(false)}
          chats={chats}
          currentChat={currentChat}
          onChatSelect={switchChat}
          onNewChat={createNewChat}
          onDeleteChat={deleteChat}
          onOpenConfiguration={() => setShowConfigModal(true)}
          onOpenProfile={openProfile}
        />
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">
        <ChatHeader 
          toggleSidebar={toggleSidebar} 
          title={currentChat.title}
          onOpenConfig={() => setShowConfigModal(true)}
        />

        <div className="flex-1 overflow-hidden">
          {messages.length === 0 && !isLoading ? (
            <div className="flex justify-center items-center h-full text-gray-500 text-sm">
              Aucune conversation pour l'instant.
            </div>
          ) : (
            <ChatMessages messages={messages} isLoading={isLoading} />
          )}
        </div>

        <div className="p-4">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          <p className="mt-2 text-center text-xs text-gray-500">
            Le chatbot peut produire des informations inexactes.
          </p>
        </div>
      </div>
    </div>
  );
}