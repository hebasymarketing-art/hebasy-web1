import { useEffect, useState } from 'react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAmharic, setIsAmharic] = useState(false); // ቋንቋውን ለመቀየር

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('About');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="About" className="py-24 sm:py-32 bg-white text-gray-900 overflow-hidden">
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUpAbout {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal {
          animation: fadeInUpAbout 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-text { animation-delay: 0.2s; }
        .delay-cards { animation-delay: 0.4s; }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className={`text-4xl sm:text-5xl font-bold mb-8 transition-all ${isVisible ? 'reveal' : 'opacity-0'}`}>
            {isAmharic ? "ስለ " : "About "} 
            <span className="text-[#00aaff]">Hebasy Marketing</span>
          </h2>
          
          {/* በቀይ ምልክት የተደረገበት ቦታ ላይ የተጨመረው የቋንቋ መቀየሪያ */}
          <button 
            onClick={() => setIsAmharic(!isAmharic)}
            className={`mb-6 text-sm font-bold py-2 px-4 rounded-full border-2 border-[#00aaff] transition-all hover:bg-[#00aaff] hover:text-white ${isVisible ? 'reveal' : 'opacity-0'}`}
          >
            {isAmharic ? "Switch to English" : "ወደ አማርኛ ቀይር"}
          </button>

          <p className={`text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 ${isVisible ? 'reveal delay-text' : 'opacity-0'}`}>
            {isAmharic ? (
              "በበርናባስ እውነቱ (berna creative) የተመሰረተው ሄባሲ ማርኬቲንግ፣ በኢትዮጵያ ቀዳሚ የዲጂታል ኤጀንሲ እና በአዳማ ውስጥ ካሉ ምርጥ 5 የማርኬቲንግ ኤጀንሲዎች አንዱ ነው። የፈጠራ ቡድናችን ብራንዶችን በዘመናዊ ስትራቴጂዎች ለመለወጥ ቁርጠኛ ነው። እያደገ ያለ ኤጀንሲ እንደመሆናችን መጠን ደንበኞቻችን በዲጂታሉ ዓለም ጎልተው እንዲታዩ ጥራትን፣ አዳዲስ አመለካከቶችን እና ውጤት ተኮር ማርኬቲንግን እናስቀድማለን።"
            ) : (
              "Founded by Bernabas Ewnetu (berna creative), Hebasy Marketing is Ethiopia's premier digital agency and one of the top 5 marketing agencies in Adama. Our team of creative minds is dedicated to transforming brands through innovative strategies. As a growing agency, we prioritize quality, fresh perspectives, and results-driven marketing to help our clients stand out in the digital world."
            )}
            <br />
            <a href="#services" className="text-[#00aaff] hover:text-[#001f3f] mt-4 inline-block font-semibold transition-colors">
              {isAmharic ? "ዲጂታል አገልግሎቶቻችንን ይመልከቱ →" : "Explore our Digital Services →"}
            </a>
          </p>

          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 ${isVisible ? 'reveal delay-cards' : 'opacity-0'}`}>
            
            {/* Strategy Card */}
            <div className="p-8 bg-[#f0f9ff] rounded-[2rem] border-2 border-[#00aaff]/10 hover:border-[#00aaff]/40 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 text-left">
              <div className="w-12 h-1 w-24 bg-[#00aaff] mb-6 rounded-full group-hover:w-full transition-all duration-500"></div>
              <div className="text-xl font-extrabold text-[#001f3f] mb-3 leading-tight group-hover:text-[#00aaff]">
                {isAmharic ? "ስትራቴጂያዊ የብራንድ መፍትሄዎች" : "Strategic Brand Solutions"}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {isAmharic ? "ለእርስዎ ልዩ ፍላጎቶች የተነደፉ አጠቃላይ ስትራቴጂዎች" : "Comprehensive strategies designed for your unique needs"}
              </p>
            </div>

            {/* Team Card */}
            <div className="p-8 bg-[#f0f9ff] rounded-[2rem] border-2 border-[#00aaff]/10 hover:border-[#00aaff]/40 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 text-left">
              <div className="w-12 h-1 w-24 bg-[#00aaff] mb-6 rounded-full group-hover:w-full transition-all duration-500"></div>
              <div className="text-xl font-extrabold text-[#001f3f] mb-3 leading-tight group-hover:text-[#00aaff]">
                {isAmharic ? "ባለሙያ የቡድን አባላት" : "Expert Team Members"}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {isAmharic ? "ለዓመታት በኢንዱስትሪው ውስጥ ልምድ ያላቸው ጎበዝ ባለሙያዎች" : "Talented professionals with years of industry experience"}
              </p>
            </div>

            {/* Success Card */}
            <div className="p-8 bg-[#f0f9ff] rounded-[2rem] border-2 border-[#00aaff]/10 hover:border-[#00aaff]/40 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 text-left">
              <div className="w-12 h-1 w-24 bg-[#00aaff] mb-6 rounded-full group-hover:w-full transition-all duration-500"></div>
              <div className="text-xl font-extrabold text-[#001f3f] mb-3 leading-tight group-hover:text-[#00aaff]">
                {isAmharic ? "እያደገ የመጣ የደንበኞች ስኬት" : "Growing Client Success"}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {isAmharic ? "እውነተኛ ውጤቶችን የሚያመጡ የረጅም ጊዜ አጋርነቶችን መገንባት" : "Building long-term partnerships that drive real results"}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}