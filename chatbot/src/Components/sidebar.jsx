import React from "react"
import { useState } from "react"
import { Plus, MessageSquare, Mic, Lightbulb, Settings, LogOut, X, Trash2 } from "lucide-react"

export function Sidebar({ onClose, chats, currentChat, onChatSelect, onNewChat, onDeleteChat }) {
  const [showHistory, setShowHistory] = useState(false)

  // Map chat IDs to icons
  const chatIcons = {
    chat1: MessageSquare,
    chat2: Mic,
    chat3: Lightbulb,
  }

  // Get default icon if not found in mapping
  const getIconForChat = (chatId) => {
    return chatIcons[chatId] || MessageSquare
  }

  const handleNewChatClick = () => {
    if (!showHistory) {
      // If history is not showing, show it
      setShowHistory(true)
    } else {
      // If history is already showing, create a new chat
      onNewChat()
    }
  }

  const handleChatSelect = (chatId) => {
    onChatSelect(chatId)
    setShowHistory(false)
  }

  const handleDeleteChat = (e, chatId) => {
    // Stop the click event from bubbling up to the parent
    e.stopPropagation()

    if (confirm("Are you sure you want to delete this chat?")) {
      onDeleteChat(chatId)

      // If we're deleting the current chat, create a new one
      if (currentChat.id === chatId) {
        onNewChat()
      }
    }
  }

  return (
    <div className="flex h-full flex-col bg-gray-900 p-4">
      <button
        className="mb-4 flex w-full items-center justify-start gap-2 rounded-md bg-purple-800 px-4 py-2 text-white hover:bg-purple-700 transition-colors"
        onClick={handleNewChatClick}
      >
        <Plus size={16} />
        <span>New chat</span>
      </button>

      {/* Chat history section - only shown when showHistory is true */}
      {showHistory && (
        <div className="flex-1 overflow-y-auto">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-gray-500">Chat History</h3>

          {chats.length > 0 ? (
            chats.map((chat) => {
              const ChatIcon = getIconForChat(chat.id)
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
                    title="Delete chat"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )
            })
          ) : (
            <div className="px-2 py-4 text-center text-sm text-gray-500">No chat history</div>
          )}
        </div>
      )}

      {/* Empty space when history is not shown */}
      {!showHistory && <div className="flex-1"></div>}

      <div className="mt-auto border-t border-gray-800 pt-4">
        <div className="mb-2 flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-gray-800">
          <Settings size={18} className="text-gray-400" />
          <span className="text-sm">Settings</span>
        </div>
        <div className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-gray-800">
          <LogOut size={18} className="text-gray-400" />
          <span className="text-sm">Log out</span>
        </div>
      </div>

      {/* Close button for mobile - only visible on small screens */}
      
    </div>
  )
}