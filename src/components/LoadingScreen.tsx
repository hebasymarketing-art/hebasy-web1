import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // 1. ገጹ ሲከፈት ወዲያውኑ ወደ ላይ እንዲወጣ ማስገደድ
    window.scrollTo(0, 0);
    
    // 2. ስክሮል እንዳይደረግ መቆለፍ (Body እና Html ጭምር)
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none'; // ለስልክ ስክሪን ንክኪ

    const timer = setTimeout(() => {
      setFade(true);
      
      setTimeout(() => {
        setShow(false);
        // 3. ሎዲንግ ሲያልቅ ስክሮል መፍቀድ
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.touchAction = 'auto';
      }, 800); 
    }, 2500);

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = 'auto';
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    /* 🔥 z-index ወደ [9999] ከፍ ብሏል፣ ዳራው (bg) ደግሞ ከዌብሳይቱ ከለር ጋር እንዲሄድ ጥቁር ቢሆን ይመረጣል */
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center">
        <img 
          src="/hebasy_1-01.webp" 
          alt="Hebasy Logo" 
          className="h-32 sm:h-40 w-auto animate-pulse"
        />
        
        <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#00aaff] animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}