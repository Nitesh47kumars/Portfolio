import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const STORAGE_KEY = 'scroll-positions';

const savePositions = (positions) => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
};

const getPositions = () => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
};

const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const positionsRef = useRef(getPositions());
  const scrollTimeout = useRef(null);
  const prevPathRef = useRef(pathname);

  // Save scroll position of previous route before path changes
  useEffect(() => {
    return () => {
      positionsRef.current[prevPathRef.current] = window.scrollY;
      savePositions(positionsRef.current);
    };
  }, [pathname]);

  useEffect(() => {
    prevPathRef.current = pathname;

    const lenis = window.lenis;
    const pos = positionsRef.current[pathname] || 0;

    // Restore scroll position after rendering
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(pos, { immediate: true, lock: true });
        } else {
          window.scrollTo({ top: pos, behavior: 'auto' });
        }
      });
    });
  }, [pathname]);

  // Optional: throttled scroll saving while on page (if you want to update scroll position live)
  useEffect(() => {
    const onScroll = () => {
      if (scrollTimeout.current) return;
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
        positionsRef.current[pathname] = window.scrollY;
        savePositions(positionsRef.current);
      }, 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
