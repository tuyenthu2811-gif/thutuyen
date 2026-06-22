import { motion } from "motion/react";
import { OVERVIEW_DATA } from "../data";
import { Calendar, Compass, HelpCircle, MapPin, Smile } from "lucide-react";

export default function OverviewTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 text-left"
    >
      {/* Intro Hero-like Card with Bento styling properties */}
      <div className="bg-white border border-[#E5E1D8] rounded-[24px] p-6 md:p-8 relative overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 p-8 text-[#FF6B35]/5 pointer-events-none">
          <Compass className="w-48 h-48 transform rotate-12" />
        </div>
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/20 text-[#FF6B35] text-xs font-semibold mb-3">
            <Smile className="w-3.5 h-3.5" /> Chào mừng bạn đến với Sài Gòn
          </div>
          <h2 className="text-xl md:text-2xl font-display font-black text-slate-900 tracking-tight leading-snug">
            Khám phá vẻ đẹp bất tận của thành phố năng động!
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed font-sans max-w-3xl">
            {OVERVIEW_DATA.description}
          </p>
          <div className="mt-5 p-4 bg-amber-50/40 rounded-[18px] border border-[#E5E1D8] flex gap-3 items-start">
            <span className="text-xl p-1 bg-[#FF6B35]/10 rounded-lg text-[#FF6B35] font-bold">💡</span>
            <div>
              <h4 className="text-xs font-bold text-gray-900 font-display uppercase tracking-wider">Cố Đô Sài Gòn</h4>
              <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{OVERVIEW_DATA.funFact}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="space-y-3">
        <span className="text-[11px] uppercase tracking-widest font-bold text-[#FF6B35] block">
          ⚡ Thông tin nhanh súc tích
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {OVERVIEW_DATA.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-[#E5E1D8] rounded-[20px] p-4 shadow-xs"
            >
              <p className="text-gray-400 text-[10px] font-sans font-bold uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-slate-900 font-display font-extrabold text-sm md:text-base mt-1.5 tracking-tight">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Helpful Tips in Bento list design */}
      <div className="bg-white border border-[#E5E1D8] rounded-[24px] p-6 shadow-xs">
        <div className="border-b border-[#E5E1D8] pb-3 mb-4">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#FF6B35] flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#FF6B35]" /> Mẹo nhỏ bỏ túi hữu ích
          </span>
        </div>
        
        <div className="space-y-3">
          {OVERVIEW_DATA.travelTips.map((tip, idx) => {
            let icon = <Calendar className="w-4 h-4 text-rose-500 shrink-0" />;
            if (idx === 1) icon = <Compass className="w-4 h-4 text-sky-500 shrink-0" />;
            if (idx === 2) icon = <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0" />;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-3 p-3.5 hover:bg-slate-50 rounded-[18px] border border-transparent hover:border-[#E5E1D8] transition-all"
              >
                <div className="p-2 bg-slate-100 rounded-xl">
                  {icon}
                </div>
                <div>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-700 font-sans">
                    {tip}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
