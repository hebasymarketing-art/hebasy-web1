import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center text-white overflow-hidden bg-[#001f3f]">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* 🚀 አሁን ሁሉም አኒሜሽን በ CSS በኩል ብቻ ነው የሚሰራው (ምንም የReact useEffect መዘግየት የለም) */
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
      `}} />

      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f] via-[#001122] to-black opacity-95"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col">
        
        <div className="w-full flex justify-start -mt-18 mb-8">
          {/* 🚀 እዚህ 'startAnim' የሚለውን ስቴት አውጥተን አኒሜሽኑን በቀጥታ አስገባንለት */}
          <div className="animate-fade-up inline-block mb-10 px-4 py-1.5 bg-[#00aaff]/10 backdrop-blur-md rounded-full border border-[#00aaff]/30">
            <span className="text-xs font-bold text-[#00aaff] tracking-widest uppercase">
              Award-Winning Marketing Agency
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="animate-fade-up delay-1 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Hebasy Marketing<br />
            <span className="text-[#00aaff]">
              Your Path to Unparalleled Branding.
            </span>
          </h1>

          <p className="animate-fade-up delay-2 text-lg sm:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl">
            Ethiopia's best marketing agency. Trusted across Adama and beyond. We turn Brilliant Ideas into Digital Reality.
          </p>

          <div className="animate-fade-up delay-3 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00aaff] hover:bg-[#0088cc] text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(0,170,255,0.3)] active:scale-95"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all hover:border-[#00aaff]"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}