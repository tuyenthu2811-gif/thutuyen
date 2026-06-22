import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ATTRACTIONS } from "../data";
import { Attraction } from "../types";
import { MapPin, Clock, Ticket, Sparkles, X } from "lucide-react";

export default function AttractionsTab() {
  const [selectedItem, setSelectedItem] = useState<Attraction | null>(null);

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
          📍 DANH SÁCH DANH LAM THẮNG CẢNH
        </span>
        <h3 className="text-xl font-display font-black text-slate-900 mt-1">
          Nơi lưu giữ linh hồn thành phố
        </h3>
        <p className="text-gray-500 text-xs md:text-sm mt-0.5">Vui lòng nhấp vào địa danh bất kì để xem mẹo hướng dẫn cụ thể nhé 😊</p>
      </div>

      {/* Grid List with Bento proportions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ATTRACTIONS.map((attr, idx) => (
          <motion.div
            key={attr.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -2 }}
            onClick={() => setSelectedItem(attr)}
            className="group block outline-hidden text-left bg-white border border-[#E5E1D8] rounded-[24px] p-5 shadow-xs hover:border-[#FF6B35] cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl p-2.5 bg-slate-50 group-hover:bg-[#FF6B35]/10 rounded-xl transition-colors">
                  {attr.emoji}
                </span>
                <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 bg-slate-100 border border-[#E5E1D8] text-gray-700 rounded-full">
                  {attr.category}
                </span>
              </div>
              <h4 className="text-base font-display font-bold text-gray-950 mt-4 group-hover:text-[#FF6B35] transition-colors">
                {attr.name}
              </h4>
              <p className="text-gray-500 font-sans text-xs mt-1.5 line-clamp-3 leading-relaxed">
                {attr.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-dashed border-[#E5E1D8] flex items-center justify-between text-[11px] text-gray-400 font-sans">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" /> {attr.location}
              </span>
              <span className="text-[#FF6B35] font-bold group-hover:underline flex items-center gap-0.5">
                Xem thêm &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Bento Modal/Dialog */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white w-full max-w-xl rounded-[24px] overflow-hidden shadow-xl border border-[#E5E1D8] z-10"
            >
              {/* Header Visual Bar */}
              <div className="px-6 py-5 bg-[#1A1A1A] text-white flex justify-between items-center border-b border-[#E5E1D8]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 bg-white/5 border border-white/10 rounded-xl">{selectedItem.emoji}</span>
                  <div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 bg-[#FF6B35] text-white rounded-full inline-block uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <h5 className="text-base md:text-lg font-display font-bold mt-1">{selectedItem.name}</h5>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1 px-2.5 text-xs text-gray-400 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                >
                  Đóng
                </button>
              </div>

              {/* Content Panel */}
              <div className="p-6 space-y-5 font-sans overflow-y-auto max-h-[60vh] text-left">
                <div>
                  <span className="text-[10px] font-bold text-[#FF6B35] uppercase tracking-wider">Mô tả điểm đến</span>
                  <p className="text-gray-700 text-xs md:text-sm mt-1 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Practical Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 bg-slate-50 border border-[#E5E1D8] rounded-[18px] flex flex-col gap-1">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" /> Vị trí
                    </span>
                    <p className="text-slate-800 text-xs font-semibold leading-relaxed">{selectedItem.address}</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-[#E5E1D8] rounded-[18px] flex flex-col gap-1">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5 text-sky-500" /> Thời gian
                    </span>
                    <p className="text-slate-800 text-xs font-semibold leading-relaxed">{selectedItem.bestTime}</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-[#E5E1D8] rounded-[18px] flex flex-col gap-1">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      <Ticket className="w-3.5 h-3.5 text-emerald-600" /> Vé tham quan
                    </span>
                    <p className="text-slate-800 text-xs font-semibold leading-relaxed">{selectedItem.cost}</p>
                  </div>
                </div>

                {/* Fun Fact */}
                {selectedItem.funFact && (
                  <div className="bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-[18px] p-4 flex gap-3">
                    <Sparkles className="w-5 h-5 text-[#FF6B35] shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold text-[#FF6B35] uppercase font-display block">Sự thật thú vị</span>
                      <p className="text-gray-700 text-xs mt-0.5 leading-relaxed">{selectedItem.funFact}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3 border-t border-[#E5E1D8]">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 bg-white hover:bg-slate-50 border border-[#E5E1D8] text-slate-700 font-semibold rounded-xl text-xs cursor-pointer transition-colors"
                >
                  Quay lại
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
