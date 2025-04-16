import React from "react"
import { Menu } from "lucide-react"

export function ChatHeader({ toggleSidebar, title }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 p-4">
      <button
        onClick={toggleSidebar}
        className="md:hidden rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </button>
      <h1 className="mx-auto text-xl font-semibold text-white truncate">{title || "Chatbot"}</h1>
    </div>
  )
}