import React from "react"
import { Link } from "react-router-dom"
import { MessageCircle, Check, Send} from "lucide-react"
import image from "../image/chatbot3.jpg"
import Footer from "../Components/Footer"

export default function ChatbotInterface() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
         <Link to="/">
          <div className="bg-purple-600 text-white p-2 rounded-lg">
            <MessageCircle size={20} />
          </div>
          </Link>
          <span className="text-xl font-bold text-purple-900">Chatbot</span>
        </div>
        <div className="flex gap-2">
          <Link
            to="/login"
            className="px-4 py-1 border border-purple-300 rounded-full text-purple-700 hover:bg-purple-50 transition">
            Se connecter
          </Link>
          <Link to="/signup" className="px-4 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
            S'inscrire
          </Link>
        </div>
      </header>

      <section id="home" className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Découvrez l'avenir de l'interaction intelligente
            <span className="block text-orange-500">Chatbot</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md">
          Découvrez la nouvelle génération de conversations alimentées par l'IA.
          Notre chatbot est là pour vous assister 24h/24 et 7j/7.          </p>
        </div>

        {/* Right Side - Chatbot Demo */}
        <div className="md:w-1/2 max-w-md">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <div className="relative">
              <img src={image } alt="AI Robot" className="w-full" />

              {/* Chat Bubbles */}
              <div className="absolute top-1/6 left-4">
                <div className="bg-white text-sm p-2 rounded-lg shadow-md max-w-[180px]">
                  <p>Salut! Comment puis-je vous aider ?</p>
                </div>
              </div>

              <div className="absolute top-1/2 right-4">
                <div className="bg-purple-600 text-white text-sm p-2 rounded-lg shadow-md max-w-[180px]">
                  <p>Salut chatbot ! J'ai besoin de ton aide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Styled like the image */}
      <section id="about" className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="uppercase tracking-wider text-sm font-medium">About Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Découvrez notre assistant chatbot IA - ChatBot
              </h2>

              <p className="text-white/90 mb-8 max-w-lg">
              Notre chatbot alimenté par l'IA est conçu pour transformer la manière dont vous interagissez avec la technologie. Grâce à des capacités avancées de traitement du langage naturel et d'apprentissage automatique, Chatbot comprend le contexte,
               apprend des interactions et fournit une assistance personnalisée adaptée à vos besoins.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-2">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check size={16} className="text-white" />
                  </div>
                  <span>Amélioration de l'efficacité</span>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check size={16} className="text-white" />
                  </div>
                  <span>Collaboration créative</span>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check size={16} className="text-white" />
                  </div>
                  <span>Apprentissage et exploration</span>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check size={16} className="text-white" />
                  </div>
                  <span>Assistance instantanée 24/7</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  to="/chat"
                  className="px-6 py-3 bg-white text-purple-700 font-medium rounded-md hover:bg-white/90 transition inline-block" >
                 Parlons-en !
                </Link>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="md:w-1/2 relative">
              <div className="relative z-10 ml-auto w-[280px] md:w-[320px] lg:w-[380px]">
                <div className="rounded-[40px] overflow-hidden border-[8px] border-black bg-black shadow-2xl">
                  <div className="relative bg-gray-900 aspect-[9/19]">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-10"></div>

                    {/* Chat Interface */}
                    <div className="h-full overflow-hidden flex flex-col">
                      {/* Header */}
                      <div className="bg-gray-800 p-3 flex items-center justify-between">
                        <div className="bg-purple-700  text-white text-xs px-2 py-1 rounded-full">Nouvelle discussion</div>
                      </div>

                    
                      {/* Chat Content */}
                      <div className="flex-1 p-3 overflow-y-auto space-y-3">
                        {/* Bot Message */}
                        <div className="bg-gray-700 rounded-lg p-2 text-white text-xs max-w-[80%]">
                          <p>Bonjour, j'ai besoin de quelques conseils à propos des chatbots.</p>
                        </div>

                        {/* User Message */}
                        <div className="bg-purple-700 rounded-lg p-2 text-white text-xs max-w-[80%] ml-auto">
                          <p>Avec plaisir ! Que souhaitez-vous savoir ?</p>
                        </div>
  
                        <div className="bg-gray-700 rounded-lg p-2 text-white text-xs max-w-[80%]">
                          <p>J'ai quelques questions concernant les chatbots.</p>
                        </div>
                      </div>

                      {/* Input Area */}
                      <div className="bg-gray-800 p-3 flex items-center">
                        <div className="bg-gray-700 rounded-full flex-1 flex items-center px-3 py-2">
                          <span className="text-gray-400 text-xs">Message chatbot...</span>
                        </div>
                        <div className="ml-2 bg-purple-700  p-2 rounded-full">
                          <Send className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
