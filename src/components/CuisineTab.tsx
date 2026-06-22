import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CUISINE } from "../data";
import { Food } from "../types";
import { MapPin, Utensils, UtensilsCrossed, Clock, Info } from "lucide-react";

export default function CuisineTab() {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 text-left font-sans"
    >
      {/* Tab Header */}
      <div>
        <span className="text-[11px] uppercase tracking-widest font-bold text-[#FF6B35] block">
          🍜 TINH HOA ẨM THỰC SÀI GÒN
        </span>
        <h3 className="text-xl font-display font-black text-slate-900 mt-1">
          Ăn gì ở Sài Gòn?
        </h3>
        <p className="text-gray-500 text-xs md:text-sm mt-0.5">Sài Gòn là thiên đường giao thoa ẩm thực. Cùng khám phá những hương vị trứ danh nhé! 😋🥖</p>
      </div>

      {/* Grid with Bento design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CUISINE.map((food, idx) => (
          <motion.div
            key={food.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group bg-white border border-[#E5E1D8] rounded-[24px] p-5 shadow-xs hover:border-[#FF6B35] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2.5 bg-slate-50 group-hover:bg-[#FF6B35]/10 rounded-[18px] transition-colors">
                    {food.emoji}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-gray-950 group-hover:text-[#FF6B35] transition-colors text-sm md:text-base">
                      {food.name}
                    </h4>
                    <p className="text-[#FF6B35] text-[10px] font-bold uppercase tracking-wider">Đặc Sản Sài Gòn</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-500 text-xs md:text-sm mt-3.5 leading-relaxed text-left">
                {food.description}
              </p>

              {/* Places to Eat List */}
              <div className="mt-4 space-y-2">
                <p className="text-xs font-bold text-gray-900 flex items-center gap-1 border-b border-[#E5E1D8] pb-1.5 font-display">
                  <Utensils className="w-3.5 h-3.5 text-[#FF6B35]" /> Địa chỉ nên thử ngay:
                </p>
                <ul className="space-y-1.5">
                  {food.placesToEat.map((place, pIdx) => (
                    <li key={pIdx} className="text-xs text-gray-700 flex items-start gap-1.5 leading-relaxed font-sans">
                      <MapPin className="w-3 h-3 text-rose-500 shrink-0 mt-0.5" />
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-dashed border-[#E5E1D8] flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" /> {food.bestTime}
              </span>
              <button
                onClick={() => setSelectedFood(food)}
                className="text-[#FF6B35] font-bold flex items-center gap-0.5 cursor-pointer hover:underline"
              >
                Học ăn ngon &rarr;
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Food Details */}
      <AnimatePresence>
        {selectedFood && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFood(null)}
              className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white w-full max-w-lg rounded-[24px] overflow-hidden shadow-xl border border-[#E5E1D8] z-10 p-6"
            >
              <div className="flex justify-between items-start gap-4 pb-4 border-b border-[#E5E1D8]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2.5 bg-slate-50 border border-[#E5E1D8] rounded-[18px]">{selectedFood.emoji}</span>
                  <div>
                    <h5 className="text-base font-display font-bold text-slate-900">{selectedFood.name}</h5>
                    <p className="text-[#FF6B35] text-[10px] font-bold uppercase tracking-wider">Cẩm nang ẩm thực</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFood(null)}
                  className="p-1 px-2.5 text-xs text-gray-400 hover:text-gray-600 border border-[#E5E1D8] rounded-xl hover:bg-gray-50 cursor-pointer"
                >
                  Đóng
                </button>
              </div>

              <div className="space-y-4 py-4 font-sans text-xs text-left">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[#FF6B35]" /> Đôi nét hương vị đặc sắc
                  </span>
                  <p className="text-gray-700 mt-1 leading-relaxed text-xs">{selectedFood.taste}</p>
                </div>

                {selectedFood.funFact && (
                  <div className="p-4 bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-[18px]">
                    <span className="text-[10px] font-bold text-[#FF6B35] uppercase tracking-wider flex items-center gap-1 mb-1">
                      <Info className="w-3.5 h-3.5 text-[#FF6B35]" /> Điển tích món ăn
                    </span>
                    <p className="text-gray-700 text-xs leading-relaxed">{selectedFood.funFact}</p>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[#E5E1D8] flex justify-end">
                <button
                  onClick={() => setSelectedFood(null)}
                  className="px-4 py-2 bg-[#FF6B35] hover:bg-[#e0531f] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Dạ em đã hiểu!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
