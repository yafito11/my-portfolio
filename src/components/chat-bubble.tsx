"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Saya Revis, AI Assistant pribadi Yafie Yulianto. Ada yang bisa saya bantu tentang portofolio atau pengalaman Yafie?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim pesan");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Maaf, terjadi kesalahan saat memproses balasan." },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Maaf, saya tidak dapat terhubung ke server saat ini." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tombol Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce duration-500 hover:animate-none"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Jendela Chat */}
      {isOpen && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-blue-600/10 border-b border-blue-500/20 p-4 flex justify-between items-center backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Bot size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  Revis AI
                </h3>
                <p className="text-blue-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Area Pesan */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-900/50 backdrop-blur-3xl scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 max-w-[85%] ${
                  message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.role === "user"
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-blue-600/20 border border-blue-500/30"
                  }`}
                >
                  {message.role === "user" ? (
                    <User size={16} className="text-gray-300" />
                  ) : (
                    <Bot size={16} className="text-blue-400" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-2xl text-sm ${
                    message.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-sm"
                      : "bg-gray-800 border border-gray-700 text-gray-200 rounded-tl-sm whitespace-pre-wrap leading-relaxed shadow-lg shadow-black/20"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 max-w-[85%] mr-auto">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-blue-600/20 border border-blue-500/30">
                  <Bot size={16} className="text-blue-400" />
                </div>
                <div className="bg-gray-800 border border-gray-700 text-gray-400 p-3 flex items-center gap-2 rounded-2xl rounded-tl-sm shadow-lg shadow-black/20">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-sm">Mengetik...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Area Input */}
          <div className="p-4 bg-gray-900 border-t border-gray-800">
            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full p-1 pl-4 pr-1 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50 transition-all shadow-inner"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanya sesuatu tentang Yafie..."
                className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder:text-gray-500 w-full"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors shadow-md shadow-blue-900/50"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
