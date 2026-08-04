import { useState } from 'react';
import { Link } from 'react-router-dom'; // 🔗 react-router-dom ሊንክ ተጨምሯል
import { ArrowLeft, Send, Phone, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

export default function FullService() {
  const [isAmharic, setIsAmharic] = useState(false);

  const content = {
    en: {
      title: 'We scale your business, you lead it.',
      tagline: 'Stop doing everything yourself. Let us build your growth engine.',
      problemTitle: 'The "CEO Trap"',
      problemText: 'You started your business to grow, not to get stuck editing videos, fixing website bugs, or setting up ads. Every hour you spend on technical stuff is an hour your business loses. You’re working for your business instead of letting it work for you.',
      solutionTitle: 'Our Full-Growth System',
      solutionText: 'At Hebasy, we become your dedicated growth team. We don’t just give advice; we do the work. We handle your content, marketing, and systems. You finally get to step back, focus on the big decisions, and watch your company scale.',
      deliverablesTitle: 'What we take off your plate:',
      deliverables: [
        { title: 'Total Digital Management', desc: 'We own your marketing and technical operations so you never have to worry about them again.' },
        { title: 'Automated Sales Engines', desc: 'We build systems that turn strangers into paying customers 24/7—no extra effort from you.' },
        { title: 'Clear Growth Roadmap', desc: 'No more guesswork. We set the strategy, hit the targets, and grow your revenue predictably.' },
        { title: 'Direct Access', desc: 'As our partner, you have our team on speed dial for any growth move you want to make.' }
      ],
      bonusTitle: '🎁 The Hebasy Guarantee',
      bonusDesc: 'We don’t just finish and leave. We stay with you for 30 days after launch to make sure the cash is flowing exactly how it should—completely free.',
      ctaCall: 'Let’s talk business',
      ctaTelegram: 'Message us on Telegram'
    },
    am: {
      title: 'ንግድዎን እናሳድግ፣ እርስዎ መሪ ይሁኑ።',
      tagline: 'ሁሉንም ነገር ብቻዎን ከመስራት ይውጡ። የዕድገት ማሽንዎን እኛ እንገነባለን።',
      problemTitle: 'የ"ሰራተኛ" ወጥመድ!',
      problemText: 'ንግድ የጀመሩት ለማደግ እንጂ፣ በቪዲዮ ኤዲቲንግ፣ በዌብሳይት ቴክኒክ ወይም በማስታወቂያ አያያዝ ለመጠመድ አይደለም። በቴክኒክ ስራ ላይ ባሳለፉት እያንዳንዱ ሰዓት ንግድዎ እድገት እያጣ ነው። አሁን ያለው ሁኔታ ንግድዎን እርስዎ እየሰሩት ነው እንጂ፣ ንግድዎ ለእርስዎ እየሰራ አይደለም።',
      solutionTitle: 'የሄባሲ የዕድገት ሲስተም',
      solutionText: 'ሄባሲ፣ እንደ የእርስዎ የዕድገት ቡድን ሆኖ ስራውን በሙሉ ይረከባል። ዝም ብለን ሀሳብ አንሰጥም፤ ተግባራዊ እናደርገዋለን። ይዘትዎን፣ ማርኬቲንግዎን እና ሲስተምዎን እኛ እንቆጣጠራለን። እርስዎ ከዚህ ሁሉ ጭንቀት ወጥተው፣ ትልልቅ ውሳኔዎችን በመወሰን ላይ ብቻ ትኩረት ያድርጉ።',
      deliverablesTitle: 'ከጫንቃዎ ላይ የምናነሳቸው ስራዎች:',
      deliverables: [
        { title: 'የዲጂታል ስራዎች ሙሉ ሃላፊነት', desc: 'ማርኬቲንግ እና ቴክኒክ ስራዎች በሙሉ በእኛ ቁጥጥር ስር ይሆናሉ፣ እርስዎ ጭንቀቱን ይረሱ።' },
        { title: 'አውቶማቲክ የሽያጭ ማሽን', desc: 'ሰዎችን ወደ ደንበኛ የሚቀይር አውቶማቲክ ሲስተም 24/7 ያለምንም ድካም ይሰራል።' },
        { title: 'ግልጽ የዕድገት ካርታ', desc: 'ግምት አይሰራም። ስልቱን እናዘጋጃለን፣ ግቡን እንመታለን፣ ገቢዎንም በተከታታይ እናሳድጋለን።' },
        { title: 'ቀጥተኛ የቡድን ድጋፍ', desc: 'እንደ አጋር፣ ለሄባሲ ቡድን በማንኛውም ሰዓት ቀጥተኛ መዳረሻ ይኖርዎታል።' }
      ],
      bonusTitle: '🎁 የሄባሲ ዋስትና',
      bonusDesc: 'ስራውን ጨርሰን አንጠፋም። ሲስተሙ ገቢ ማምጣት እስኪጀምር ድረስ፣ ከስራ በኋላ ለ30 ቀናት በነፃ ከጎንዎ ሆነን እንከታተላለን።',
      ctaCall: 'ስለ ንግድዎ እናውራ',
      ctaTelegram: 'በቴሌግራም አናግሩን'
    }
  };

  const current = isAmharic ? content.am : content.en;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#00aaff]/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-12">
          {/* 🔗 SEO & SPA Friendly React Router Link */}
          <Link 
            to="/#services" 
            aria-label={isAmharic ? 'ወደ ዋናው ገጽ ተመለስ' : 'Go back to main homepage section'}
            className="inline-flex items-center text-xs font-black tracking-widest text-[#00aaff] hover:text-white transition-all group bg-slate-900/40 border border-slate-800/60 px-4 py-2.5 rounded-xl backdrop-blur-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {isAmharic ? 'ወደ ዋናው ገጽ' : 'BACK TO HOME'}
          </Link>
          <button 
            onClick={() => setIsAmharic(!isAmharic)} 
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 border border-slate-800/80 text-xs font-bold rounded-xl text-[#00aaff] hover:text-white transition-all"
          >
            {isAmharic ? 'English' : 'አማርኛ'}
          </button>
        </div>

        <div className="bg-gradient-to-b from-slate-900/80 to-slate-950/90 rounded-[2.5rem] p-6 md:p-14 border border-slate-800/50 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center gap-6 border-b border-slate-800/50 pb-10 mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00aaff]/20 to-slate-900 border border-[#00aaff]/20 rounded-2xl flex items-center justify-center shadow-2xl">
              <Zap className="h-7 w-7 text-[#00aaff]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">{current.title}</h1>
              <p className="text-[#00aaff] font-bold mt-2">{current.tagline}</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-gradient-to-r from-red-950/10 to-transparent border-l-4 border-red-500 border-y border-r border-slate-800/40 rounded-r-2xl p-8">
              <h2 className="text-xs font-black text-red-400 uppercase tracking-widest mb-3">{current.problemTitle}</h2>
              <p className="text-slate-300 leading-relaxed font-medium">{current.problemText}</p>
            </div>

            <div className="bg-gradient-to-r from-[#00aaff]/5 to-transparent border-l-4 border-[#00aaff] border-y border-r border-slate-800/40 rounded-r-2xl p-8">
              <h2 className="text-base font-black text-white uppercase tracking-wider mb-3">{current.solutionTitle}</h2>
              <p className="text-slate-300 leading-relaxed font-medium">{current.solutionText}</p>
            </div>

            <div>
              <h2 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-6">{current.deliverablesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/40 hover:border-[#00aaff]/30 transition-all group">
                    <div className="flex items-center mb-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00aaff] mr-2.5" />
                      <h3 className="text-sm font-black text-white">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-[#00aaff]/5 border border-[#00aaff]/20 rounded-3xl p-8 shadow-inner">
              <h3 className="text-base font-black text-[#00aaff] flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5" /> {current.bonusTitle}
              </h3>
              <p className="text-slate-300 text-sm font-medium">{current.bonusDesc}</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+251907100476" 
              aria-label={isAmharic ? 'ከሄባሲ ጋር የንግድ ውይይት ለመጀመር በስልክ ይደውሉ' : 'Call Hebasy to talk business now'}
              className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-white text-slate-950 font-black text-sm rounded-xl hover:bg-[#00aaff] hover:text-white transition-all shadow-xl"
            >
              <Phone className="h-4 w-4 mr-2" /> {current.ctaCall}
            </a>
            <a 
              href="https://t.me/hebasy_marketing" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={isAmharic ? 'የሄባሲ ቡድንን በቴሌግራም ያናግሩ' : 'Message Hebasy business development team on Telegram'}
              className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-slate-950 border border-slate-800 hover:border-[#00aaff]/60 text-white font-black text-sm rounded-xl transition-all"
            >
              <Send className="h-4 w-4 mr-2 text-[#00aaff]" /> {current.ctaTelegram}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}