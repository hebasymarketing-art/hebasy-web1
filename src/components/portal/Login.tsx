import { useState } from 'react';
import { supabase } from '../supabase';

export default function Login({ onLoginSuccess }: { onLoginSuccess: (data: any) => void }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [clientIdentifier, setClientIdentifier] = useState('');
  const [clientVerifyCode, setClientVerifyCode] = useState('');
  const [passwordHint, setPasswordHint] = useState('');

  // የHebasy Marketing ቴሌግራም ዩዘርናም ወይም የቡድን አድራሻ
  const HEBASY_TELEGRAM = 'hebasy_Marketing';

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('Reports')
      .select('*')
      .eq('client_code', code); 

    if (error) {
      alert("ስህተት ተፈጥሯል");
    } else if (data && data.length > 0) {
      onLoginSuccess(data[0]); 
    } else {
      alert("የተሳሳተ ኮድ!");
    }
    setLoading(false);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientIdentifier.trim() || !clientVerifyCode.trim()) {
      alert("እባክዎ መለያዎን እና የተሰጠውን ማረጋገጫ ቁጥር ሙሉ በሙሉ ያስገቡ");
      return;
    }

    // መልዕክቱ ሙሉ በሙሉ በ Hebasy ስም ብቻ እንዲሄድ ይደረጋል
    const message = encodeURIComponent(`ሰላም Hebasy Marketing፣ የፓስዎርድ ማስታወሻ/ሪሴት እፈልጋለሁ።\n\nየደንበኛ ስም/መለያ: ${clientIdentifier}\nየማረጋገጫ ቁጥር: ${clientVerifyCode}`);
    const telegramUrl = `https://t.me/${HEBASY_TELEGRAM}?text=${message}`;

    window.open(telegramUrl, '_blank');
    setShowForgotModal(false);
    setClientIdentifier('');
    setClientVerifyCode('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#001428] relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 animate-pulse -top-20 -left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px] opacity-20 animate-pulse delay-1000 -bottom-20 -right-20"></div>
      
      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-[2rem] shadow-2xl w-full max-w-sm text-center border border-white/20 z-10">
        <h2 className="text-2xl font-extrabold mb-8 text-[#001428] tracking-tight">ደንበኛ መግቢያ</h2>
        
        <input 
          type="password" 
          placeholder="የደንበኛ ኮድ ያስገቡ" 
          className="w-full p-4 mb-4 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-[#0096ff] focus:ring-4 focus:ring-[#0096ff]/10 transition-all text-center font-medium"
          onChange={(e) => setCode(e.target.value)}
        />
        
        <div className="text-right mb-6">
          <button 
            type="button"
            onClick={() => setShowForgotModal(true)}
            className="text-xs text-[#0096ff] hover:underline font-medium"
          >
            ፓስዎርድ ረሱ?
          </button>
        </div>

        <button 
          onClick={handleLogin} 
          className="w-full bg-[#0096ff] text-white py-4 rounded-2xl font-bold hover:bg-[#007acc] active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/20"
        >
          {loading ? '...' : 'ግባ'}
        </button>
      </div>

      {showForgotModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl w-full max-w-sm text-center shadow-2xl">
            <h3 className="text-xl font-bold text-[#001428] mb-2">የፓስዎርድ ማስታወሻ (Hebasy)</h3>
            <p className="text-xs text-slate-500 mb-5">ማንነትዎን ለማረጋገጥ መለያዎን እና የተሰጠውን የማረጋገጫ ቁጥር ያስገቡ።</p>
            
            <form onSubmit={handleForgotPassword}>
              <input 
                type="text" 
                placeholder="የደንበኛ ስም ወይም ኮድ"
                value={clientIdentifier}
                onChange={(e) => setClientIdentifier(e.target.value)}
                className="w-full p-3 mb-3 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-[#0096ff] text-sm"
              />
              <input 
                type="password" 
                placeholder="የማረጋገጫ ቁጥር (Verification PIN)"
                value={clientVerifyCode}
                onChange={(e) => setClientVerifyCode(e.target.value)}
                className="w-full p-3 mb-5 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-[#0096ff] text-sm"
              />
              <div className="flex gap-2">
                <button 
                  type="button"
                  onClick={() => setShowForgotModal(false)}
                  className="w-1/2 bg-slate-200 text-slate-700 py-3 rounded-xl font-bold text-sm hover:bg-slate-300 transition-all"
                >
                  ይቅር
                </button>
                <button 
                  type="submit"
                  className="w-1/2 bg-[#0096ff] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#007acc] transition-all"
                >
                  ላክ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}