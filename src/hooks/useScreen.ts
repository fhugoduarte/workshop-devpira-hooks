import { useState, useEffect } from 'react';

export default function useScreen() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function onResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  function maxWidth(width: number, component: React.ReactNode) {
    if (width >= windowWidth) {
      return component;
    }
  }

  function minWidth(width: number, component: React.ReactNode) {
    if (width <= windowWidth) {
      return component
    }
  }

  return { width: windowWidth, maxWidth, minWidth };
}