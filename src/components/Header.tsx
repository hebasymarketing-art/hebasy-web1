import { useState, useEffect, type MouseEvent } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Portal', href: '/portal' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Photography', href: '/photography' },
  { name: 'Comments', href: '/comments' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollAndSpy = () => {
      setIsScrolled(window.scrollY > 5);

      if (location.pathname === '/portal') {
        setActiveSection('portal');
        return;
      }

      let currentSection = 'home';
      
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      navigation.forEach((item) => {
        if (item.href === '/portal') return;
        const id = item.href === '/' ? 'home' : item.href.replace('/', '');
        const element = document.getElementById(id);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollAndSpy);
    handleScrollAndSpy();

    return () => window.removeEventListener('scroll', handleScrollAndSpy);
  }, [location.pathname]);

  const handleScrollToSection = (href: string, e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '/portal') {
      setActiveSection('portal');
      navigate('/portal');
      return;
    }

    const id = href === '/' ? 'home' : href.replace('/', '');

    if (location.pathname === '/' || location.pathname === href) {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState({}, '', '/');
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState({}, '', href);
        }
      }
    } else {
      navigate(href);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <style>{`
        @keyframes fastHeaderFade {
          from { opacity: 0; transform: translate3d(0, -4px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .animate-fast-fade {
          animation: fastHeaderFade 0.25s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
          will-change: transform, opacity;
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md">
        <div className="flex justify-between items-center h-20 max-w-[1550px] mx-auto px-6 sm:px-8 md:px-12">
          
          <NavLink to="/" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollToSection('/', e)} className="flex items-center group">
            {/* 🛠️ ሪስፖንሲቭ ሳይዝና Explicit Width/Height ተጨምሮበት የፒሲውን 100 ለመመለስ የተሰራው ማስተካከያ */}
            <img
              src="/hebasy_1-01.webp"
              alt="Hebasy Marketing"
              className="h-16 w-auto sm:h-20 md:h-22 object-contain"
              width="288"
              height="224"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => {
              const currentId = item.href === '/' ? 'home' : item.href.replace('/', '');
              const isActive = activeSection === currentId;
              
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollToSection(item.href, e)}
                  className={`animate-fast-fade relative font-bold transition-all duration-300 group py-1 text-sm tracking-wide capitalize ${
                    isActive ? 'text-[#00aaff]' : 'text-[#001f3f] hover:text-[#00aaff]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#00aaff] transition-all duration-500 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </NavLink>
              );
            })}
            
            <NavLink
              to="/contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollToSection('/contact', e)}
              className="animate-fast-fade px-7 py-2.5 bg-[#001f3f] hover:bg-black text-white font-black rounded-xl text-xs uppercase tracking-widest transition-all duration-300"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#001f3f] hover:text-[#00aaff] bg-transparent border-0 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100">
            <div className="flex flex-col space-y-1 p-6">
              {navigation.map((item) => {
                const currentId = item.href === '/' ? 'home' : item.href.replace('/', '');
                const isActive = activeSection === currentId;

                return (
                  <button
                    key={item.name}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleScrollToSection(item.href, e)}
                    className={`font-bold text-left transition-all duration-200 py-3 border-b border-gray-50 last:border-0 text-base capitalize bg-transparent border-0 cursor-pointer ${
                      isActive ? 'text-[#00aaff]' : 'text-[#001f3f]'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleScrollToSection('/contact', e)}
                className="mt-4 px-6 py-4 bg-[#001f3f] text-white font-black rounded-xl text-center text-sm uppercase tracking-widest cursor-pointer border-0"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}