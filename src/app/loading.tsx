import { Spinner } from '@/components/ui/spinner';
import Image from 'next/image';
import React from 'react';

export default function Loading() {
  <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
    <Image
      src="/assets/logo/ezimo_logo.png"
      alt="Loading..."
      width={150}
      height={150}
      className="animate-[spin_2s_linear_infinite]"
    />
  </div>;
}
