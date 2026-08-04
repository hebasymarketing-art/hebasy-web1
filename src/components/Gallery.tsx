import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { Video, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

function ExpandableText({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 55;

  if (!text || text.length <= limit) return <p className="text-gray-600 text-[13px] leading-relaxed">{text}</p>;

  return (
    <p className="text-gray-600 text-[13px] leading-relaxed">
      {isExpanded ? text : `${text.substring(0, limit)}...`}
      <button 
        onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
        className="ml-1 text-[#00aaff] font-bold hover:underline"
      >
        {isExpanded ? " ያሳንሱ" : " ተጨማሪ"}
      </button>
    </p>
  );
}

export default function Gallery() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // 🚀 ዳታው እስኪመጣ መጠበቂያ ስቴት

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
        if (data) setItems(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false); // 🚀 ዳታው ሲመጣ ሎዲንጉን ያጠፋዋል
      }
    };
    fetchGallery();
  }, []);

  return (
    /* 🚀 እዚህ ጋር min-h-[650px] ጨምሬበታለሁ፤ ዳታው ባዶ ቢሆንም እንኳ ብሮውዘሩ ወደ ፉተር እንዳይዘል ይከለክለዋል! */
    <div id="gallery" className="pt-24 pb-20 bg-white min-h-[650px] md:min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-black text-[#001f3f] mb-5 tracking-tighter">
            Hebasy <span className="text-[#00aaff]">Gallery</span>
          </h1>
          <p className="text-gray-400 italic text-base">Creative visuals that tell your story.</p>
        </div>

        {/* 🚀 ሎዲንግ ካለ የሚያምር Loading Indicator ያሳያል */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#00aaff]"></div>
          </div>
        ) : items.length === 0 ? (
          // ዳታቤዙ ላይ ምንም ቪዲዮ ከሌለ ባዶ እንዳይሆን
          <div className="text-center text-gray-400 py-12">No gallery items found.</div>
        ) : (
          <div className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar px-2">
            {items.map((item, index) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="min-w-[300px] max-w-[300px] bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-200 ease-out"
              >
                <div className="aspect-[9/16] bg-[#0a0a0a] relative flex items-center justify-center"> 
                  <video 
                    src={item.video_url} 
                    controls 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-7">
                  <span className="text-[10px] font-black text-[#00aaff] uppercase tracking-[0.15em] bg-blue-50/50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-[#001f3f] mt-4 mb-2 truncate">
                    {item.title}
                  </h3>
                  
                  <ExpandableText text={item.caption || ""} />
                  
                  <div className="flex gap-5 border-t border-gray-50 mt-6 pt-5">
                    {item.tiktok_url && (
                      <a href={item.tiktok_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors">
                        <Video size={16} strokeWidth={2.5} /> <span className="text-xs font-bold">TikTok</span>
                      </a>
                    )}
                    {item.insta_url && (
                      <a href={item.insta_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#E1306C] transition-colors">
                        <Instagram size={16} strokeWidth={2.5} /> <span className="text-xs font-bold">Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}