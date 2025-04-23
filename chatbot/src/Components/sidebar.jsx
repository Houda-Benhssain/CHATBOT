import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
<<<<<<< HEAD
  Sliders,
  Archive
=======
  Sliders
>>>>>>> e8fb4ae74220ea5c510554a675ab3acf36f54151
} from "lucide-react";

export function Sidebar({
  onClose,
  chats,
  currentChat,
  onChatSelect,
  onNewChat,
  onDeleteChat,
  onOpenProfile,
  onOpenConfiguration
}) {
  const [showHistory, setShowHistory] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div className="flex h-full flex-col bg-gray-900 p-4 relative">
<<<<<<< HEAD
      
      {/* Bouton nouvelle conversation */}
      <button
className="mb-4 flex w-full items-center justify-start gap-2 rounded-md bg-purple-900 px-4 py-2 text-white hover:bg-purple-700 transition-colors"        onClick={handleNewChatClick}
=======
      <button
        className="mb-4 flex w-full items-center justify-start gap-2 rounded-md bg-purple-800 px-4 py-2 text-white hover:bg-purple-700 transition-colors"
        onClick={handleNewChatClick}
>>>>>>> e8fb4ae74220ea5c510554a675ab3acf36f54151
      >
        <Plus size={16} />
        <span>Nouvelle conversation</span>
      </button>

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
              <div
                className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-gray-700"
                onClick={onOpenProfile}
              >
                <User size={16} className="text-gray-400" />
                <span>Profil</span>
              </div>
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
>>>>>>> e8fb4ae74220ea5c510554a675ab3acf36f54151
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
>>>>>>> e8fb4ae74220ea5c510554a675ab3acf36f54151
