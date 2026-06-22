import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Message } from "../types";
import { Send, MapPin, Compass, AlertCircle, Trash2, HelpCircle } from "lucide-react";

const SUGGESTIONS = [
  "Chào bạn, hãy giới thiệu sơ nét về du lịch Sài Gòn nha! 😊",
  "Nên ăn cơm tấm sườn nướng ở quán nào ngon nhất?",
  "Tư vấn cho mình lịch trình 1 ngày tham quan Quận 1",
  "Khách sạn giá rẻ ở Sài Gòn quanh khu Phạm Ngũ Lão"
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      text: "Dạ em xin kính chào anh/chị ạ! Em là hướng dẫn viên ảo bản địa chuyên khám phá Sài Gòn đây. Anh/Chị cần em gợi ý quán cơm tấm nức tiếng, danh lam cổ kính hay lịch trình lượn lờ phố phường 🛵 hông nè? Đặt câu hỏi cho em hướng dẫn nhé! 😊🍁",
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    setErrorMsg(null);
    setInput("");

    // Create user message
    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      role: "user",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Map history safely without breaking model requirements
      const recentHistoryWithTextOnly = messages.map((m) => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: recentHistoryWithTextOnly
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Lỗi máy chủ liên kết: ${res.status}`);
      }

      const data = await res.json();
      
      const modelMsg: Message = {
        id: Math.random().toString(36).substring(7),
        role: "model",
        text: data.reply,
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err.message || "Không thể truyền phát nội dung. Vui lòng kiểm tra lại cấu hình khoá Secrets GEMINI_API_KEY."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const clearChat = () => {
    if (window.confirm("Xoá cuộc trò chuyện cũ để bắt đầu câu chuyện mới?")) {
      setMessages([
        {
          id: "welcome",
          role: "model",
          text: "Dạ em đây ạ! Sẵn sàng đồng hành cùng bạn đi muôn nơi tại thành phố Sài Gòn! 😊",
          timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
      setErrorMsg(null);
    }
  };

  const renderMessageText = (text: string) => {
    return text.split("\n").map((line, i) => {
      const trimmedLine = line.trim();
      
      // Bullets check
      if (trimmedLine.startsWith("-") || trimmedLine.startsWith("*") || trimmedLine.startsWith("+")) {
        return (
          <li key={i} className="ml-4 list-disc text-xs md:text-sm leading-relaxed mb-1 font-sans">
            {trimmedLine.substring(1).trim()}
          </li>
        );
      }
      
      // Heading bullet mock
      if (trimmedLine.startsWith("###")) {
        return (
          <h5 key={i} className="text-xs md:text-sm font-bold font-display text-gray-950 mt-3 mb-1.5 first:mt-0">
            {trimmedLine.replace("###", "").trim()}
          </h5>
        );
      }
      if (trimmedLine.startsWith("##")) {
        return (
          <h4 key={i} className="text-sm md:text-base font-bold font-display text-gray-950 mt-4 mb-2 first:mt-0">
            {trimmedLine.replace("##", "").trim()}
          </h4>
        );
      }

      // Default text flow
      return trimmedLine ? (
        <p key={i} className="text-xs md:text-sm leading-relaxed mb-2 last:mb-0 font-sans">
          {trimmedLine}
        </p>
      ) : (
        <div key={i} className="h-1.5" />
      );
    });
  };

  return (
    <div className="flex flex-col bg-white border border-[#E5E1D8] rounded-[24px] overflow-hidden shadow-xs h-[560px] lg:h-[660px]">
      
      {/* Bot Header Title */}
      <div className="px-5 py-4 bg-[#1A1A1A] text-white flex items-center justify-between border-b border-[#E5E1D8] shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#1A1A1A] rounded-full animate-pulse"></span>
            <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
              <Compass className="w-4 h-4 text-[#FF6B35]" />
            </div>
          </div>
          <div className="text-left">
            <h4 className="font-display font-bold text-xs md:text-sm uppercase tracking-wide">
              Mẹo Trò Chuyện 🛵
            </h4>
            <p className="text-[10px] text-gray-400 font-sans">Hướng dẫn bản xứ Sài Gòn</p>
          </div>
        </div>

        {messages.length > 1 && (
          <button
            onClick={clearChat}
            className="p-1 px-3 text-[10px] uppercase font-bold text-gray-300 hover:text-white hover:bg-white/5 border border-white/10 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
          >
            <Trash2 className="w-3 h-3" />
            <span>Mới</span>
          </button>
        )}
      </div>

      {/* Messages Window */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-50/40">
        
        {messages.map((msg) => {
          const isModel = msg.role === "model";
          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${isModel ? "justify-start" : "justify-end"} items-start gap-2.5`}
            >
              {isModel && (
                <div className="p-1.5 bg-[#FF6B35]/15 border border-[#FF6B35]/20 rounded-lg text-[#FF6B35] shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
              )}
              
              <div className="max-w-[85%] flex flex-col">
                <div
                  className={`px-4 py-3 rounded-[18px] ${
                    isModel
                      ? "bg-white text-[#1A1A1A] border border-[#E5E1D8] rounded-tl-none text-left shadow-xs"
                      : "bg-[#1A1A1A] text-white rounded-tr-none text-left"
                  }`}
                >
                  {renderMessageText(msg.text)}
                </div>
                <span className={`text-[9px] text-gray-400 font-sans mt-1 ${!isModel ? "self-end" : "self-start"}`}>
                  {msg.timestamp}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start items-start gap-2.5">
            <div className="p-1.5 bg-[#FF6B35]/10 border border-[#FF6B35]/25 rounded-lg text-[#FF6B35] shrink-0">
              <Compass className="w-3.5 h-3.5 animate-spin" />
            </div>
            <div className="bg-white border border-[#E5E1D8] rounded-[18px] rounded-tl-none px-4 py-3 shadow-xs">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                <span className="text-[10px] text-gray-400 font-bold ml-1 uppercase">Sài Gòn đang lắng nghe...</span>
              </div>
            </div>
          </div>
        )}

        {/* API key Error Block */}
        {errorMsg && (
          <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 p-4 rounded-[18px] text-left">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-red-800 uppercase tracking-wide">Lỗi phân tích cú pháp</p>
              <p className="text-xs text-red-700 mt-1">{errorMsg}</p>
              <p className="text-[9px] text-red-500 mt-2 font-mono">
                * Vui lòng cài đặt giá trị GEMINI_API_KEY trong thẻ Secrets.
              </p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Items */}
      <div className="bg-white border-t border-[#E5E1D8] p-3 flex flex-col gap-2 shrink-0">
        <span className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 text-left">
          <HelpCircle className="w-3.5 h-3.5 text-[#FF6B35]" /> Gợi ý khuyên hỏi:
        </span>
        <div className="flex gap-2 p-0.5 overflow-x-auto no-scrollbar scroll-smooth">
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              disabled={isLoading}
              onClick={() => handleSendMessage(suggestion)}
              className="whitespace-nowrap px-3 py-1.5 bg-slate-50 border border-[#E5E1D8] hover:bg-[#FF6B35]/5 hover:border-[#FF6B35]/30 text-[11px] text-gray-700 hover:text-gray-950 rounded-full transition-colors cursor-pointer font-sans"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input Message Form */}
      <form
        onSubmit={handleFormSubmit}
        className="px-4 py-3 bg-white border-t border-[#E5E1D8] flex items-center gap-2 shrink-0"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            disabled={isLoading}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Viết tin nhắn cho hướng dẫn viên bạn nhé..."
            className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-[#E5E1D8] rounded-[18px] text-xs text-gray-800 placeholder-gray-400 focus:outline-hidden focus:bg-white focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all font-sans"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300">
            <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
          </span>
        </div>
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="p-3 bg-[#FF6B35] hover:bg-[#e0531f] disabled:bg-slate-100 disabled:text-gray-300 text-white rounded-[18px] transition-all shadow-sm flex items-center justify-center cursor-pointer shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
