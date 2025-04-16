import React from "react"
import { useEffect, useRef } from "react"

export function ChatMessages({ messages, isLoading }) {
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex h-full flex-col overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h2 className="mb-2 text-2xl font-semibold text-gray-400">Démarrez une conversation ou utilisez votre voix pour discuter !</h2>
          <p className="text-sm text-gray-500">Posez n'importe quelle question ou cliquez sur l'icône du microphone .</p>
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 max-w-[80%] rounded-lg p-3 ${
                message.role === "user" ? "ml-auto bg-purple-700 text-white" : "bg-gray-800 text-gray-200"
              }`}
            >
              {message.content}
            </div>
          ))}

          {/* Loading indicator */}
          {/* {isLoading && (
            <div className="mb-4 max-w-[80%] rounded-lg p-3 bg-gray-800 text-gray-200">
              <div className="flex space-x-2">
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div
                  className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          )} */}
        </>
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}