import { Facebook, Linkedin, Instagram, Send, Phone, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001f3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-6">
            <img
              src="/hebasy_1-01.webp"
              alt="Hebasy Marketing"
              className="h-20 mb-4 w-auto object-contain brightness-110"
            />
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Transform your business with data-driven marketing strategies that deliver measurable results 
              and sustainable growth in the digital age.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com/Hebasy_marketing", color: "hover:bg-blue-600" },
                { icon: Instagram, href: "https://instagram.com/Hebasy_marketing", color: "hover:bg-pink-600" },
                { icon: Send, href: "https://t.me/Hebasy_marketing", color: "hover:bg-[#00aaff]" },
                { icon: Linkedin, href: "https://linkedin.com/company/hebasy-marketing", color: "hover:bg-blue-700" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/5 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#00aaff]">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Advertising</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Content Strategy</a></li>
              <li><a href="#photography" className="hover:text-white transition-colors">Product Photography</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#00aaff]">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Work with Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Phone */}
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-[#00aaff]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-[#00aaff]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Call Us</p>
                <a href="tel:+251907100476" className="text-white font-bold text-lg hover:text-[#00aaff] transition-colors tracking-tight">
                  +251 907 100 476
                </a>
              </div>
               <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Direct</p>
                <a href="tel:+251976028350" className="text-white font-bold text-lg hover:text-[#00aaff] transition-colors tracking-tight">
                  +251 976 028 350
                </a>
              </div>
            </div>

            {/* Telegram */}
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-[#00aaff]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6 text-[#00aaff]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Telegram</p>
                <a href="https://t.me/hebasy_marketing" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg hover:text-[#00aaff] transition-colors">
                  @hebasy_marketing
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-[#00aaff]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-[#00aaff]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                <a href="mailto:hebasymarketing@gmail.com" className="text-white font-bold text-lg hover:text-[#00aaff] transition-colors break-all">
                  hebasymarketing@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Copyright */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="text-[#00aaff] font-bold">Hebasy Marketing</span>. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}