import { useState, useEffect } from 'react';
import { cache } from '@/utils/cache';

export function useCache<T>(key: string, fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try to get from cache first
        const cachedData = cache.get(key);
        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          return;
        }

        // If not in cache, fetch fresh data
        const freshData = await fetcher();
        cache.set(key, freshData);
        setData(freshData);
      } catch (error) {
        console.error('Data fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key]);

  return { data, loading };
} 