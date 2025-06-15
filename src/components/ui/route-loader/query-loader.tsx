'use client';
import { useEffect, useRef } from 'react';
import { useIsFetching } from '@tanstack/react-query';
import NProgress from 'nprogress';

let debounceTimeout: NodeJS.Timeout | null = null;

export const QueryLoader = () => {
  const isFetching = useIsFetching();
  const isNProgressStarted = useRef(false);

  useEffect(() => {
    if (isFetching > 0) {
      if (!debounceTimeout) {
        debounceTimeout = setTimeout(() => {
          NProgress.start();
          isNProgressStarted.current = true;
        }, 200); // debounce start
      }
    } else {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
        debounceTimeout = null;
      }
      if (isNProgressStarted.current) {
        NProgress.done();
        isNProgressStarted.current = false;
      }
    }
  }, [isFetching]);
  return null;
};
