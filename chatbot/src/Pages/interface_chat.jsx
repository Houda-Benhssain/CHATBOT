import React, { useState, useEffect } from "react"
import { Sidebar } from "../Components/sidebar"
import { ChatHeader } from "../Components/chat-header"
import { ChatMessages } from "../Components/chat-messages"
import { ChatInput } from "../Components/chat-input"

export default function ChatInterface() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [messages, setMessages] = useState([])

  const [currentChat, setCurrentChat] = useState({ id: "new", title: "New Chat" })

  const [chats, setChats] = useState([
    { id: "chat1", title: "Previous Chat 1", time: "2 days ago" },
    { id: "chat2", title: "Voice Assistant Help", time: "1 week ago" },
    { id: "chat3", title: "Project Ideas", time: "2 weeks ago" },
  ])

  const [isLoading, setIsLoading] = useState(false)

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedChats = localStorage.getItem("chats")
    const savedMessages = localStorage.getItem("messages")

    if (savedChats) {
      setChats(JSON.parse(savedChats))
    }

    if (savedMessages) {
      const allMessages = JSON.parse(savedMessages)
      if (currentChat.id in allMessages) {
        setMessages(allMessages[currentChat.id])
      }
    }
  }, [currentChat.id])

  // Save messages to localStorage when they change
  useEffect(() => {
    if (messages.length > 0) {
      const savedMessages = JSON.parse(localStorage.getItem("messages") || "{}")
      savedMessages[currentChat.id] = messages
      localStorage.setItem("messages", JSON.stringify(savedMessages))

      // Update chat title if it's a new chat
      if (currentChat.id === "new" && messages.length >= 2) {
        const newChatId = `chat-${Date.now()}` // Fix ID creation
        const newChat = {
          id: newChatId,
          title: messages[0].content.substring(0, 20) + "...",
          time: "Just now",
        }

        // Update chats list
        const updatedChats = [newChat, ...chats]
        setChats(updatedChats)
        localStorage.setItem("chats", JSON.stringify(updatedChats))

        // Update current chat
        setCurrentChat(newChat)

        // Move messages to new chat ID
        const updatedMessages = { ...savedMessages }
        updatedMessages[newChatId] = messages
        delete updatedMessages["new"]
        localStorage.setItem("messages", JSON.stringify(updatedMessages))
      }
    }
  }, [messages, chats, currentChat])

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Create a new chat
  const createNewChat = () => {
    setCurrentChat({ id: "new", title: "New Chat" })
    setMessages([])
    setSidebarOpen(false)
  }

  // Switch to a different chat
  const switchChat = (chatId) => {
    const chat = chats.find((c) => c.id === chatId)
    if (chat) {
      setCurrentChat(chat)

      // Load messages for this chat
      const savedMessages = JSON.parse(localStorage.getItem("messages") || "{}")
      if (chatId in savedMessages) {
        setMessages(savedMessages[chatId])
      } else {
        setMessages([])
      }

      // Close sidebar on mobile
      setSidebarOpen(false)
    }
  }

  // Delete a specific chat
  const deleteChat = (chatId) => {
    // Remove chat from state
    const updatedChats = chats.filter((chat) => chat.id !== chatId)
    setChats(updatedChats)

    // Update localStorage
    localStorage.setItem("chats", JSON.stringify(updatedChats))

    // Remove chat messages from localStorage
    const savedMessages = JSON.parse(localStorage.getItem("messages") || "{}")
    if (chatId in savedMessages) {
      delete savedMessages[chatId]
      localStorage.setItem("messages", JSON.stringify(savedMessages))
    }
  }

  // Handle sending a message
  const handleSendMessage = async (message) => {
    if (!message.trim()) return

    // Add user message
    const userMessage = { role: "user", content: message }
    setMessages((prev) => [...prev, userMessage])

    // Show loading state
    setIsLoading(true)

    try {
      // In a real app, you would call your AI API here
      // This is a simulated response
      setTimeout(() => {
        const responses = [
          "I understand what you're asking about. Can you provide more details?",
          "That's an interesting question. Here's what I think...",
          "Based on my knowledge, I can tell you that this topic has several aspects to consider.",
          "I'd be happy to help with that! Let me explain how it works.",
          "Thanks for your question. The answer depends on several factors.",
        ]

        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }])

        setIsLoading(false)
      }, 1000)

    } catch (error) {
      console.error("Error getting response:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-950 text-gray-300">
      {/* Sidebar - hidden on mobile unless toggled */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-900 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
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
        />
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <ChatHeader toggleSidebar={toggleSidebar} title={currentChat.title} />

        <div className="flex-1 overflow-hidden">
          <ChatMessages messages={messages} isLoading={isLoading} />
        </div>

        <div className="p-4">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          <p className="mt-2 text-center text-xs text-gray-500">
            Voice-enabled chatbot may produce inaccurate information about people, places, or facts.
          </p>
        </div>
      </div>
    </div>
  )
}
