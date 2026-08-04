import React, { useCallback, useEffect, useState, useRef } from 'react';
import { supabase } from './supabase';
import { useSupabaseQuery } from '../hooks/useSupabaseQuery';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CommentItem {
  id: number;
  user_name: string;
  user_email: string;
  company_name?: string | null;
  comment_text: string;
  rating: number;
  created_at: string;
}

export default function Comments() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState(''); // 💡 1. አዲሱ useState እዚህ ጋር ተጨምሯል
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchComments = useCallback(async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });
    return { data: data as CommentItem[] | null, error };
  }, []);

  const { data: comments, loading, refetch } = useSupabaseQuery<CommentItem[]>(fetchComments, {
    cacheKey: 'comments',
  });

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto' });
        }, 100);
      }
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 350 : scrollLeft + 350;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // 💡 2. እዚህ ጋር company_name ወደ Supabase አብሮ እንዲላክ ተደርጓል
      const { error } = await supabase
        .from('comments')
        .insert([{ 
          user_name: name, 
          user_email: email, 
          comment_text: text, 
          rating: rating,
          company_name: companyName ? companyName : null 
        }]);
      if (!error) {
        setName(''); setEmail(''); setCompanyName(''); setText(''); setRating(5);
        refetch();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const CommentCard = ({ c }: { c: CommentItem }) => (
    <div className="w-[300px] md:w-[350px] bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.03)] mx-4 shrink-0 flex flex-col h-full self-start">
      <div className="flex text-yellow-400 mb-6 scale-90 origin-left">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill={i < (c.rating || 0) ? "currentColor" : "none"} />
        ))}
      </div>
      <div className="flex-grow w-full">
        <p className="text-[#001f3f] text-sm font-bold leading-relaxed italic break-words whitespace-normal">"{c.comment_text}"</p>
      </div>
      <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mt-6">
        <div className="w-10 h-10 bg-gradient-to-br from-[#001f3f] to-[#00aaff] rounded-full flex items-center justify-center text-white font-black text-[10px] shrink-0">
          {c.user_name.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0 overflow-hidden">
          <span className="font-black text-[#001f3f] text-xs block tracking-tight truncate">{c.user_name}</span>
          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold block truncate">
            {c.company_name ? c.company_name : "Hebasy Client"}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white overflow-hidden" id="comments">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-5 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#001f3f] tracking-tighter uppercase italic">
            የደንበኞቻችን <span className="text-[#00aaff]">ድምፅ</span>
          </h2>
          <h2 className="text-3xl md:text-3xl font-black text-[#001f3f] tracking-tighter uppercase italic mt-2">
            Client voice
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-[#001f3f] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00aaff]/10 blur-3xl rounded-full"></div>
               <h3 className="text-xl font-black text-white mb-6 uppercase italic relative z-10">አስተያየት ይስጡ</h3>
               <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                 <input type="text" placeholder="ስም" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#00aaff] text-white text-xs font-bold" value={name} onChange={(e) => setName(e.target.value)} required />
                 <input type="email" placeholder="ኢሜይል" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#00aaff] text-white text-xs font-bold" value={email} onChange={(e) => setEmail(e.target.value)} required />
                 
                 {/* 💡 3. የኩባንያ ስም መጻፊያ አዲሱ ሳጥን እዚህ ጋር ገብቷል (required አልተደረገም፣ ስለዚህ የግዴታ አይደለም) */}
                 <input type="text" placeholder="የድርጅት ስም (Optional)" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#00aaff] text-white text-xs font-bold" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                 
                 <div className="flex flex-col gap-2 py-3 bg-white/5 rounded-2xl items-center border border-white/5">
                   <span className="text-[9px] text-gray-500 uppercase font-black tracking-widest">ደረጃ ይስጡ</span>
                   <div className="flex gap-2">
                     {[1, 2, 3, 4, 5].map((s) => (
                       <button key={s} type="button" onClick={() => setRating(s)} className="transition-all hover:scale-125">
                         <Star size={22} fill={rating >= s ? "#00aaff" : "none"} stroke={rating >= s ? "#00aaff" : "#4b5563"} strokeWidth={2} />
                       </button>
                     ))}
                   </div>
                 </div>
                 <textarea placeholder="መልዕክት..." className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-[#00aaff] text-white h-24 resize-none text-xs font-bold" value={text} onChange={(e) => setText(e.target.value)} required />
                 <button disabled={submitting} className="w-full bg-[#00aaff] text-[#001f3f] py-4 rounded-2xl font-black text-[10px] tracking-widest hover:bg-white transition-all uppercase shadow-lg shadow-[#00aaff]/20">
                   {submitting ? 'በመላክ ላይ...' : 'አስገባ'}
                 </button>
               </form>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col justify-center min-h-[500px]"
          >
             <div className="relative group">
               <div className="hidden md:block">
                 <button onClick={() => scroll('left')} className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#00aaff] hover:text-white transition-all border border-gray-100"><ChevronLeft size={24} /></button>
                 <button onClick={() => scroll('right')} className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#00aaff] hover:text-white transition-all border border-gray-100"><ChevronRight size={24} /></button>
               </div>
               <div ref={scrollRef} className="overflow-hidden py-10">
                 <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
                   {loading && !comments ? (
                     <>{[1, 2].map((n) => (
                       <div key={n} className="w-[300px] md:w-[350px] bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.03)] mx-4 shrink-0 animate-pulse">
                         <div className="h-4 w-24 bg-gray-200 rounded mb-6" />
                         <div className="h-3 w-full bg-gray-200 rounded mb-2" />
                         <div className="h-3 w-5/6 bg-gray-200 rounded mb-2" />
                         <div className="h-3 w-2/3 bg-gray-200 rounded mb-8" />
                         <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                           <div className="w-10 h-10 bg-gray-200 rounded-full" />
                           <div className="h-3 w-24 bg-gray-200 rounded" />
                         </div>
                       </div>
                     ))}</>
                   ) : (comments ?? []).length > 0 ? (
                     <>{(comments ?? []).map((c, i) => <CommentCard key={`a-${i}`} c={c} />)}{(comments ?? []).map((c, i) => <CommentCard key={`b-${i}`} c={c} />)}</>
                   ) : (
                     <div className="text-gray-300 italic p-10 font-bold uppercase tracking-widest text-xs">መረጃ እየፈለግን ነው...</div>
                   )}
                 </div>
               </div>
             </div>
             
             <div className="mt-10 flex flex-col md:flex-row items-center gap-6 px-6">
               <div className="flex -space-x-3">
                 {[...Array(4)].map((_, i) => (<div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-[#001f3f] flex items-center justify-center text-[8px] font-black text-white italic shadow-lg">H</div>))}
               </div>
               <div className="flex flex-col">
                  <p className="text-sm font-black text-[#001f3f] uppercase tracking-tighter italic">
                    በአጠቃላይ <span className="text-[#00aaff] text-lg"> {(comments ?? []).length} </span> {(comments ?? []).length === 1 ? 'ደንበኛ' : 'ደንበኞች'} አስተያየት ሰጥተዋል!
                  </p>
                 <span className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">Hebasy Marketing Agency</span>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
      <style>{`.animate-marquee { animation: marquee 50s linear infinite; display: flex; } @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  );
}