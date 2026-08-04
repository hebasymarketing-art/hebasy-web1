import { useState } from 'react';
import { Link } from 'react-router-dom'; // 🔗 react-router-dom ሊንክ ተጨምሯል
import { ArrowLeft, Phone, Send, AlertTriangle, Lightbulb, CheckCircle, Globe, Sparkles, TrendingUp, BarChart2, Edit3 } from 'lucide-react';

export default function ContentCreation() {
  const [isAmharic, setIsAmharic] = useState(false);

  const content = {
    en: {
      title: 'Strategic Content Creation',
      tagline: 'Stop begging people to buy. Create content so good that your exact customers find you first.',
      theProblemTitle: 'The "Buy From Me" Mistake',
      theProblemText: "Most businesses only post: 'We have this product, buy from us, discount today!' People hate being sold to, and they swipe away instantly. If your page is just a boring list of prices, nobody will follow you or trust you. You are working too hard to find clients, instead of making clients work to find you through highly engaging content.",
      theSolutionTitle: 'How We Make Your Brand Viral & Trusted',
      theSolutionText: "We design a dynamic content engine for your business. We write high-hook scripts, plan professional short videos (TikTok, Instagram Reels), and create value-driven posts that solve your customer’s hidden problems. Instead of pushing your product down their throats, we make them fall in love with your brand style first, so they inbox you to buy naturally.",
      deliverablesTitle: 'What We Build For Your Brand',
      deliverables: [
        { title: 'High-Hook Video Scripting', desc: 'We write professional, psychological hooks and scripts for your TikToks and Reels to keep viewers watching till the last second.' },
        { title: 'Value-Driven Social Posts', desc: 'Educational, entertaining, and highly shareable content designs that build authority and make your brand the leader.' },
        { title: 'Content Calendar & Planning', desc: 'No more wondering what to post today. We plan your entire month’s content strategy layout in advance.' },
        { title: 'Trend-Jacking & Viral Hooks', desc: 'We capture the latest internet trends and ethically match them to your business so you get massive free organic traffic.' }
      ],
      freeOfferTitle: '🎁 Free Hebasy Content Hook & Idea Session',
      freeOfferDesc: 'Stuck on what kind of videos or posts your specific business should make to get famous? Send us your page link, and we will give you 3 viral video hooks tailored for your brand completely free!',
      ctaCall: 'Talk to a Creative Director Now',
      ctaTelegram: 'Chat with us on Telegram'
    },
    am: {
      title: 'ስትራቴጂካዊ የይዘት ፈጠራ (Content)',
      tagline: 'ሰውን "ግዙኝ" ብሎ መለመን ይብቃ። ደንበኞች እራሳቸው ፈልገው እንዲመጡ የሚያደርግ ይዘት እንፍጠር።',
      theProblemTitle: 'የ"ግዙኝ" ብቻ ስህተት!',
      theProblemText: 'ብዙ ድርጅቶች ሶሻል ሚዲያ ላይ የሚለጥፉት "ይሄ እቃ መጥቷል፣ ግዙን፣ ቅናሽ አለን" የሚል ብቻ ነው። ሰው በግድ እንዲሸጥበት አይፈልግም፤ ገና ሲያይ ያሳልፈዋል። ገጽዎ ዝም ብሎ የዋጋ ዝርዝር ብቻ ከሆነ ማንም አይከተልዎትም፣ አያምኖትምም። ይዘት (Content) ሳይሰሩ ደንበኛ ለመፈለግ በየቀኑ መልፋት ድካም ብቻ ነው።',
      theSolutionTitle: 'እኛ እንዴት ተመራጭ እናድርግዎት?',
      theSolutionText: 'እኛ ለድርጅትዎ የሚሆን የይዘት ሞተር እንፈጥራለን። የሰውን ትኩረት የሚስቡ አጫጭር የቲክቶክ እና የሪልስ ስክሪፕቶችን እንጽፋለን፣ ሰውን የሚያስተምሩ ወይም የሚያዝናኑ ጠቃሚ ጽሑፎችንና ዲዛይኖችን እንሰራለን። ምርቱን በግድ ከመግፋት ይልቅ ሰዎች መጀመሪያ የገጽዎ ቋሚ ተከታታይ እንዲሆኑ እናደርጋለን፤ ከዚያም እራሳቸው በደስታ እየመጡ ይገዙዎታል።',
      deliverablesTitle: 'ከእኛ የይዘት ክፍል የሚያገኟቸው 4 ዋና ነገሮች',
      deliverables: [
        { title: 'የሰውን ትኩረት የሚስቡ ስክሪፕቶች', desc: 'ሰዎች የቲክቶክ ወይም የሪልስ ቪዲዮዎን ገና ሲጀምሩ እንዳያልፉት የሚያደርጉ የረቀቁ የቪዲዮ አጀማመሮች እና ስክሪፕቶች መጻፍ።' },
        { title: 'እምነት የሚገነቡ ጠቃሚ ጽሑፎች', desc: 'ስለ ምርትዎ ጥራት እና አጠቃቀም ሰውን የሚያስተምሩ፣ ተዓማኒነትዎን ከፍ የሚያደርጉ ድንቅ ይዘቶች።' },
        { title: 'የወር ሙሉ የይዘት ዕቅድ (Calendar)', desc: 'ዛሬ ምን እለጥፋለሁ ብሎ መጨነቅ ቀረ። የወሩን ሙሉ ምን መለጠፍ እንዳለበት ቀድመን በስትራቴጂ እናቅዳለን።' },
        { title: 'ወቅታዊ ትሬንዶችን (Trends) መጠቀም', desc: 'በከተማዋ ያሉ ማራኪ ትሬንዶችን ከድርጅትዎ ስራ ጋር በማገናኘት ያለምንም ክፍያ በሺዎች የሚቆጠር ተመልካች ማምጣት።' }
      ],
      freeOfferTitle: '🎁 የ Hebasy ልዩ የነፃ የቪዲዮ ሃሳብ እና Hook',
      freeOfferDesc: 'ለድርጅትዎ የሚሆን ምን አይነት ቪዲዮ ወይም ጽሑፍ መስራት እንዳለብዎት ግራ ገብቶዎታል? የገጽዎን ሊንክ ይላኩልንና ሰውን ቀጥታ የሚስቡ 3 የቪዲዮ አጀማመሮችን (Hooks) ሙሉ በሙሉ በነፃ እንስጥዎት!',
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
          {/* 🔗 SEO & SPA Friendly React Router Link */}
          <Link 
            to="/#services" 
            aria-label={isAmharic ? 'ወደ አገልግሎቶች ገጽ ተመለስ' : 'Go back to Hebasy services section'}
            className="inline-flex items-center text-xs font-black tracking-widest text-[#00aaff] hover:text-white transition-all duration-300 group bg-slate-900/40 border border-slate-800/60 px-4 py-2.5 rounded-xl backdrop-blur-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> 
            {isAmharic ? 'ወደ አገልግሎቶች' : 'BACK TO SERVICES'}
          </Link>

          <button
            onClick={() => setIsAmharic(!isAmharic)}
            aria-label={isAmharic ? 'Switch to English language' : 'ቋንቋ ወደ አማርኛ ቀይር'}
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#00aaff]/20 to-transparent rounded-2xl"></div>
              <Edit3 className="h-7 w-7 text-[#00aaff] relative z-10" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#00aaff] animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-[#00aaff] uppercase">
                  {isAmharic ? 'የ Hebasy የፈጠራ ሲስተም' : 'HEBASY CREATIVE SYSTEM'}
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
              aria-label={isAmharic ? 'ወደ Hebasy የፈጠራ ዳይሬክተር በስልክ ይደውሉ' : 'Call Hebasy Creative Director now'}
              className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-white text-slate-950 font-black text-sm rounded-xl hover:bg-[#00aaff] hover:text-white transition-all duration-300 shadow-2xl active:scale-98"
            >
              <Phone className="h-4 w-4 mr-2" />
              {current.ctaCall}
            </a>
            <a
              href="https://t.me/hebasy_marketing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isAmharic ? 'Hebasyን በቴሌግራም ያናግሩ' : 'Message Hebasy Marketing team on Telegram'}
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