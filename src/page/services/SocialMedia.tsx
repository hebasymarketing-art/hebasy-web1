import { useState } from 'react';
import { ArrowLeft, Globe, Phone, Send, AlertTriangle, Lightbulb, CheckCircle, Sparkles, TrendingUp, BarChart2, Video } from 'lucide-react';

export default function SocialMediaMarketing() {
  const [isAmharic, setIsAmharic] = useState(false);

  const content = {
    en: {
      title: 'Social Media & Video Marketing',
      tagline: 'Posting random flyers and ghosting your page won’t bring clients. Let’s build an active system that converts views into profit.',
      theProblemTitle: 'The Deadly "Dead Page" Syndrome',
      theProblemText: "Many businesses make the mistake of posting boring product pictures, low-quality graphics, or completely disappearing for weeks. When a premium customer stumbles onto your Telegram channel, TikTok, or Instagram and sees zero structure, zero storytelling, and dry content, they assume your business is dead or unprofessional. You aren't losing customers to better products; you're losing them to better content systems.",
      theSolutionTitle: 'How We Turn Views Into Active Customers',
      theSolutionText: "We take full control of your social channels and run them like a media powerhouse. By combining high-converting video scripts, aesthetic graphic design, psychological storytelling, and daily management, we position your business as the undisputed leader in your industry. We don't just hunt for 'vanity likes'—we create content architectures engineered to make people DM you and buy.",
      deliverablesTitle: 'What We Build For Your Brand',
      deliverables: [
        { title: 'High-Converting Scriptwriting', desc: 'We write viral-ready, engaging hooks and stories for your TikToks and Reels that capture short attention spans instantly.' },
        { title: 'Premium Video & Content Production', desc: 'Sleek, dynamic filming and high-velocity editing workflows that make your brand look modern, expensive, and hyper-credible.' },
        { title: 'Complete Feed Architecture', desc: 'We design unified, beautiful layouts and aesthetic post grids that build instant trust the moment a prospect clicks your profile.' },
        { title: 'Daily Content Engine & Strategy', desc: 'Consistency is key. We build a bulletproof posting calendar, maintaining an active online footprint that leaves competitors invisible.' }
      ],
      freeOfferTitle: '🎁 Free Hebasy Content Strategy Audit',
      freeOfferDesc: 'Is your TikTok, Instagram, or Telegram stuck with zero engagement? Drop us your social media username or channel link, and our creative team will audit it completely free! We will give you 3 specific content changes you can make today to increase your views and customers.',
      ctaCall: 'Talk to a Creative Expert Now',
      ctaTelegram: 'Chat with us on Telegram'
    },
    am: {
      title: 'የሶሻል ሚዲያ እና ቪዲዮ ማርኬቲንግ',
      tagline: 'ዝም ብሎ ፎቶ መለጠፍና ገጽን መተው ደንበኛ አያመጣም። እይታዎችን (Views) ወደ እውነተኛ ገቢ የሚቀይር ሲስተም እንገንባ።',
      theProblemTitle: 'የማይንቀሳቀስ ገጽ (Dead Page) ኪሳራ!',
      theProblemText: 'ብዙ ድርጅቶች ሰልችቶት የሚተውትን አሰልቺ ፎቶዎች በመለጠፍ ወይም ለሳምንታት በመጥፋት ትልቅ ስህተት ይሰራሉ። አንድ ትልቅ ከፋይ ደንበኛ የእርስዎን ቴሌግራም፣ ቲክቶክ ወይም ኢንስታግራም ሲጎበኝ ምንም አይነት ማራኪ ታሪክ፣ ውበትና አደረጃጀት ካላገኘ ድርጅቱን እንደ ደካማ ወይም እንደዘጋ ይቆጥረዋል። ደንበኛ እያጡ ያሉት ምርትዎ መጥፎ ስለሆነ አይደለም፤ የተሻለ የይዘት (Content) አቀራረብ ስላልዎት ነው።',
      theSolutionTitle: 'እንዴት እይታዎችን ወደ ገዢ ደንበኛ እንቀይራለን?',
      theSolutionText: 'እኛ የእርስዎን የሶሻል ሚዲያ ገጾች ሙሉ በሙሉ ተረክበን እንደ ትልቅ የሚዲያ ተቋም እናንቀሳቅሰዋለን። ሰውን በቀጥታ የሚስቡ የቪዲዮ ፅሁፎችን (Scripts)፣ ማራኪ የግራፊክስ ዲዛይኖችን፣ እና የስነ-ልቦና ታሪኮችን በማዋሃድ ድርጅትዎ በዘርፉ ቁጥር አንድ ተመራጭ እንዲሆን እናደርጋለን። እኛ ዝም ብሎ ለላይክ (Like) አንሰራም፤ ሰዎችን አነሳስተው ወደ ስልክዎ እንዲደውሉ የሚያደርጉ ስራዎችን እንፈጥራለን።',
      deliverablesTitle: 'ከእኛ የማርኬቲንግ ክፍል የሚያገኟቸው 4 ዋና ነገሮች',
      deliverables: [
        { title: 'ሰውን የሚስብ የቪዲዮ ፅሁፍ (Scripting)', desc: 'ለቲክቶክ እና ለሪልስ (Reels) የሚሆኑ፣ የሰውን ትኩረት በሰከንድ ውስጥ ሰርቀው እስከመጨረሻው የሚያስቆዩ የቪዲዮ ሃሳቦችን የመፃፍ ስራ።' },
        { title: 'የቪዲዮ ማስተዋወቂያ ቀረጻና ኤዲቲንግ', desc: 'የድርጅትዎን ጥራት እና ዝና እጅግ ከፍ አድርገው የሚያሳዩ ዘመናዊ፣ ፈጣን እና ማራኪ ቪዲዮዎችን የመስራት አገልግሎት።' },
        { title: 'የገጽ ውበትና ዲዛይን አወቃቀር', desc: 'አንድ አዲስ ሰው ገጽዎን ሲከፍት ሙሉ በሙሉ ተማርኮ ወዲያው እምነት እንዲጥልቦት የሚያደርግ ወጥ እና ያማረ የገጽ ዲዛይን አቀማመጥ።' },
        { title: 'የዕለታዊ ይዘት እቅድና ማኔጅመንት', desc: 'ዘወትር በደንበኞች አእምሮ ውስጥ ለመኖር የሚያስችል የይዘት የቀን መቁጠሪያ በማዘጋጀት፣ ገጽዎ ሁልጊዜም ንቁ እና ተራማጅ ሆኖ እንዲቀጥል ማድረግ።' }
      ],
      freeOfferTitle: '🎁 የ Hebasy ልዩ የነፃ የሶሻል ሚዲያ ምርመራ',
      freeOfferDesc: 'የቲክቶክ፣ ኢንስታግራም ወይም ቴሌግራም ገጽዎ እይታና መስተጋብር (Engagement) እምቢ ብሎዎታል? የገጽዎን ስም ወይም ሊንክ ይላኩልንና ሙሉ በሙሉ በነፃ እንገምግምልዎ! ሽያጭዎን ለማሳደግ ዛሬውኑ ሊቀይሯቸው የሚገቡ 3 ዋና ዋና የይዘት ምስጢሮችን እንነግርዎታለን።',
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
              <Video className="h-7 w-7 text-[#00aaff] relative z-10" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#00aaff] animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-[#00aaff] uppercase">
                  {isAmharic ? 'የ Hebasy የይዘት ሲስተም' : 'HEBASY CONTENT SYSTEM'}
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