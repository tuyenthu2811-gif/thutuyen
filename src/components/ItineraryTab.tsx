import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ITINERARIES } from "../data";
import { Calendar, Clock, Sparkles } from "lucide-react";

export default function ItineraryTab() {
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>("1-day");

  const activeItinerary = ITINERARIES.find(
    (itin) => itin.id === selectedItineraryId
  ) || ITINERARIES[0];

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
          📅 LỘ TRÌNH ĐƯỢC CHỌN LỌC
        </span>
        <h3 className="text-xl font-display font-black text-slate-900 mt-1">
          Lịch trình đề xuất
        </h3>
        <p className="text-gray-500 text-xs md:text-sm mt-0.5">Chúng em thiết kế sẵn lộ trình khoa học, giúp bạn tiết kiệm thời gian di chuyển tốt nhất 🥰</p>
      </div>

      {/* Main Choice Tabs */}
      <div className="grid grid-cols-3 gap-2 bg-slate-100/60 p-1.5 rounded-[20px] border border-[#E5E1D8] max-w-md">
        {ITINERARIES.map((itin) => (
          <button
            key={itin.id}
            onClick={() => setSelectedItineraryId(itin.id)}
            className={`text-xs px-3 py-2.5 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedItineraryId === itin.id
                ? "bg-[#1A1A1A] text-white shadow-xs"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {itin.id === "1-day" ? "1 Ngày" : itin.id === "2-day" ? "2 Ngày" : "3 Ngày"}
          </button>
        ))}
      </div>

      {/* Description Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItinerary.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-50 border border-[#E5E1D8] rounded-[20px] p-5"
        >
          <div className="flex items-center gap-2 text-[#1A1A1A] font-display font-bold text-base">
            <Calendar className="w-5 h-5 text-[#FF6B35]" />
            <span>{activeItinerary.title}</span>
          </div>
          <p className="text-gray-600 text-xs md:text-sm mt-2 font-sans leading-relaxed">
            {activeItinerary.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Stepper / Timeline Stops */}
      <div className="relative border-l-2 border-[#E5E1D8] ml-4 md:ml-6 pl-6 md:pl-8 space-y-6 py-2 text-left">
        {activeItinerary.stops.map((stop, sIdx) => (
          <motion.div
            key={sIdx}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: sIdx * 0.05 }}
            className="relative"
          >
            {/* Stepper Bullet Indicator */}
            <span className="absolute -left-[37px] md:-left-[45px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-[#E5E1D8] text-base shadow-xs select-none">
              {stop.emoji}
            </span>

            {/* Step Card */}
            <div className="bg-white border border-[#E5E1D8] hover:border-[#FF6B35] p-5 rounded-[20px] transition-all">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-50 text-gray-500 border border-[#E5E1D8]">
                <Clock className="w-3.5 h-3.5 text-[#FF6B35]" /> {stop.time}
              </span>

              <h4 className="text-base font-display font-bold text-gray-950 mt-2.5">
                {stop.place}
              </h4>

              <p className="text-gray-500 font-sans text-xs mt-1.5 leading-relaxed">
                {stop.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-dashed border-[#E5E1D8] flex flex-wrap items-start gap-1 text-xs">
                <span className="text-[#FF6B35] font-bold font-display uppercase tracking-wider text-[11px]">Hoạt động tiêu biểu:</span>
                <span className="text-gray-700 font-medium font-sans">{stop.activity}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Safety Closing Card */}
      <div className="bg-slate-50 p-4 rounded-[20px] border border-[#E5E1D8] flex gap-3 items-center">
        <Sparkles className="w-5 h-5 text-[#FF6B35] shrink-0" />
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          Bạn hoàn toàn có thể dùng hộp thoại chatbot AI bên phải để điều chỉnh lộ trình hoặc yêu cầu hướng dẫn viên thay đổi chi tiết nhé! 😊
        </p>
      </div>
    </motion.div>
  );
}
