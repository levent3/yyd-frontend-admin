import React from 'react';
import { PaginationInfo } from '../../types/pagination';

interface PaginationProps {
  pagination: PaginationInfo;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
  const {  currentPage, totalPages, hasNextPage, hasPreviousPage } = pagination;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <div className="text-muted">
        Sayfa {currentPage} / {totalPages}
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination mb-0">
          {/* Previous Button */}
          <li className={`page-item ${!hasPreviousPage ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => hasPreviousPage && onPageChange(currentPage - 1)}
              disabled={!hasPreviousPage}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          {/* Page Numbers */}
          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return (
                <li key={`ellipsis-${index}`} className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              );
            }

            return (
              <li
                key={page}
                className={`page-item ${currentPage === page ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(page as number)}
                >
                  {page}
                </button>
              </li>
            );
          })}

          {/* Next Button */}
          <li className={`page-item ${!hasNextPage ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => hasNextPage && onPageChange(currentPage + 1)}
              disabled={!hasNextPage}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
