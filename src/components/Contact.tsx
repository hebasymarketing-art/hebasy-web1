import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, PhoneCall,  } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    phone:''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const element = document.getElementById('contact');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = 'service_t7tfupg'; 
    const templateId = 'template_xgmd7i8';
    const publicKey = 'cu6nbTKUp4CXsQ9if';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      phone:formData.phone,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("መልዕክትዎ በትክክል ተልኳል! በቅርቡ እንመለሳለን።");
      setFormData({ name: '', email: '', company: '', service: '', message: '',phone:'', });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("ይቅርታ፣ መልዕክት መላክ አልተቻለም። እባክዎ ደግመው ይሞክሩ ወይም በስልክ ይደውሉልን።");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00aaff]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4">
            Let's Start Growing Your <span className="text-[#00aaff]">Business</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your marketing? Reach out to discuss your goals and discover how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-[#00aaff]/10 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2 ml-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#00aaff] focus:ring-4 focus:ring-[#00aaff]/10 outline-none transition-all"
                    placeholder="E.g. Bernabas Ewnetu"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2 ml-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#00aaff] focus:ring-4 focus:ring-[#00aaff]/10 outline-none transition-all"
                    placeholder="contact@yourcompany.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                        <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2 ml-1">phone number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#00aaff] focus:ring-4 focus:ring-[#00aaff]/10 outline-none transition-all"
                    placeholder="+251-976028350"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2 ml-1">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#00aaff] focus:ring-4 focus:ring-[#00aaff]/10 outline-none transition-all"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2 ml-1">Service Interested In *</label>
                  <select
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#00aaff] focus:ring-4 focus:ring-[#00aaff]/10 outline-none transition-all appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                   
                 <option value="social-media">Social Media Management</option>
                 <option value="seo">SEO</option>
                 <option value="web-dev">Web Design and Development</option>
                 <option value="photography">Product Photography</option>
                 <option value="content-creation">Content Creation</option>
                 <option value="full-service">Full-Service Package</option>
            </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-[#001f3f] mb-2 ml-1">Tell Us About Your work *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#00aaff] focus:ring-4 focus:ring-[#00aaff]/10 outline-none transition-all resize-none"
                  placeholder="How can Hebasy Marketing help you stand out?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-[2] bg-[#001f3f] text-white py-4 px-8 rounded-2xl font-black hover:bg-black transition-all flex items-center justify-center gap-3 group shadow-xl shadow-blue-900/20 active:scale-95"
                >
                  <span>{isLoading ? 'Sending...' : 'SEND INQUIRY'}</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#00aaff]" />
                </button>
                <a 
                  href="tel:+251907100476" 
                  className="flex-1 bg-[#00aaff] text-white py-4 px-8 rounded-2xl font-black hover:bg-[#001f3f] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#00aaff]/30 active:scale-95"
                >
                  <PhoneCall size={20} />
                  <span>CALL</span>
                </a>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            {/* Email Section - Now Clickable */}
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-all hover:shadow-xl group">
              <div className="bg-[#001f3f] w-14 h-14 rounded-2xl flex items-center justify-center text-[#00aaff] mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#001f3f] mb-2">Email Us</h3>
              <a 
                href="mailto:hebasymarketing@gmail.com" 
                className="text-gray-600 mb-1 break-words font-medium hover:text-[#00aaff] transition-colors block"
              >
                hebasymarketing@gmail.com
              </a>
              <span className="text-xs font-black uppercase tracking-widest text-[#00aaff]">Response within 24h</span>
            </div>

            {/* Phone Section - Clickable */}
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-all hover:shadow-xl group">
              <div className="bg-[#001f3f] w-14 h-14 rounded-2xl flex items-center justify-center text-[#00aaff] mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#001f3f] mb-2">Call Us</h3>
              <a 
                href="tel:+251907100476" 
                className="text-gray-600 mb-6 font-medium hover:text-[#00aaff] transition-colors block"
              >
                +251 907 100 476
              </a>
              <a 
                href="tel:+251907100476" 
                className="flex items-center justify-center gap-2 w-full bg-white border-2 border-[#001f3f] text-[#001f3f] py-3 px-6 rounded-xl font-bold hover:bg-[#001f3f] hover:text-white transition-all shadow-md active:scale-95"
              >
                <span>Call Now</span>
              </a>
            </div>

            {/* Location Section */}
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 transition-all hover:shadow-xl group">
              <div className="bg-[#001f3f] w-14 h-14 rounded-2xl flex items-center justify-center text-[#00aaff] mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#001f3f] mb-2">Location</h3>
              <p className="text-gray-600 font-medium">Adama, Ethiopia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}