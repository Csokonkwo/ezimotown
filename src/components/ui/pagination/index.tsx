import React from 'react';
import { Button } from '../buttons';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    //show up to 5 buttons
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let page = start; page <= end; page++) {
      pages.push(
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 ${page === currentPage ? 'text-white bg-black-15' : ' text-white'}`}
        >
          {page}
        </Button>,
      );
    }
    return pages;
  };
  return (
    <>
      {totalPages > 1 && (
        <div className={`flex justify-center gap-2 mt-8 ${className}`}>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3"
          >
            Previous
          </Button>
          {renderPageNumbers()}
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3"
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
}
