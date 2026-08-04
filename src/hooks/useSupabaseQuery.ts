import { useCallback, useEffect, useRef, useState } from 'react';
import { readCache, writeCache } from '../lib/cache';

export interface SupabaseQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

interface UseSupabaseQueryOptions {
  cacheKey?: string;
}

interface QueryResult<T> {
  data: T | null;
  error: { message?: string } | null;
}

export function useSupabaseQuery<T>(
  fetcher: () => Promise<QueryResult<T>>,
  options: UseSupabaseQueryOptions = {}
): SupabaseQueryResult<T> {
  const { cacheKey } = options;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState(0);
  const requestIdRef = useRef(0);

  const refetch = useCallback(() => setVersion((v) => v + 1), []);

  useEffect(() => {
    let active = true;
    const requestId = ++requestIdRef.current;
    const cached = cacheKey ? readCache<T>(cacheKey) : null;

    if (cached !== null) {
      setData(cached);
      setLoading(false);
    } else {
      setLoading(true);
    }
    setError(null);

    const load = async () => {
      try {
        const result = await fetcher();
        if (!active || requestId !== requestIdRef.current) return;
        if (result.error) {
          throw new Error(result.error.message || 'Failed to load data');
        }
        if (result.data !== null) {
          setData(result.data);
          if (cacheKey) writeCache(cacheKey, result.data);
        }
        setError(null);
      } catch (err) {
        if (!active || requestId !== requestIdRef.current) return;
        const fallback = cacheKey ? readCache<T>(cacheKey) : null;
        if (fallback !== null) setData(fallback);
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        if (active && requestId === requestIdRef.current) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [fetcher, cacheKey, version]);

  return { data, loading, error, refetch };
}
