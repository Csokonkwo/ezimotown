'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';

type AOSProviderProps = {
  children: React.ReactNode;
};
const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
