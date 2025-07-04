import React from 'react';

export default function CircularSpinner() {
  return (
    <div className="w-16 h-16 relative">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-orange-500 rounded-full animate-spin" />
      <div className="absolute top-0 left-0 w-full h-full border-4 border-b-transparent border-pink-500 rounded-full animate-spin delay-75" />
      <div className="absolute top-0 left-0 w-full h-full border-4 border-l-transparent border-yellow-400 rounded-full animate-spin delay-150" />
    </div>
  );
}
