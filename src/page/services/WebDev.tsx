import { useState } from 'react';
import { ArrowLeft, Globe, Phone, Send, AlertTriangle, Lightbulb, CheckCircle, Sparkles, TrendingUp, BarChart2, Code } from 'lucide-react';

export default function WebDevelopment() {
  const [isAmharic, setIsAmharic] = useState(false);

  const content = {
    en: {
      title: 'Premium Web & Digital Development',
      tagline: 'A slow, generic website or a cluttered Telegram channel setup kills your credibility. Let’s build an elite digital platform.',
      theProblemTitle: 'The "Amateur Tech" Trap',
      theProblemText: "Many businesses try to cut corners by building a slow, broken website that looks like it was made in 2012, or they run an unoptimized digital infrastructure. When high-ticket clients or international partners click your link and see bad mobile layouts, slow loading speeds, or broken links, they leave instantly. Your website shouldn't just be an expensive digital business card; it should be your highest-performing salesperson.",
      theSolutionTitle: 'How We Build High-Performance Platforms',
      theSolutionText: "We engineer lightning-fast, secure, and visually stunning web applications and digital structures customized completely to your business model. From clean user dashboards to high-conversion agency frameworks, we build modern digital architectures that lock in trust the millisecond the page loads, pushing users exactly where you want them: to convert and pay.",
      deliverablesTitle: 'What We Code For Your Brand',
      deliverables: [
        { title: 'Lightning-Fast Modern Layouts', desc: 'Custom, blazing-fast web architectures built on modern tech stacks that load in milliseconds and look premium on every device.' },
        { title: 'Interactive Client Portals & Dashboards', desc: 'Secure, smooth, and automated internal systems that make client management or onboarding feel world-class.' },
        { title: 'High-Converting Sales Funnels', desc: 'Landing pages engineered using behavioral psychology to guide users effortlessly from curious visitors to paid leads.' },
        { title: 'Clean Database & API Architectures', desc: 'Rock-solid backend structures that guarantee your systems stay online, data remains secure, and performance never lags.' }
      ],
      freeOfferTitle: '🎁 Free Hebasy Digital Speed & Infrastructure Audit',
      freeOfferDesc: 'Have an existing website, platform, or digital strategy that feels slow or unoptimized? Send us your link or current setup, and our development team will run a complete layout and technical audit for you entirely free! We will identify exactly what is slowing you down.',
      ctaCall: 'Talk to a Tech Expert Now',
      ctaTelegram: 'Chat with us on Telegram'
    },
    am: {
      title: 'የድረ-ገጽ እና የዲጂታል ሲስተም ልማት',
      tagline: 'ቀርፋፋና ጥራት የሌለው ዌብሳይት የድርጅትዎን ዝና ይገድላል። የደንበኞችን እምነት በአንድ ሰከንድ ውስጥ የሚይዝ ዘመናዊ ሲስተም እንገንባ።',
      theProblemTitle: 'ደካማ የቴክኖሎጂ አጠቃቀም ኪሳራ!',
      theProblemText: 'ብዙ ድርጅቶች ዝም ብሎ ስም ብቻ ያለው፣ ጥራት የሌለው ወይም በስልክ ሲከፈት የሚበላሽ ዌብሳይት በመስራት ትልቅ ስህተት ይሰራሉ። አንድ ትልቅ ደንበኛ ወይም አጋር የእርስዎን ሊንክ ሲጫን ቀርፋፋ መሆንን፣ የተሰባበሩ ፅሁፎችን ወይም ጉድለቶችን ካየ ወዲያው ገጹን ዘግቶ ይወጣል። ዌብሳይት ማለት ዝም ብሎ ዝርዝር የሚቀመጥበት ዲጂታል ካርድ አይደለም፤ በቀን 24 ሰዓት ያለ እረፍት የሚሸጥላችሁ ዋናው ሰራተኛችሁ መሆን አለበት።',
      theSolutionTitle: 'እኛ እንዴት ፈጣንና ማራኪ ሲስተም እንገነባለን?',
      theSolutionText: 'እኛ ለድርጅትዎ ሞዴል ተስማሚ የሆኑ፣ እጅግ በጣም ፈጣን፣ አስተማማኝ እና አይን የሚስቡ ድረ-ገጾችን እና የደንበኛ መቆጣጠሪያ ዳሽቦርዶችን (Dashboards) እንሰራለን። ደንበኛ ገጹን በከፈተ በሰከንድfraction ውስጥ የድርጅትዎን ትልቅነት እንዲረዳ እና ያለምንም መስተጓጎል በቀጥታ ወደ ክፍያ ወይም ወደ ስልክ መደወያ እንዲሄድ የሚያደርግ ዘመናዊ የዲጂታል አወቃቀር እንገነባለን።',
      deliverablesTitle: 'ከእኛ የልማት ክፍል የሚያገኟቸው 4 ዋና ነገሮች',
      deliverables: [
        { title: 'እጅግ ፈጣን እና ዘመናዊ ድረ-ገጾች', desc: 'በማንኛውም ስልክም ሆነ ኮምፒውተር ላይ ሳይቆራረጡ በሴኮንድfraction ውስጥ በፍጥነት የሚከፈቱ ውብ የዌብሳይት ስራዎች።' },
        { title: 'የደንበኛ ማስተዳደሪያ ፖርታል እና ዳሽቦርድ', desc: 'ከደንበኞችዎ ጋር ያለዎትን የስራ ግንኙነት፣ መረጃ መለዋወጥ እና ክትትል እጅግ ፕሮፌሽናል የሚያደርጉ ዘመናዊ የውስጥ ሲስተሞች።' },
        { title: 'ሽያጭን የሚያፋጥኑ ገጾች (Sales Funnels)', desc: 'የሰዎችን ፍላጎት ተከትለው፣ ጎብኚዎችን በቀላሉ መርተው ወደ እውነተኛ ከፋይ ደንበኝነት የሚቀይሩ ልዩ ገጾች።' },
        { title: 'አስተማማኝ የዳታቤዝ እና የኮድ አወቃቀር', desc: 'የድርጅትዎ መረጃዎች ሁልጊዜም ደህንነታቸው የተጠበቀ እንዲሆን እና ሲስተሙ ሳይቋረጥ በከፍተኛ ብቃት እንዲሰራ የሚያደርግ የጀርባ (Backend) ግንባታ።' }
      ],
      freeOfferTitle: '🎁 የ Hebasy ልዩ የነፃ የዲጂታል ሲስተም ምርመራ',
      freeOfferDesc: 'የአሁኑ ዌብሳይትዎ ወይም ዲጂታል ሲስተምዎ ምን ያህል ፈጣን እንደሆነ ወይም ምን መስተካከል እንዳለበት ማወቅ ይፈልጋሉ? የድርጅትዎን ሊንክ ወይም ሀሳብ ይላኩልንና የቴክኒክ ቡድናችን ሙሉ በሙሉ በነፃ መርምሮ የፍጥነትና የጥራት ሪፖርት ይሰጥዎታል።',
      ctaCall: 'በስልክ አሁኑኑ ያማክሩን',
      ctaTelegram: 'በቴሌግራም ያናግሩን'
    }
  };

  const current = isAmharic ? content.am : content.en;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8 selection:bg-[#00aaff] selection:text-black font-sans relative overflow-hidden">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#00aaff]/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="absolute top-24 left-10 text-slate-800/20 pointer-events-none animate-float hidden lg:block">
        <TrendingUp className="w-48 h-48" />
      </div>

      <div className="absolute bottom-20 right-10 text-blue-900/10 pointer-events-none animate-pulse-slow hidden lg:block">
        <BarChart2 className="w-56 h-56" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between mb-12">
          <a 
            href="/#services" 
            className="inline-flex items-center text-xs font-black tracking-widest text-[#00aaff] hover:text-white transition-all duration-300 group bg-slate-900/40 border border-slate-800/60 px-4 py-2.5 rounded-xl backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> 
            {isAmharic ? 'ወደ አገልግሎቶች' : 'BACK TO SERVICES'}
          </a>

          <button
            onClick={() => setIsAmharic(!isAmharic)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 border border-slate-800/80 text-xs font-bold rounded-xl hover:border-[#00aaff] text-[#00aaff] hover:text-white transition-all duration-300 shadow-xl backdrop-blur-sm"
          >
            <Globe className="w-3.5 h-3.5" />
            {isAmharic ? 'English' : 'አማርኛ'}
          </button>
        </div>

        {/* Main Framework Card */}
        <div className="bg-gradient-to-b from-slate-900/80 to-slate-950/90 rounded-[2.5rem] p-6 md:p-14 border border-slate-800/50 shadow-2xl relative overflow-hidden backdrop-blur-md animate-float">
          
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00aaff]/40 to-transparent"></div>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 border-b border-slate-800/50 pb-10 mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/80 rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00aaff]/20 to-transparent rounded-2xl animate-spin-slow"></div>
              <Code className="h-7 w-7 text-[#00aaff] relative z-10" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#00aaff] animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-[#00aaff] uppercase">
                  {isAmharic ? 'የ Hebasy የልማት ሲስተም' : 'HEBASY DEVELOPMENT SYSTEM'}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {current.title}
              </h1>
              <p className="text-slate-400 font-medium text-sm md:text-base leading-relaxed mt-2">{current.tagline}</p>
            </div>
          </div>

          {/* Core Content */}
          <div className="space-y-12">
            
            {/* The Hard Truth */}
            <div className="bg-gradient-to-r from-red-950/10 to-transparent border-l-4 border-l-red-500 border-y border-r border-slate-800/40 rounded-r-2xl p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h2 className="text-xs font-black text-red-400 uppercase tracking-widest">{current.theProblemTitle}</h2>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">{current.theProblemText}</p>
            </div>

            {/* The Solution */}
            <div className="bg-gradient-to-r from-slate-900/40 to-transparent border-l-4 border-l-[#00aaff] border-y border-r border-slate-800/40 rounded-r-2xl p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-3">
                <Lightbulb className="w-5 h-5 text-[#00aaff]" />
                <h2 className="text-base font-black text-white uppercase tracking-wider">{current.theSolutionTitle}</h2>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">{current.theSolutionText}</p>
            </div>

            {/* The Outcomes List */}
            <div>
              <h2 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-6">{current.deliverablesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/40 hover:border-[#00aaff]/30 hover:bg-slate-900/60 transition-all duration-300 group">
                    <div className="flex items-center mb-2.5">
                      <CheckCircle className="w-4 h-4 text-[#00aaff] mr-2.5 flex-shrink-0" />
                      <h3 className="text-sm font-black text-white group-hover:text-[#00aaff] transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Value Free Offer Section */}
            <div className="bg-gradient-to-br from-slate-900 to-[#00aaff]/5 border border-[#00aaff]/20 rounded-3xl p-6 md:p-8 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00aaff]/5 rounded-full blur-2xl pointer-events-none"></div>
              <h3 className="text-base font-black text-[#00aaff] flex items-center gap-2 mb-3">
                {current.freeOfferTitle}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                {current.freeOfferDesc}
              </p>
            </div>

          </div>

          {/* Premium Call to Actions */}
          <div className="mt-10 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+251907100476"
              className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-white text-slate-950 font-black text-sm rounded-xl hover:bg-[#00aaff] hover:text-white transition-all duration-300 shadow-2xl active:scale-98"
            >
              <Phone className="h-4 w-4 mr-2" />
              {current.ctaCall}
            </a>
            <a
              href="https://t.me/hebasy_marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-slate-950 border border-slate-800 hover:border-[#00aaff]/60 text-white font-black text-sm rounded-xl transition-all duration-300 active:scale-98 relative group"
            >
              <div className="absolute inset-0 bg-[#00aaff]/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
              <Send className="h-4 w-4 mr-2 text-[#00aaff]" />
              {current.ctaTelegram}
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}