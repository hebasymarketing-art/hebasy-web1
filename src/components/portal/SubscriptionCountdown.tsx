import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

interface SubscriptionCountdownProps {
  clientId?: string;
}

type CountdownStatus = 'loading' | 'normal' | 'warning' | 'expired' | 'unavailable' | 'error';

interface CountdownState {
  status: CountdownStatus;
  expiryTime: number | null;
  errorMessage?: string;
}

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const WARNING_WINDOW = 30 * DAY_IN_MS;

const parseExpiryTime = (value: string | null | undefined): number | null => {
  if (!value) return null;
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
  const timestamp = Date.parse(dateOnly ? `${value}T23:59:59` : value);
  return Number.isFinite(timestamp) ? timestamp : null;
};

const pad = (value: number) => String(value).padStart(2, '0');

export function SubscriptionCountdown({ clientId }: SubscriptionCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownState>({
    status: clientId ? 'loading' : 'unavailable',
    expiryTime: null,
  });
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    let active = true;
    setNow(Date.now());

    if (!clientId) {
      setCountdown({ status: 'unavailable', expiryTime: null });
      return () => {
        active = false;
      };
    }

    setCountdown({ status: 'loading', expiryTime: null });
    const fetchExpiry = async () => {
      try {
        const { data, error } = await supabase
          .from('Reports')
          .select('contract_expiry, deadline')
          .eq('client_code', clientId)
          .order('id', { ascending: true })
          .limit(1)
          .maybeSingle();

        if (error) throw error;
        if (!active) return;

        const expiryTime = parseExpiryTime(data?.contract_expiry)
          ?? parseExpiryTime(data?.deadline);
        setCountdown({
          status: expiryTime === null ? 'unavailable' : (expiryTime <= Date.now() ? 'expired' : 'normal'),
          expiryTime,
        });
      } catch (error) {
        console.error('Error fetching subscription expiry:', error);
        if (active) {
          setCountdown({
            status: 'error',
            expiryTime: null,
            errorMessage: 'We could not load your subscription dates. Please refresh or contact your account manager.',
          });
        }
      }
    };

    void fetchExpiry();
    return () => {
      active = false;
    };
  }, [clientId]);

  useEffect(() => {
    if (countdown.expiryTime === null) return undefined;
    const timerId = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timerId);
  }, [countdown.expiryTime]);

  const remaining = countdown.expiryTime === null ? 0 : countdown.expiryTime - now;
  const status: CountdownStatus = countdown.expiryTime === null
    ? countdown.status
    : remaining <= 0
      ? 'expired'
      : remaining <= WARNING_WINDOW
        ? 'warning'
        : 'normal';
  const totalSeconds = Math.max(0, Math.floor(remaining / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const expiryLabel = countdown.expiryTime === null
    ? null
    : new Date(countdown.expiryTime).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const tone = status === 'expired'
    ? 'border-red-300 bg-red-50'
    : status === 'warning'
      ? 'border-amber-300 bg-amber-50'
      : 'border-blue-200 bg-white';
  const isAlert = status === 'warning' || status === 'expired';

  return (
    <section
      aria-label="Subscription status"
      aria-live="polite"
      className={`w-full rounded-3xl border-2 p-5 shadow-sm transition-colors sm:p-7 ${tone}`}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Subscription status</p>
          <h2 className="mt-1 text-xl font-extrabold text-[#001F3F] sm:text-2xl">
            {status === 'expired' ? 'Your subscription has expired' : 'Time remaining on your subscription'}
          </h2>
          {status === 'loading' && <p className="mt-2 text-sm text-slate-600">Loading your subscription dates...</p>}
          {status === 'unavailable' && <p className="mt-2 text-sm text-slate-600">No subscription expiry date is available yet.</p>}
          {status === 'error' && <p role="alert" className="mt-2 text-sm font-medium text-red-700">{countdown.errorMessage}</p>}
          {expiryLabel && <p className="mt-2 text-sm text-slate-600">Expiry date: <strong>{expiryLabel}</strong></p>}
        </div>

        {expiryLabel && (
          <div className="flex shrink-0 items-center gap-2 sm:gap-3" aria-label={`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`}>
            {[
              [days, 'days'],
              [hours, 'hours'],
              [minutes, 'minutes'],
              [seconds, 'seconds'],
            ].map(([value, unit]) => (
              <div key={unit} className="min-w-14 rounded-xl border border-slate-200 bg-white px-2 py-2 text-center shadow-sm sm:min-w-16 sm:px-3">
                <span className="block text-xl font-black tabular-nums text-[#001F3F] sm:text-2xl">{unit === 'days' ? value : pad(Number(value))}</span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{unit}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {isAlert && (
        <div className={`mt-5 flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between ${status === 'expired' ? 'border-red-300 bg-red-100' : 'border-amber-300 bg-amber-100'}`}>
          <div>
            <p className={`font-extrabold ${status === 'expired' ? 'text-red-900' : 'text-amber-900'}`}>
              {status === 'expired' ? 'Renew now to continue your service.' : 'Your subscription expires within 30 days.'}
            </p>
            <p className={`mt-1 text-sm ${status === 'expired' ? 'text-red-800' : 'text-amber-800'}`}>
              {status === 'expired' ? 'Contact your account manager or submit a renewal request.' : 'Plan your upgrade or renewal before your package expires.'}
            </p>
          </div>
          <a
            href="/renewal-submission"
            className={`inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition ${status === 'expired' ? 'bg-red-700 hover:bg-red-800' : 'bg-amber-700 hover:bg-amber-800'}`}
          >
            Upgrade / Renew
          </a>
        </div>
      )}
    </section>
  );
}
