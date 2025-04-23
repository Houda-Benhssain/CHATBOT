import React, { useState, useEffect } from "react";
import { Sidebar } from "../Components/sidebar";
import { ChatHeader } from "../Components/chat-header";
import { ChatMessages } from "../Components/chat-messages";
import { ChatInput } from "../Components/chat-input";
import { Archive, Trash2, Sliders, } from "lucide-react";

export default function ChatInterface() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState({ id: "new", title: "New Chat" });
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

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

  useEffect(() => {
    if (messages.length > 0) {
      const savedMessages = JSON.parse(localStorage.getItem("messages") || "{}");
      savedMessages[currentChat.id] = messages;
      localStorage.setItem("messages", JSON.stringify(savedMessages));

      if (currentChat.id === "new" && messages.length >= 2) {
        createAndSaveNewChat(messages);
      }
    }
  }, [messages]);

  const createAndSaveNewChat = (messageList) => {
    const newChatId = `chat-${Date.now()}`;
    const newChat = {
      id: newChatId,
      title: messageList[0].content.substring(0, 20) + "...",
      time: "Just now",
    };

    const updatedChats = [newChat, ...chats];
    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
    setCurrentChat(newChat);

    const savedMessages = JSON.parse(localStorage.getItem("messages") || "{}");
    const updatedMessages = { ...savedMessages };
    updatedMessages[newChatId] = messageList;
    delete updatedMessages["new"];
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const createNewChat = () => {
    setCurrentChat({ id: "new", title: "New Chat" });
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
    if (!window.confirm("Are you sure you want to delete this chat?")) return;

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

  const deleteAllChats = () => {
    if (confirm("Are you sure you want to delete ALL chats?")) {
      setChats([]);
      localStorage.removeItem("chats");
      localStorage.removeItem("messages");
      createNewChat();
      setShowConfigModal(false);
    }
  };

  const archiveAllChats = () => {
    console.log("Archiving all chats... (placeholder)");
    setShowConfigModal(false);
  };

  const manageChats = () => {
    console.log("Managing archives... (placeholder)");
    setShowConfigModal(false);
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      setTimeout(() => {
        const responses = [
          "I understand what you're asking about. Can you provide more details?",
          "That's an interesting question. Here's what I think...",
          "Based on my knowledge, I can tell you that this topic has several aspects to consider.",
          "I'd be happy to help with that! Let me explain how it works.",
          "Thanks for your question. The answer depends on several factors.",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ]);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-950 text-gray-300">
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div 
            className="relative bg-gray-800/90 rounded-lg border border-gray-700 shadow-2xl w-full max-w-md mx-4 backdrop-blur-sm pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-700">
              
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sliders size={16} className="text-gray-400" />
                <span>Gestion des conversations</span>
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <button
                onClick={archiveAllChats}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-700/50 rounded-lg transition-colors group text-blue-400"
              >
                <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50">
                  <Archive size={18}  />
                </div>
                <span >Archiver tous les chats</span>
              </button>

              <button
                onClick={deleteAllChats}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-700/50 rounded-lg transition-colors group text-blue-400"
              >
                <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50">
                  <Trash2 size={18} />
                </div>
                <span>Supprimer tous les chats</span>
              </button>
              <button
                onClick={manageChats}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-700/50 rounded-lg transition-colors group text-blue-400"
              >
                <div className="p-2 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50">
                  <Sliders size={18} />
                </div>
                <span>Gérer les archives</span>
              </button>
            </div>
            <div className="p-3 border-t border-gray-700 flex justify-end">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 text-sm rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-auto" onClick={() => setShowConfigModal(false)} />
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
            Voice-enabled chatbot may produce inaccurate information about people, places, or facts.
          </p>
        </div>
      </div>
    </div>
  );
}
