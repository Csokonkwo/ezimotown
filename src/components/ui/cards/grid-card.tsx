'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ClientMasonry = dynamic(() => import('./client-masonry'), { ssr: false });
export default function GridCard() {
  return <ClientMasonry />;
}
