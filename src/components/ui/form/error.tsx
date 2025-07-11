import React from 'react';

export type ErrorProps = {
  errorMessage?: string | null;
};
export const Error = ({ errorMessage }: ErrorProps) => {
  if (!errorMessage) return null;
  return (
    <div
      role="alert"
      aria-label={errorMessage}
      className="text-[14px] md:text-sm text-red-500"
    >
      {errorMessage}
    </div>
  );
};
