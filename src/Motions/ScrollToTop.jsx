// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') return;

    const scrollToTop = () => {
      const lenis = window.lenis;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { immediate: true, lock: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
