export interface CacheEntry<T> {
  data: T;
  cachedAt: number;
}

const CACHE_PREFIX = 'hebasy_cache_v1_';

export function readCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (!entry || typeof entry !== 'object' || !('data' in entry)) return null;
    return entry.data;
  } catch {
    return null;
  }
}

export function writeCache<T>(key: string, data: T): void {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ data, cachedAt: Date.now() }));
  } catch {
    return;
  }
}

export function clearCache(key: string): void {
  try {
    localStorage.removeItem(CACHE_PREFIX + key);
  } catch {
    return;
  }
}
