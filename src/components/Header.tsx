import { motion } from "motion/react";
import { Compass, Sparkles, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-[#FF6B35] text-white border-b border-[#E5E1D8] shadow-xs px-4 py-6 md:py-8">
      {/* Subtle organic pattern */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-64 h-32 bg-black/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <motion.div 
            initial={{ rotate: -12, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="p-3.5 bg-white text-[#FF6B35] rounded-[20px] shadow-sm flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
          >
            <Compass className="w-8 h-8" />
          </motion.div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="flex items-center gap-1 text-[11px] bg-black/10 text-white font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                <MapPin className="w-3 h-3" /> SÀI GÒN • VIỆT NAM
              </span>
              <span className="flex items-center gap-1 text-[11px] bg-white/20 text-white font-semibold px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-amber-300" /> BẢN ĐỒ CHI TIẾT
              </span>
            </div>
            <h1 className="text-2xl md:text-[32px] font-display font-extrabold tracking-tight leading-none mt-2 text-white">
              Sổ Tay Du Lịch Sài Gòn 🛵
            </h1>
            <p className="text-white/90 text-xs md:text-sm mt-1 max-w-xl font-sans">
              Chào bạn! Tôi là HDV Sài Gòn chuyên sâu về ẩm thực đường phố, lưu trú tối ưu ngân sách và lịch trình du lịch trọn vẹn nhất.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#1A1A1A] border border-white/10 px-4 py-2.5 rounded-[20px] shadow-sm">
          <div className="relative">
            <span className="absolute animate-ping inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <div className="text-[11px] font-sans text-left">
            <p className="text-white font-bold uppercase tracking-wider">Hệ Thống Hoạt Động</p>
            <p className="text-gray-400">Tư vấn viên AI trực tuyến 24/7</p>
          </div>
        </div>
      </div>
    </header>
  );
}
