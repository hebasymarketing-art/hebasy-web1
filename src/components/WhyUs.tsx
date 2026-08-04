import { Target, TrendingUp, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const reasons = [
  {
    icon: Target,
    title: 'Results-Oriented Approach',
    description: 'We focus on metrics that matter. Every campaign is built with clear KPIs and measurable outcomes that directly impact your bottom line.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: 'With over 50 successful campaigns, our strategies consistently deliver above-industry-average performance and ROI.',
  },
  {
    icon: Users,
    title: 'Dedicated Team of Experts',
    description: 'Our certified specialists bring decades of combined experience across all major marketing channels and industries.',
  },
  {
    icon: Award,
    title: 'Award-Winning Creativity',
    description: 'Recognized by industry leaders for innovative campaigns that blend creative excellence with data-driven insights.',
  },
];

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('why-us');
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
    <section id="why-us" className="py-24 sm:py-32 bg-white overflow-hidden">
      {/* CSS Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .reason-reveal {
          animation: zoomIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Partner With <span className="text-[#00aaff]">Us</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#00aaff] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We combine strategic thinking with creative execution to deliver marketing that moves the needle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`text-center group ${isVisible ? 'reason-reveal' : 'opacity-0'}`}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8">
                {/* Background decorative circle */}
                <div className="absolute inset-0 bg-[#00aaff]/10 rounded-full group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative z-10 flex items-center justify-center w-full h-full bg-[#001f3f] rounded-2xl rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-xl">
                  <reason.icon className="h-10 w-10 text-[#00aaff] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-[#001f3f] mb-4 group-hover:text-[#00aaff] transition-colors">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Banner - Brand Colors */}
        <div className={`mt-24 bg-gradient-to-br from-[#001f3f] via-[#002d5c] to-[#00aaff] rounded-[2.5rem] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#00aaff]/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black mb-6">Ready to Scale Your Business?</h3>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg font-light">
              Join hundreds of businesses that trust us to drive their growth. Let's discuss how we can help you achieve your goals.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-4 bg-[#00aaff] hover:bg-white hover:text-[#001f3f] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110 shadow-[0_10px_20px_rgba(0,170,255,0.4)]"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}