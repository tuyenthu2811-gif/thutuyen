import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  MapPin, 
  Utensils, 
  Calendar, 
  Hotel, 
  MessageSquare, 
  BookOpen,
  Sparkles
} from "lucide-react";

import Header from "./components/Header";
import OverviewTab from "./components/OverviewTab";
import AttractionsTab from "./components/AttractionsTab";
import CuisineTab from "./components/CuisineTab";
import HotelsTab from "./components/HotelsTab";
import ItineraryTab from "./components/ItineraryTab";
import Chatbot from "./components/Chatbot";

type ActiveTabType = "overview" | "attractions" | "cuisine" | "itinerary" | "hotels";
type MobileViewModeType = "guide" | "chat";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("overview");
  const [mobileViewMode, setMobileViewMode] = useState<MobileViewModeType>("guide");

  const tabList = [
    { id: "overview", label: "Tổng quan", icon: Compass, color: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
    { id: "attractions", label: "Địa điểm", icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-50" },
    { id: "cuisine", label: "Ẩm thực", icon: Utensils, color: "text-amber-600", bg: "bg-amber-50" },
    { id: "itinerary", label: "Lịch trình", icon: Calendar, color: "text-sky-600", bg: "bg-sky-50" },
    { id: "hotels", label: "Khách sạn", icon: Hotel, color: "text-rose-600", bg: "bg-rose-50" },
  ];

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "attractions":
        return <AttractionsTab />;
      case "cuisine":
        return <CuisineTab />;
      case "itinerary":
        return <ItineraryTab />;
      case "hotels":
        return <HotelsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] flex flex-col font-sans text-gray-900 antialiased selection:bg-[#FF6B35]/20 pb-12">
      {/* 1. Header Hero bar */}
      <Header />

      <main className="max-w-7xl w-full mx-auto px-4 mt-6 flex-1 flex flex-col gap-6">
        
        {/* Mobile View Toggle Segmented Control (Only visible on screens < lg) */}
        <div className="lg:hidden w-full bg-white border border-[#E5E1D8] p-1.5 rounded-[20px] shadow-xs flex items-center shrink-0">
          <button
            onClick={() => setMobileViewMode("guide")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              mobileViewMode === "guide"
                ? "bg-[#1A1A1A] text-white shadow-xs"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Cẩm Nang Sài Gòn
          </button>
          
          <button
            onClick={() => setMobileViewMode("chat")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              mobileViewMode === "chat"
                ? "bg-[#1A1A1A] text-white shadow-xs"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            <div className="relative">
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full"></span>
              <MessageSquare className="w-4 h-4" />
            </div>
            Tư Vấn Thân Thiện (AI)
          </button>
        </div>

        {/* Dual Column Workspace layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT PANEL: The Interactive Guide Book (Col span 7 on large desktop) */}
          <section 
            id="guidebook-panel"
            className={`lg:col-span-7 space-y-6 ${
              mobileViewMode === "guide" ? "block" : "hidden lg:block"
            }`}
          >
            {/* Guidebook Navigation Tabs */}
            <div className="bg-white border border-[#E5E1D8] p-4 rounded-[24px] shadow-xs">
              <div className="flex items-center justify-between gap-2 border-b border-[#E5E1D8] pb-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B35] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#FF6B35]" /> Sổ tay cẩm nang du ngoạn
                </span>
                <span className="text-[10px] bg-slate-50 border border-[#E5E1D8] text-gray-500 font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Bản địa hóa 100%
                </span>
              </div>

              {/* Scrollable Horizontal Tabs list */}
              <div className="flex gap-2 p-0.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                {tabList.map((tab) => {
                  const IconComp = tab.icon;
                  const isSelected = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as ActiveTabType)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                        isSelected
                          ? `bg-[#1A1A1A] text-white shadow-xs font-black`
                          : "text-gray-500 hover:text-gray-900 hover:bg-slate-100"
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isSelected ? "text-[#FF6B35]" : "text-gray-400"}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Tab Panel Body */}
            <div className="bg-white border border-[#E5E1D8] p-6 md:p-8 rounded-[24px] shadow-xs min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderActiveTabContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* RIGHT PANEL: Embedded Travel AI Chatbot (Col span 5 on large desktop) */}
          <section 
            id="chatbot-panel"
            className={`lg:col-span-5 ${
              mobileViewMode === "chat" ? "block" : "hidden lg:block"
            }`}
          >
            <Chatbot />
          </section>

        </div>
      </main>

      {/* Styled minimalistic credit label */}
      <footer className="mt-12 text-center text-[11px] font-bold uppercase tracking-wider text-gray-400 font-sans max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E5E1D8] pt-6">
        <p>© 2026 Sài Gòn Travel Assistant. Phát triển dựa trên mô hình tự nhiên Gemini 3.5.</p>
        <div className="flex gap-4">
          <span className="hover:text-gray-700 transition-colors">Địa phương hóa bởi Hướng dẫn viên bản địa 😊</span>
          <span className="text-[#E5E1D8]">|</span>
          <span className="hover:text-[#FF6B35] transition-colors text-[#FF6B35]">TP. Hồ Chí Minh hân hoan chào đón bạn! 🌸</span>
        </div>
      </footer>
    </div>
  );
}
