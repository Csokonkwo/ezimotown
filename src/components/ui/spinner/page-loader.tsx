'use client';
import CircularSpinner from '@/components/ui/spinner/circular-spinner';
import { useState, useEffect } from 'react';


export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate load delay

    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white/30 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <CircularSpinner />
    </div>
  );
}
