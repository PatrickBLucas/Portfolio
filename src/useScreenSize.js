import { useState, useEffect } from 'react';

export function useScreenSize() {
  // Define the breakpoint for mobile vs desktop (you can customize)
  const mobileBreakpoint = 768; // px

  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    window.addEventListener('resize', handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
}
