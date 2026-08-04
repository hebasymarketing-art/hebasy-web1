import { useEffect, useState, useMemo } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { supabase } from '../supabase';

interface PortalData {
  client_code?: string;
  client_name?: string;
  package_name?: string;
  total_amount?: number | string;
  paid_amount?: number | string;
  remaining_amount?: number | string;
  total_videos_planned?: number | string;
  videos_published?: number | string;
  contract_duration?: string;
  contract_expiry?: string;
  contract_start?: string;
  next_content_topic?: string;
  editor_name?: string;
  host_name?: string;
  host_image_url?: string;
  host_instagram?: string;
  host_tiktok?: string;
  host_gender?: 'male' | 'female' | string;
  total_views?: number | string;
  total_engagement?: number | string;
  traffic_generated?: number | string;
  script_pdf_url?: string;
  content_calendar?: string;
  monthly_growth?: number | string;
}

interface PortalDashboardProps {
  data: PortalData;
  onLogout: () => void;
}

export default function PortalDashboard({ data, onLogout }: PortalDashboardProps) {
  const [chartData, setChartData] = useState<{ val: number }[]>([]);
  const [isGrowthPositive, setIsGrowthPositive] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lang, setLang] = useState<'en' | 'am'>('en');

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
      onLogout();
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onLogout]);

  useEffect(() => {
    const fetchMonthlyData = async () => {
      try {
        const { data: dbData } = await supabase
          .from('Reports')
          .select('monthly_growth')
          .not('monthly_growth', 'is', null)
          .order('id', { ascending: true })
          .limit(6);

        if (dbData && dbData.length > 0) {
          const formatted = dbData.map(item => ({ val: Number(item.monthly_growth) || 0 }));
          setChartData(formatted);

          if (dbData.length >= 2) {
            const current = Number(dbData[dbData.length - 1].monthly_growth) || 0;
            const previous = Number(dbData[dbData.length - 2].monthly_growth) || 0;
            setIsGrowthPositive(current >= previous);
          }
        }
      } catch (error) {
        console.error('Error fetching monthly data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMonthlyData();
  }, []);

  const chartColor = useMemo(() => (isGrowthPositive ? "#16a34a" : "#dc2626"), [isGrowthPositive]);

  const formatLink = (url?: string, defaultUrl: string = '#') => {
    if (!url || url === '#') return defaultUrl;
    let cleanUrl = url.replace('indtagram.com', 'instagram.com').trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      return `https://${cleanUrl}`;
    }
    return cleanUrl;
  };

  const instagramLink = useMemo(() => formatLink(data?.host_instagram, 'https://www.instagram.com'), [data?.host_instagram]);
  const tiktokLink = useMemo(() => formatLink(data?.host_tiktok, 'https://www.tiktok.com'), [data?.host_tiktok]);

  const safeNum = (val: any) => {
    const num = Number(val);
    return isNaN(num) ? 0 : num;
  };

  const totalAmount = safeNum(data?.total_amount);
  const paidAmount = safeNum(data?.paid_amount);
  const paymentProgress = totalAmount > 0 ? Math.min(Math.round((paidAmount / totalAmount) * 100), 100) : 0;

  const videosPlanned = safeNum(data?.total_videos_planned);
  const videosPublished = safeNum(data?.videos_published);
  const videoProgress = videosPlanned > 0 ? Math.min(Math.round((videosPublished / videosPlanned) * 100), 100) : 0;

  // በቀጥታ ከዳታቤዝ ከሚመጣው host_gender (male ወይም female) ጋር ይመሳሰላል
  const isFemaleHost = data?.host_gender?.toLowerCase() === 'female';

  const t = {
    en: {
      logout: "Logout",
      langSwitch: "አማርኛ",
      activePortal: "Active Enterprise Portal • Adama, Ethiopia",
      welcome: "Welcome back",
      subtitle: "Monitor your real-time marketing campaigns, financial execution, and performance analytics.",
      assignedPackage: "Assigned Package",
      financialSummary: "Financial Summary",
      secure: "Secure",
      totalContractValue: "Total Contract Value",
      paidAmount: "Paid Amount",
      remainingBalance: "Remaining Balance",
      paymentProgress: "Payment Progress",
      projectSummary: "Project Summary",
      startDate: "Start Date",
      expiryDate: "Expiry Date",
      videosStatus: "Videos Status",
      published: "Published",
      nextTopic: "Next Topic",
      assignedEditor: "Assigned Video Editor",
      productionMilestones: "Production Milestones",
      assignedHost: "Assigned Host",
      selected: "Selected",
      hostSubtitle: "Professional Media Host & Creator",
      optimizedHost: "Optimized for high-conversion social campaigns",
      performanceMetrics: "Performance Metrics",
      performanceSubtitle: "Real-time audience reach and engagement tracking",
      liveAnalytics: "Live Analytics",
      totalViews: "Total Views",
      engagement: "Engagement",
      monthlyGrowth: "Monthly Growth",
      monthlyGrowthNote: "*(Note: Metrics update dynamically every month to reflect client growth performance)*",
      trafficGenerated: "Traffic Generated",
      projectDocuments: "Project Documents",
      documentsSubtitle: "Access official scripts, schedules, and campaign outlines",
      secureFiles: "Secure Files",
      viewScriptPdf: "View Script PDF",
      scriptDesc: "Production script and dialogue document",
      contentCalendar: "Content Calendar",
      calendarDesc: "Scheduled posting dates and media assets",
      needSupport: "Need support? Contact your manager.",
    },
    am: {
      logout: "ውጣ",
      langSwitch: "English",
      activePortal: "የፖርታል ማስተካከያ ፕሮፋይል • አዳማ፣ ኢትዮጵያ",
      welcome: "እንኳን ደህና መጡ",
      subtitle: "የማርኬቲንግ ስራዎችህን፣ የክፍያ ሁኔታዎችን እና የእድገት መረጃዎችን እዚህ ጋር ሆናችሁ መከታተል ትችላላችሁ።",
      assignedPackage: "የተያዘለት ፓኬጅ",
      financialSummary: "የገንዘብ ሂሳብ ማጠቃለያ",
      secure: "ደህንነቱ የተጠበቀ",
      totalContractValue: "አጠቃላይ የውል ዋጋ",
      paidAmount: "የተከፈለው ገንዘብ",
      remainingBalance: "የቀረ ሂሳብ",
      paymentProgress: "የክፍያ ሂደት",
      projectSummary: "የፕሮጀክት ማጠቃለያ",
      startDate: "የጀመረበት ቀን",
      expiryDate: "የሚያበቃበት ቀን",
      videosStatus: "የቪዲዮዎች ሁኔታ",
      published: "ተለቀዋል",
      nextTopic: "ቀጣይ ርዕስ",
      assignedEditor: "የተመደበው ቪዲዮ አስተካካይ",
      productionMilestones: "የስራ ሂደት",
      assignedHost: isFemaleHost ? "የተመረጠችው አቅራቢ" : "የተመረጠው አቅራቢ",
      selected: isFemaleHost ? "የተመረጠችው" : "የተመረጠው",
      hostSubtitle: "የሚዲያ አቅራቢ እና የይዘት ፈጣሪ",
      optimizedHost: "ለማህበራዊ ሚዲያ ማስታወቂያዎች የሚሆን",
      performanceMetrics: "የእድገት እና ተደራሽነት መለኪያዎች",
      performanceSubtitle: "ሰዎች ስራዎን ያዩበት እና የተሳተፉበት ትክክለኛ መረጃ",
      liveAnalytics: "የቀጥታ መረጃ",
      totalViews: "አጠቃላይ እይታዎች",
      engagement: "ተሳትፎ",
      monthlyGrowth: "ወርሃዊ እድገት",
      monthlyGrowthNote: "*(ማስታወሻ፡ መረጃዎች በየወሩ እንደ ስራው ሂደት ይሻሻላሉ)*",
      trafficGenerated: "የገባ ሰው ብዛት",
      projectDocuments: "የሰነድ ማከማቻ",
      documentsSubtitle: "ስክሪፕቶች እና የሰዓት ሰሌዳዎችን ማግኘት የሚችሉበት",
      secureFiles: "ደህንነቱ የተጠበቀ ፋይል",
      viewScriptPdf: "ስክሪፕቱን ተመልከት",
      scriptDesc: "የተዘጋጀው ስክሪፕት እና የንግግር ሐሳብ",
      contentCalendar: "የመልቀቂያ ቀናት ሰሌዳ",
      calendarDesc: "ቪዲዮዎች የሚለቀቁበት ቀናት ዝርዝር",
      needSupport: "እርዳታ ከፈለጉ ማናጀርዎን ማግኘት ይችላሉ።",
    }
  }[lang];

  return (
    <div className="min-h-screen bg-[#001F3F] font-sans text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col w-full overflow-x-hidden">
      
      {/* Fixed Header - Full Screen Width */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#001F3F] backdrop-blur-md border-b border-white/10 px-3 sm:px-6 md:px-8 py-3 sm:py-4 shadow-md w-full">
        <div className="w-full flex justify-between items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden p-1.5 border border-white/20">
              <img src="/logo.webp" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm md:text-base font-extrabold text-white tracking-wide leading-tight truncate">Client Portal</h2>
              <p className="text-[10px] text-blue-300 uppercase tracking-widest font-bold truncate">Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="bg-white/10 hover:bg-white/20 text-white px-3 sm:px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 border border-white/10 cursor-pointer backdrop-blur-sm whitespace-nowrap shrink-0"
            >
              <span>🌐</span> {t.langSwitch}
            </button>
            
            <button 
              onClick={onLogout}
              className="bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-500/30 px-3 sm:px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-sm whitespace-nowrap shrink-0"
            >
              <span>🚪</span> {t.logout}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="mt-[76px] px-3 md:px-6 pb-16 w-full flex flex-col items-center bg-[#F8FAFC] min-h-[calc(100vh-76px)] shadow-2xl">

        <div className="w-full pt-6">
          {/* Welcome Hero Card */}
          <div className="bg-[#001F3F] text-white p-6 md:p-12 rounded-[28px] shadow-xl relative overflow-hidden mb-8 border border-slate-800 w-full">
            <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-blue-300 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {t.activePortal}
                </div>
                <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight mb-3">
                  {t.welcome}, {data?.client_name || 'Valued Client'}!
                </h1>
                <p className="text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed">
                  {t.subtitle}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shrink-0">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">{t.assignedPackage}</span>
                <span className="text-2xl md:text-3xl font-black text-white uppercase">{data?.package_name || 'VIP Package'}</span>
              </div>
            </div>
          </div>

          {/* Main Grid Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 w-full">
            
            {/* Financial Summary */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#001F3F]">{t.financialSummary}</h3>
                  <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">{t.secure}</span>
                </div>
                <div className="mb-6">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">{t.totalContractValue}</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-[#001F3F]">{totalAmount.toLocaleString()} ብር</p>
                </div>
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 font-medium">{t.paidAmount}:</span>
                    <span className="font-bold text-emerald-600">{paidAmount.toLocaleString()} ብር</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 font-medium">{t.remainingBalance}:</span>
                    <span className="font-bold text-amber-600">{safeNum(data?.remaining_amount).toLocaleString()} ብር</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>{t.paymentProgress}</span>
                  <span>{paymentProgress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5">
                  <div className="bg-[#2563EB] h-full rounded-full transition-all duration-500" style={{ width: `${paymentProgress}%` }}></div>
                </div>
              </div>
            </div>

            {/* Project Summary */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#001F3F]">{t.projectSummary}</h3>
                  <span className="text-xs font-semibold bg-blue-50 text-[#2563EB] px-3 py-1 rounded-full border border-blue-100">{data?.contract_duration || 'Active'}</span>
                </div>
                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500 font-medium">{t.startDate}</span>
                    <span className="font-bold text-slate-800">{data?.contract_start || '-'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500 font-medium">{t.expiryDate}</span>
                    <span className="font-bold text-slate-800">{data?.contract_expiry || '-'}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500 font-medium">{t.videosStatus}</span>
                    <span className="font-bold text-blue-600">{videosPublished} / {videosPlanned} {t.published}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500 font-medium">{t.nextTopic}</span>
                    <span className="font-medium text-slate-900 truncate max-w-[200px]" title={data?.next_content_topic}>{data?.next_content_topic || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">{t.assignedEditor}</span>
                    <span className="font-bold text-[#001F3F]">{data?.editor_name || '-'}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>{t.productionMilestones}</span>
                  <span>{videoProgress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${videoProgress}%` }}></div>
                </div>
              </div>
            </div>

            {/* Host Card */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#001F3F]">{t.assignedHost}</h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> {t.selected}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center py-4">
                  <div className="relative mb-4">
                    <img 
                      src={data?.host_image_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'} 
                      alt={data?.host_name || 'Host'} 
                      className="w-24 h-24 rounded-full border-4 border-blue-50 object-cover shadow-md"
                    />
                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full shadow">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-xl text-slate-900 mb-1">{data?.host_name || 'Assigned Talent'}</h4>
                  <p className="text-xs text-slate-500 mb-5">{t.hostSubtitle}</p>
                  
                  <div className="flex items-center justify-center gap-3 w-full">
                    <a 
                      href={instagramLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                    >
                      Instagram
                    </a>
                    <a 
                      href={tiktokLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50/50 p-3.5 rounded-2xl border border-blue-100 text-center">
                <p className="text-xs text-blue-900 font-medium">{t.optimizedHost}</p>
              </div>
            </div>

          </div>

          {/* Main Grid Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 w-full">
            
            {/* Performance Analytics */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#001F3F]">{t.performanceMetrics}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{t.performanceSubtitle}</p>
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{t.liveAnalytics}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-500 font-medium mb-1">{t.totalViews}</p>
                    <p className="text-2xl font-extrabold text-slate-900">{safeNum(data?.total_views).toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-500 font-medium mb-1">{t.engagement}</p>
                    <p className="text-2xl font-extrabold text-slate-900">{safeNum(data?.total_engagement).toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1">{t.monthlyGrowth}</p>
                      <div className="flex items-center gap-2">
                        <span className={`font-extrabold text-xl ${isGrowthPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                          {isGrowthPositive ? '▲' : '▼'} {chartData.length > 0 ? chartData[chartData.length - 1].val.toLocaleString() : '0'}
                        </span>
                      </div>
                    </div>
                    <div className="h-12 w-full mt-3">
                      {isLoading ? (
                        <div className="h-full w-full bg-slate-200 animate-pulse rounded-lg"></div>
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData}>
                            <defs>
                              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={chartColor} stopOpacity={0.4}/>
                                <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="val" stroke={chartColor} strokeWidth={2.5} fillOpacity={1} fill="url(#colorVal)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-500 font-medium mb-1">{t.trafficGenerated}</p>
                    <p className="text-2xl font-extrabold text-slate-900">{safeNum(data?.traffic_generated).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-3 border-t border-slate-100 text-center">
                <p className="text-[11px] font-semibold text-slate-500 italic">{t.monthlyGrowthNote}</p>
              </div>
            </div>

            {/* Documents & Resources */}
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#001F3F]">{t.projectDocuments}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{t.documentsSubtitle}</p>
                  </div>
                  <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">{t.secureFiles}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href={data?.script_pdf_url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col justify-between bg-[#001F3F] hover:bg-slate-900 text-white p-6 rounded-2xl shadow-md transition-all duration-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-sm">PDF</div>
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">{t.viewScriptPdf}</h4>
                      <p className="text-xs text-slate-300">{t.scriptDesc}</p>
                    </div>
                  </a>

                  <a 
                    href={data?.content_calendar || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col justify-between bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 p-6 rounded-2xl shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold text-sm">CAL</div>
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">{t.contentCalendar}</h4>
                      <p className="text-xs text-slate-500">{t.calendarDesc}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <span>{t.needSupport}</span>
                <span className="font-bold text-[#2563EB]">Client Portal Hub</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}