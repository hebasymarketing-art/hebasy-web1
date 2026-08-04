import { useState } from 'react';
import { ArrowLeft, Globe, Phone, Send, AlertTriangle, Lightbulb, CheckCircle, Sparkles, TrendingUp, BarChart2, Search } from 'lucide-react';

export default function SeoService() {
  const [isAmharic, setIsAmharic] = useState(false);

  const content = {
    en: {
      title: 'Search Engine Optimization (SEO)',
      tagline: 'If your business is not on the first page of Google, you don’t exist to your best customers. Let’s change that.',
      theProblemTitle: 'The Invisible Business',
      theProblemText: "Every single day, thousands of people in Ethiopia search Google for products or services you sell. But if your competitor appears first and your website is nowhere to be found, you are literally giving away free customers to them. Relying only on paid ads means your business stops getting leads the moment you stop paying. Without SEO, you are invisible.",
      theSolutionTitle: 'How We Put You on Top of Google',
      theSolutionText: "We optimize your website so Google understands exactly what you sell and rewards you with the number #1 spot. We fix your keywords, clean your site speed, and build elite local search authority. This brings ready-to-buy customers directly to your organic layout completely free, permanently, and without paying for single click.",
      deliverablesTitle: 'What We Build For Your Brand',
      deliverables: [
        { title: 'High-Intent Keyword Research', desc: 'We find out exactly what words your customers type on Google when they want to buy, and we target those words.' },
        { title: 'Local Adama & Ethiopia SEO Strategy', desc: 'We setup your Google Maps and local business listings so anyone nearby finds your shop instantly.' },
        { title: 'Speed & Technical Fixes', desc: 'We optimize your code and website structure so it loads in milliseconds, which Google absolutely loves.' },
        { title: 'Continuous Ranking Growth', desc: 'We track your Google rankings weekly, keeping your business at the top and leaving your competitors behind.' }
      ],
      freeOfferTitle: '🎁 Free Hebasy Google SEO Audit',
      freeOfferDesc: 'Want to check if your business or website can be found on Google? Or want to know what words your competitors are using to steal your clients? Text us your business type, and we will do a free search audit for you!',
      ctaCall: 'Talk to an SEO Expert Now',
      ctaTelegram: 'Chat with us on Telegram'
    },
    am: {
      title: 'የጉግል ፍለጋ ማሳደጊያ (SEO)',
      tagline: 'ድርጅትዎ ጎግል መጀመሪያ ገጽ ላይ ከሌለ፣ ትልልቅ ከፋይ ደንበኞች ጋር አይገናኝም። መጀመሪያ ላይ እናውጣዎት።',
      theProblemTitle: 'የማይታየው ድርጅት ኪሳራ!',
      theProblemText: 'በየቀኑ በሺዎች የሚቆጠሩ ሰዎች የእርስዎን አይነት ምርት ወይም አገልግሎት ለመግዛት ጎግል ላይ ይፈልጋሉ። ነገር ግን የናንተ ተፎካካሪ ድርጅት መጀመሪያ ላይ ወጥቶ የእናንተ ድረ-ገጽ ካልታየ፣ ደንበኞቹን በነፃ እየሰጣችኋቸው ነው። በሶሻል ሚዲያ ማስታወቂያ (Ads) ብቻ መተማመን ብር ሲያልቅ ደንበኛ ያቆማል። SEO ከሌለዎት ድርጅትዎ ለገዢዎች አይታይም።',
      theSolutionTitle: 'እኛ እንዴት መጀመሪያ ላይ እናውጣዎት?',
      theSolutionText: 'እኛ የእርስዎን ዌብሳይት ጎግል በቀላሉ እንዲያነበው እና አንደኛ ደረጃ እንዲሰጠው አድርገን እናስተካክለዋለን። ሰዎች የሚፈልጓቸውን ቃላት (Keywords) በጥናት በመለየት፣ የዌብሳይቱን ፍጥነት በመጨመር እና አድራሻውን ጎግል ማፕ ላይ በማስተካከል ያለምንም ተጨማሪ ክፍያ በየቀኑ ዝግጁ የሆኑ ደንበኞች ቀጥታ ወደ ስልክዎ እንዲመጡ እናደርጋለን።',
      deliverablesTitle: 'ከእኛ የ SEO ክፍል የሚያገኟቸው 4 ዋና ነገሮች',
      deliverables: [
        { title: 'የገዢዎች ፍላጎት ጥናት (Keywords)', desc: 'ደንበኞችዎ ሊገዙ ሲሉ ጎግል ላይ የሚጽፏቸውን ትክክለኛ ቃላት አጥንተን ዌብሳይትዎ ውስጥ የማስገባት ስራ።' },
        { title: 'የአካባቢ ፍለጋ ማስተካከያ (Local SEO)', desc: 'የድርጅትዎን የጎግል ማፕ (Google Maps) አቀማመጥ በማስተካከል በአቅራቢያዎ ያሉ ሰዎች በፍጥነት እንዲያገኙዎት ማድረግ።' },
        { title: 'የዌብሳይት ፍጥነትና ቴክኒክ ማስተካከያ', desc: 'የዌብሳይቱን ኮድ እና አወቃቀር በማስተካከል በሰከንድfraction ውስጥ እንዲከፈት ማድረግ (ይህንን ጎግል በጣም ይወደዋል)።' },
        { title: 'የደረጃ መከታተያ ሪፖርት', desc: 'በየሳምንቱ ድርጅትዎ ጎግል ላይ ምን ያህል እያደገ እንደመጣ እና ከተፎካካሪዎችዎ እንዴት እንደበለጠ የሚያሳይ ሪፖርት ማቅረብ።' }
      ],
      freeOfferTitle: '🎁 የ Hebasy ልዩ የነፃ የጉግል (SEO) ምርመራ',
      freeOfferDesc: 'ድርጅትዎ ወይም ዌብሳይትዎ ጎግል ላይ መውጣት አለመውጣቱን ማረጋገጥ ይፈልጋሉ? ወይም ተፎካካሪዎችዎ ምን አይነት ቃላት ተጠቅመው ደንበኛ እየወሰዱቦት እንደሆነ ማወቅ ይፈልጋሉ? የስራዎን አይነት በጽሑፍ ይላኩልንና ሙሉ በሙሉ በነፃ መርምረን እንንገሮት!',
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
              <Search className="h-7 w-7 text-[#00aaff] relative z-10" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#00aaff] animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-[#00aaff] uppercase">
                  {isAmharic ? 'የ Hebasy የፍለጋ ሲስተም' : 'HEBASY SEARCH SYSTEM'}
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