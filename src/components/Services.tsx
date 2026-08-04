import { Share2, Search, Megaphone, FileText, Phone, Send, Camera, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'We grow your brand presence across all digital platforms.',
    features: ['Content Strategy', 'Community Management', 'Analytics & Reporting'],
    path: '/services/social-media',
    accessibleText: 'about our Social Media Marketing services'
  },
  {
    icon: Search,
    title: 'Web Design & Development',
    description: 'Creating modern, responsive, and high-converting websites.',
    features: ['Responsive Design', 'User Experience', 'Performance Optimization'],
    path: '/services/web-dev',
    accessibleText: 'about Web Design and Development'
  },
  {
    icon: Megaphone,
    title: 'Content Creation',
    description: "Telling your brand's story through engaging visuals and copy.",
    features: ['Copywriting', 'Visual Design', 'Brand Messaging'],
    path: '/services/content-creation',
    accessibleText: 'about Strategic Content Creation'
  },
  {
    icon: FileText,
    title: 'Search Engine Optimization',
    description: 'Dominate search rankings and increase organic traffic with data-driven SEO strategies.',
    features: ['Technical SEO', 'Content Optimization', 'Link Building'],
    path: '/services/seo',
    accessibleText: 'about Search Engine Optimization services'
  },
  {
    icon: Camera,
    title: 'Product Photography',
    description: 'Capturing stunning, high-end visuals of your products to drive massive sales.',
    features: ['Commercial Shooting', 'Professional Editing', 'Studio Lighting'],
    path: '/services/photography',
    accessibleText: 'about Product Photography services'
  },
  {
    icon: Sparkles,
    title: 'Full-Service Package',
    description: 'Our ultimate, hands-off package covering all aspects of your brand digital presence.',
    features: ['All 5 Services Combined', 'End-to-End Execution', 'Dedicated Brand Team'],
    path: '/services/full-service',
    accessibleText: 'about our Full-Service Growth Package'
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services');
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
    <section id="services" className="py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUpService {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .service-reveal {
          animation: fadeInUpService 0.6s ease-out forwards;
          opacity: 0;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Full-Service Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive strategies designed to accelerate your growth and outperform your competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.path}
              style={{ animationDelay: `${index * 0.15}s` }}
              className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 ${isVisible ? 'service-reveal' : 'opacity-0'}`}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#001f3f] rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg] shadow-lg shadow-blue-900/20">
                    <service.icon className="h-8 w-8 text-[#00aaff]" />
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <h3 className="text-xl font-extrabold text-[#001f3f] mb-3 group-hover:text-[#00aaff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                  
                  <ul className="grid grid-cols-1 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm font-medium text-gray-700">
                        <div className="w-2 h-2 bg-[#00aaff] rounded-full mr-3 shadow-[0_0_8px_rgba(0,170,255,0.5)]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* 🛠️ የሞባይልን አቀማመጥና የነካኪ ቦታ (Touch Target) ለማስተካከል የተሻሻለ ክላስ */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2 w-full">
                    <a
                      href="tel:+251907100476"
                      className="w-full sm:flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-[#001f3f] hover:bg-black text-white font-bold rounded-xl transition-all duration-300 shadow-md active:scale-95 text-sm"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    
                    <a
                      href="https://t.me/hebasy_marketing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center px-4 py-2.5 border-2 border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-white font-bold rounded-xl transition-all duration-300 active:scale-95 text-sm"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Telegram
                    </a>

                    {/* 🚀 እዚህ ጋር የጎግል ቦት እንዲያነበው sr-only ስፓን ተጨምሯል (SEO 100/100 ያደርገዋል) */}
                    <Link
                      to={service.path}
                      className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start text-sm font-bold text-[#00aaff] hover:text-[#001f3f] py-2 transition-colors group/link cursor-pointer min-h-[44px]"
                    >
                      Learn More 
                      <span className="sr-only"> {service.accessibleText}</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}