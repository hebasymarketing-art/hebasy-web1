import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PortalDashboard from './components/portal/PortalDashboard';
import type { PortalData } from './components/portal/PortalDashboard';
import Login from './components/portal/Login';

// ኮር ክፍሎችን ያለምንም ላግ በፍጥነት እንዲጭን ቀጥታ Import እናደርጋቸዋለን
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import BlogList from './components/BlogList';

// ከበድ ያሉትን ክፍሎች Lazy Load እናደርጋለን
const WhyUs = lazy(() => import('./components/WhyUs'));
const ProductPhotography = lazy(() => import('./components/ProductPhotography'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BlogDetail = lazy(() => import('./components/BlogDetail'));
const Gallery = lazy(() => import('./components/Gallery'));
const Comments = lazy(() => import('./components/Comments'));

// የሰርቪስ ዝርዝር ገጾች
const ContentCreation = lazy(() => import('./page/services/ContentCreation'));
const SeoService = lazy(() => import('./page/services/SeoService'));
const SocialMedia = lazy(() => import('./page/services/SocialMedia'));
const WebDev = lazy(() => import('./page/services/WebDev'));
const NewProductPhotography = lazy(() => import('./page/services/ProductPhotography'));
const FullService = lazy(() => import('./page/services/FullService'));

// 🚀 የገጽ ለውጥን እና የስክሪን አቀማመጥን የሚቆጣጠር ወሳኝ ፈንክชั่น
function ScrollAndHistoryManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.includes('#blog')) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);
  return null;
}

// 🧱 የየራሳቸው Skeleton / Placeholder መጫኛዎች
const SectionFallback = () => (
  <div className="py-20 text-center text-[10px] font-black text-gray-300 tracking-[0.3em] uppercase animate-pulse">
    Loading Content...
  </div>
);

// 🏠 ሙሉው የሆም ፔጅ መዋቅር (ዳር እስከ ዳር የለተጠጠ - FULL WIDTH)
function HomePageContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#blog') {
      setTimeout(() => {
        const element = document.getElementById('blog');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <div className="w-full transition-all duration-300">
        <section id="home" className="w-full"><Hero /></section>
        <section id="about" className="w-full"><AboutUs /></section>
        <section id="services" className="w-full"><Services /></section>
        <section id="blog" className="w-full"><BlogList /></section>
        
        <section id="gallery" className="w-full">
          <Suspense fallback={<SectionFallback />}>
            <Gallery />
          </Suspense>
        </section>

        <section id="why-us" className="w-full">
          <Suspense fallback={<SectionFallback />}>
            <WhyUs />
          </Suspense>
        </section>

        <section id="photography" className="w-full">
          <Suspense fallback={<SectionFallback />}>
            <ProductPhotography />
          </Suspense>
        </section>

        <section id="comments" className="w-full">
          <Suspense fallback={<SectionFallback />}>
            <Comments />
          </Suspense>
        </section>

        <section id="contact" className="w-full">
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </section>
      </div>
    </>
  );
}

// 🔙 "Back to Home" በተን የተመለሰበት እና ርቀቱ (Padding-Top) ወደ `pt-28` የጠበበበት የብሎግ መዋቅር
function BlogDetailWrapper() {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-28 pb-10 px-6 md:px-12 relative max-w-[1550px] mx-auto">
      {/* 🛠️ የጠፋው በተን በቅንጦት ተመልሷል */}
      <div className="mb-6">
        <button 
          onClick={() => navigate('/#blog')}
          className="inline-flex items-center space-x-2 text-[10px] font-black tracking-widest text-[#001f3f] hover:text-[#00aaff] transition-all uppercase bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full shadow-sm cursor-pointer border-0"
        >
          <svg className="w-3.5 h-3.5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span>Back to Blog</span>
        </button>
      </div>

      <Suspense fallback={<div className="h-screen flex items-center justify-center text-gray-400 text-xs">LOADING ARTICLE...</div>}>
        <BlogDetail />
      </Suspense>
    </div>
  );
}

// 껍 አጠቃላይ የሳይቱ ሼል (Header እና Footerን ጨምሮ 100% ሙሉ ስክሪን እንዲሆን የተደረገ)
function AppShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isPortal = pathname === '/portal';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative w-full flex flex-col">
      {!isPortal && <Header />}
      <main className="w-full flex-grow">{children}</main>
      {!isPortal && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

function AppContent() {
  const [user, setUser] = useState<PortalData | null>(null);

  return (
    <AppShell>
      <ScrollAndHistoryManager />
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/services/social-media" element={<Suspense fallback={null}><SocialMedia /></Suspense>} />
        <Route path="/services/web-dev" element={<Suspense fallback={null}><WebDev /></Suspense>} />
        <Route path="/services/content-creation" element={<Suspense fallback={null}><ContentCreation /></Suspense>} />
        <Route path="/services/seo" element={<Suspense fallback={null}><SeoService /></Suspense>} />
        <Route path="/services/photography" element={<Suspense fallback={null}><NewProductPhotography /></Suspense>} />
        <Route path="/services/full-service" element={<Suspense fallback={null}><FullService /></Suspense>} />
        <Route path="/blog" element={<HomePageContent />} />
        <Route path="/blog/:slug" element={<BlogDetailWrapper />} />
        <Route path="/portal" element={user ? (
          <PortalDashboard data={user} onLogout={() => { localStorage.clear(); window.location.href = '/'; }} />
        ) : (
          <Login onLoginSuccess={(data) => setUser(data)} />
        )} />
        <Route path="*" element={<HomePageContent />} />
      </Routes>
    </AppShell>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}