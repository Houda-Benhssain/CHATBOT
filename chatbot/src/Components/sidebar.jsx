import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import {
  Plus,
  MessageSquare,
  Mic,
  Lightbulb,
  Settings,
  LogOut,
  X,
  Trash2,
  User,
=======
import { 
  Plus, 
  MessageSquare, 
  Mic, 
  Lightbulb, 
  Settings, 
  LogOut, 
  X, 
  Trash2, 
  User, 
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
  Sliders,
  Archive
} from "lucide-react";

export function Sidebar({
  onClose,
  chats,
  currentChat,
  onChatSelect,
  onNewChat,
  onDeleteChat,
  onOpenProfile,
  onDeleteAllChats,
  onArchiveAllChats,
  onManageChats,
  onOpenConfiguration
}) {
  const [showHistory, setShowHistory] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const dropdownRef = useRef(null);

<<<<<<< HEAD
=======
  // User info
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
  const user = {
    name: "Utilisateur",
  };

  const chatIcons = {
    chat1: MessageSquare,
    chat2: Mic,
    chat3: Lightbulb,
  };

  const getIconForChat = (chatId) => {
    return chatIcons[chatId] || MessageSquare;
  };

<<<<<<< HEAD
=======
  // Close dropdown when clicking outside
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSettingsDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNewChatClick = () => {
    if (!showHistory) {
      setShowHistory(true);
    } else {
      onNewChat();
    }
  };

  const handleChatSelect = (chatId) => {
    onChatSelect(chatId);
    setShowHistory(false);
  };

  const handleDeleteChat = (e, chatId) => {
    e.stopPropagation();
    if (confirm("Êtes-vous sûr de vouloir supprimer cette conversation ?")) {
      onDeleteChat(chatId);
      if (currentChat.id === chatId) {
        onNewChat();
      }
    }
  };

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
  };

  const handleProfileClick = () => {
    onOpenProfile();
    setShowSettingsDropdown(false);
  };

  const handleConfigurationClick = () => {
    setShowConfigModal(true);
    setShowSettingsDropdown(false);
  };

  const handleDeleteAll = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer TOUTES les conversations ?")) {
      onDeleteAllChats();
      setShowConfigModal(false);
    }
  };

  const handleArchiveAll = () => {
    onArchiveAllChats();
    setShowConfigModal(false);
  };

  const handleManageChats = () => {
    onManageChats();
    setShowConfigModal(false);
  };

  return (
    <div className="flex h-full flex-col bg-gray-900 p-4 relative">
<<<<<<< HEAD
      
      {/* Bouton nouvelle conversation */}
=======
      {/* Configuration Modal - Centrée sur la page */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fond semi-transparent avec flou */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowConfigModal(false)}
          />
          
          {/* Contenu de la modale */}
          <div className="relative bg-gray-800 rounded-lg border border-gray-700 shadow-xl w-full max-w-md mx-4">
            {/* En-tête */}
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Archive className="text-purple-400" />
                <span>Gestion des conversations</span>
              </h3>
            </div>
            
            {/* Options */}
            <div className="p-4 space-y-3">
              <button
                onClick={handleArchiveAll}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg text-left"
              >
                <Archive className="text-purple-400" size={18} />
                <span>Archiver tous les chats</span>
              </button>
              
              <button
                onClick={handleDeleteAll}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg text-left text-red-400"
              >
                <Trash2 size={18} />
                <span>Supprimer tous les chats</span>
              </button>
              
              <button
                onClick={handleManageChats}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg text-left text-blue-400"
              >
                <Sliders size={18} />
                <span>Gérer les archives</span>
              </button>
            </div>

            {/* Pied de page */}
            <div className="p-3 border-t border-gray-700 flex justify-end">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 text-sm rounded-lg bg-gray-700 hover:bg-gray-600"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bouton Nouvelle conversation */}
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
      <button
className="mb-4 flex w-full items-center justify-start gap-2 rounded-md bg-purple-800 px-4 py-2 text-white hover:bg-purple-700 transition-colors"        onClick={handleNewChatClick}
      >
        <Plus size={16} />
        <span>Nouvelle conversation</span>
      </button>

      {/* Historique des conversations */}
      {showHistory && (
        <div className="flex-1 overflow-y-auto">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-gray-500">Historique</h3>
          {chats.length > 0 ? (
            chats.map((chat) => {
              const ChatIcon = getIconForChat(chat.id);
              return (
                <div
                  key={chat.id}
                  className={`mb-2 flex cursor-pointer items-center gap-3 rounded-md p-2 ${
                    currentChat.id === chat.id ? "bg-gray-800" : "hover:bg-gray-800"
                  } group relative`}
                  onClick={() => handleChatSelect(chat.id)}
                >
                  <ChatIcon size={18} className="text-gray-400" />
                  <div className="flex flex-1 flex-col overflow-hidden">
                    <span className="text-sm truncate">{chat.title}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <button
                    onClick={(e) => handleDeleteChat(e, chat.id)}
                    className="absolute right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-opacity p-1 rounded-full hover:bg-gray-700"
                    title="Supprimer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="px-2 py-4 text-center text-sm text-gray-500">Aucune conversation</div>
          )}
        </div>
      )}

      {!showHistory && <div className="flex-1"></div>}

      {/* Menu Paramètres */}
      <div className="mt-auto border-t border-gray-800 pt-4">
        <div className="relative" ref={dropdownRef}>
          <div
            className="mb-2 flex cursor-pointer items-center justify-between rounded-md p-2 hover:bg-gray-800"
            onClick={toggleSettingsDropdown}
          >
            <div className="flex items-center gap-3">
              <Settings size={18} className="text-gray-400" />
              <span className="text-sm">Paramètres</span>
            </div>
            <span className={`transition-transform duration-200 ${showSettingsDropdown ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>

          {showSettingsDropdown && (
            <div className="absolute bottom-full left-0 mb-1 w-full rounded-md bg-gray-800 py-2 shadow-lg">
              <div className="border-b border-gray-700 px-3 py-2">
                <div className="text-sm font-medium text-white">{user.name}</div>
              </div>
              <Link to="/profile">
                <div
                  className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-gray-700"
                  onClick={handleProfileClick}
                >
                  <User size={16} className="text-gray-400" />
                  <span>Profil</span>
                </div>
              </Link>
              <div
                className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-gray-700"
                onClick={onOpenConfiguration}
              >
                <Sliders size={16} className="text-gray-400" />
                <span>Options de conversation</span>
              </div>
            </div>
          )}
        </div>

        <Link to="/">
          <div className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-gray-800">
            <LogOut size={18} className="text-gray-400" />
            <span className="text-sm">Déconnexion</span>
          </div>
        </Link>
      </div>

<<<<<<< HEAD
      {/* Bouton Fermer mobile */}
=======
      {/* Bouton Fermer (mobile) */}
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
      <button
        onClick={onClose}
        className="absolute right-2 top-2 md:hidden rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
      >
        <span className="sr-only">Fermer</span>
        <X className="h-4 w-4" />
      </button>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> fc5574f453a270ecf36b34b7b1d7e0981a2ac196
