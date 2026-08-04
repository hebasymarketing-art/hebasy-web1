import { Camera, Sparkles, Package, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// 🔴 የ Pexels የውጭ ሊንኮችን አጥፍተን በሀገር ውስጥ (public/portfolio) በአጭሩ ተክተናል
const portfolioImages = [
  {
    url: '/portfolio/photo1.webp',
    alt: 'Product Photography Example 1',
  },
  {
    url: '/portfolio/photo2.webp',
    alt: 'Product Photography Example 2',
  },
  {
    url: '/portfolio/photo3.webp',
    alt: 'Product Photography Example 3',
  },
  {
    url: '/portfolio/photo4.webp',
    alt: 'Product Photography Example 4',
  },
  {
    url: '/portfolio/photo5.webp',
    alt: 'Product Photography Example 5',
  },
  {
    url: '/portfolio/photo6.webp',
    alt: 'Product Photography Example 6',
  },
];

const features = [
  {
    icon: Camera,
    title: 'Commercial Photography',
    description: 'Studio-quality shots that highlight every detail and selling point of your products.',
  },
  {
    icon: Sparkles,
    title: 'Lifestyle Imagery',
    description: 'Contextual photography that shows your products in real-world scenarios.',
  },
  {
    icon: Package,
    title: 'E-commerce Ready',
    description: 'Optimized images perfect for online stores, marketplaces, and social media.',
  },
];

export default function ProductPhotography() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('photography');
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
    <section id="photography" className="py-24 sm:py-32 bg-white overflow-hidden">
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .photo-reveal {
          animation: slideUp 0.8s cubic-bezier(0.21, 0.6, 0.35, 1) forwards;
          opacity: 0;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-6 py-2 bg-[#00aaff]/10 rounded-full border border-[#00aaff]/20">
            <span className="text-sm font-bold text-[#00aaff] tracking-wider uppercase">Visual Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#001f3f] mb-6">
            Product Photography & <span className="text-[#00aaff]">Creative Visuals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming products into digital assets that drive sales through professional commercial
            and lifestyle photography
          </p>
        </div>

        {/* Features with Brand Colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {features.map((feature, index) => (
            <div key={index} className={`text-center group transition-all duration-700 ${isVisible ? 'photo-reveal' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#001f3f] rounded-3xl mb-6 shadow-xl group-hover:bg-[#00aaff] transition-colors duration-500 group-hover:rotate-6">
                <feature.icon className="h-10 w-10 text-[#00aaff] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#001f3f] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-gray-200"></div>
            <h3 className="text-2xl font-black text-[#001f3f] uppercase tracking-widest">Portfolio Showcase</h3>
            <div className="h-px w-12 bg-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-[#00aaff]/20 hover:shadow-2xl transition-all duration-500 aspect-square bg-gray-100 ${isVisible ? 'photo-reveal' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* ⚡ 100/100 ፐርፎርማንስ ለማምጣት loading እና decoding አክለንበታል */}
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                   <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-bold text-lg">Hebasy Visuals</p>
                      <p className="text-sm text-[#00aaff]">Professional Shoot</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner with Logo Colors */}
        <div className={`bg-gradient-to-br from-[#001f3f] to-[#00aaff] rounded-[2.5rem] p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black mb-6 italic">
              Elevate Your Product Presentation
            </h3>
            <p className="text-blue-50 mb-10 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Professional photography that converts browsers into buyers. Let us capture your products
              in their best light and watch your sales soar.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-4 bg-white hover:bg-[#001f3f] text-[#001f3f] hover:text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl"
            >
              Book a Product Photography Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}