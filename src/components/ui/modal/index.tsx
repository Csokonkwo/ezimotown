'use client';
import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) {
          return onDismiss();
        }
      }
    },
    [onDismiss],
  );

  const onKeydown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeydown as unknown as EventListener);
    return () =>
      document.removeEventListener(
        'keydown',
        onKeydown as unknown as EventListener,
      );
  }, [onKeydown]);
  return (
    <div
      ref={overlay}
      className="fixed top-0 right-0 left-0 bottom-0 mx-auto z-10 bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        {children}
      </div>
    </div>
  );
}
