import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional custom easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: listen to scroll
    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
