import React from "react"
import { useState, useEffect } from "react"
import { Mic, Send, StopCircle } from "lucide-react"

export function ChatInput({ onSendMessage, isLoading }) {
  const [message, setMessage] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState(null)

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognitionInstance = new SpeechRecognition()

      recognitionInstance.continuous = true
      recognitionInstance.interimResults = true

      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("")

        setMessage(transcript)
      }

      recognitionInstance.onend = () => {
        setIsListening(false)
      }

      setRecognition(recognitionInstance)
    }

    return () => {
      if (recognition) {
        recognition.stop()
      }
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && !isLoading) {
      onSendMessage(message)
      setMessage("")
    }
  }

  const toggleListening = () => {
    if (!recognition) return

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      recognition.start()
      setIsListening(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message Chatbot..."
        className="w-full rounded-full bg-gray-800 py-3 pl-4 pr-24 text-gray-200 outline-none "
        disabled={isLoading}
      />
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
        <button
          type="button"
          className={`h-8 w-8 rounded-full flex items-center justify-center ${
            isListening ? "bg-red-500 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
          }`}
          onClick={toggleListening}
          disabled={!recognition}>
          {isListening ? <StopCircle className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          <span className="sr-only">{isListening ? "Stop voice input" : "Use voice input"}</span>
        </button>
        <button
          type="submit"
          className="h-8 w-8 rounded-full flex items-center justify-center bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none"
          disabled={!message.trim() || isLoading}>
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}
