import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HOTELS } from "../data";
import { Hotel } from "../types";
import { MapPin, Star, CreditCard, ShieldCheck } from "lucide-react";

type FilterType = "all" | "budget" | "mid" | "luxury";

export default function HotelsTab() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredHotels = filter === "all" 
    ? HOTELS 
    : HOTELS.filter((hotel) => hotel.budgetCategory === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 text-left"
    >
      {/* Intro Header */}
      <div>
        <span className="text-[11px] uppercase tracking-widest font-bold text-[#FF6B35] block">
          🏨 GỢI Ý ĐỊA ĐIỂM LƯU TRÚ
        </span>
        <h3 className="text-xl font-display font-black text-slate-900 mt-1">
          Khách sạn khuyên dùng
        </h3>
        <p className="text-gray-500 text-xs md:text-sm mt-0.5">Một nơi lưu trú tốt giúp hành trình ý nghĩa hơn. Lọc theo nhu cầu ngân sách của bạn nhé 😊</p>
      </div>

      {/* Filter Tabs using Bento capsule style layout */}
      <div className="flex flex-wrap gap-2 bg-slate-100/60 p-1.5 rounded-[20px] border border-[#E5E1D8] max-w-md">
        <button
          onClick={() => setFilter("all")}
          className={`flex-1 min-w-[60px] text-xs px-3 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
            filter === "all"
              ? "bg-[#1A1A1A] text-white shadow-xs"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Tất cả
        </button>
        <button
          onClick={() => setFilter("budget")}
          className={`flex-1 min-w-[90px] text-xs px-3 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
            filter === "budget"
              ? "bg-[#2D6A4F] text-white shadow-xs"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          🎒 Giá rẻ
        </button>
        <button
          onClick={() => setFilter("mid")}
          className={`flex-1 min-w-[100px] text-xs px-3 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
            filter === "mid"
              ? "bg-[#A47148] text-white shadow-xs"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          🏨 Vừa tầm
        </button>
        <button
          onClick={() => setFilter("luxury")}
          className={`flex-1 min-w-[100px] text-xs px-3 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
            filter === "luxury"
              ? "bg-[#D00000] text-white shadow-xs"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          👑 Cao cấp
        </button>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredHotels.map((hotel, idx) => {
            let badgeBg = "border-[#2D6A4F] text-[#2D6A4F] bg-emerald-50/50";
            let typeText = "Giá rẻ • Tiết kiệm 🎒";
            if (hotel.budgetCategory === "mid") {
              badgeBg = "border-[#A47148] text-[#A47148] bg-amber-50/40";
              typeText = "Mức trung • Tiện nghi 🏨";
            } else if (hotel.budgetCategory === "luxury") {
              badgeBg = "border-[#D00000] text-[#D00000] bg-rose-50/40";
              typeText = "Xa hoa • Cao cấp 👑";
            }

            return (
              <motion.div
                key={hotel.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#E5E1D8] rounded-[24px] p-5 shadow-xs hover:border-[#FF6B35] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-3.5xl p-2 bg-slate-50 border border-[#E5E1D8] rounded-2xl">
                      {hotel.emoji}
                    </span>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 border rounded-full ${badgeBg}`}>
                      {typeText}
                    </span>
                  </div>

                  <h4 className="text-base font-display font-bold text-gray-950 mt-4 leading-tight">
                    {hotel.name}
                  </h4>

                  <div className="flex items-center gap-1.5 text-[11px] font-sans font-medium text-[#FF6B35] mt-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#FF6B35] text-[#FF6B35]" />
                    <span>{hotel.rating}</span>
                    <span className="text-gray-300 mx-1">•</span>
                    <span className="text-gray-500 flex items-center gap-0.5">
                      <CreditCard className="w-3 h-3 text-gray-400" /> {hotel.priceRange}
                    </span>
                  </div>

                  <p className="text-gray-500 font-sans text-xs mt-3 leading-relaxed">
                    {hotel.description}
                  </p>
                </div>

                <div className="mt-5 space-y-2.5 pt-3 border-t border-dashed border-[#E5E1D8]">
                  <div className="flex items-start gap-1 pb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-sans text-gray-500 leading-relaxed">{hotel.address}</span>
                  </div>
                  {hotel.highlight && (
                    <div className="bg-slate-50 py-1.5 px-3 border border-[#E5E1D8] rounded-xl flex items-center gap-1.5 text-slate-800 text-xs">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-sans font-bold line-clamp-1">{hotel.highlight}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
