/**
 * usePagination Hook
 *
 * NEDEN BU HOOK VAR?
 * ------------------
 * Her sayfada pagination state'i aynı şekilde yönetiliyordu:
 * - page, limit state'leri
 * - Pagination component'e geçilen props
 * Bu hook ile state management merkezi hale geldi.
 *
 * KULLANIM:
 * ---------
 * const { page, limit, setPage, totalPages } = usePagination(totalItems, 10);
 *
 * <Pagination
 *   currentPage={page}
 *   totalPages={totalPages}
 *   onPageChange={setPage}
 * />
 */

import { useState } from 'react';

interface UsePaginationReturn {
  /** Mevcut sayfa numarası (1'den başlar) */
  page: number;

  /** Sayfa başına öğe sayısı */
  limit: number;

  /** Toplam sayfa sayısı */
  totalPages: number;

  /** Sayfa değiştirme fonksiyonu */
  setPage: (page: number) => void;

  /** Limit değiştirme fonksiyonu */
  setLimit: (limit: number) => void;

  /** İlk sayfaya git */
  goToFirstPage: () => void;

  /** Son sayfaya git */
  goToLastPage: () => void;

  /** Önceki sayfaya git */
  goToPrevPage: () => void;

  /** Sonraki sayfaya git */
  goToNextPage: () => void;

  /** Backend için offset değeri (skip) */
  offset: number;

  /** Bir sonraki sayfa var mı? */
  hasNextPage: boolean;

  /** Bir önceki sayfa var mı? */
  hasPrevPage: boolean;

  /** Pagination'ı resetle */
  reset: () => void;
}

/**
 * Pagination hook'u
 * @param totalItems - Toplam öğe sayısı
 * @param initialLimit - Başlangıç limit değeri (default: 10)
 * @param initialPage - Başlangıç sayfa numarası (default: 1)
 * @returns Pagination state ve fonksiyonları
 */
export const usePagination = (
  totalItems: number = 0,
  initialLimit: number = 10,
  initialPage: number = 1
): UsePaginationReturn => {
  const [page, setPageState] = useState(initialPage);
  const [limit, setLimitState] = useState(initialLimit);

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(totalItems / limit) || 1;

  // Offset (skip) değerini hesapla
  const offset = (page - 1) * limit;

  // Bir sonraki/önceki sayfa var mı?
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  // Sayfa değiştirme (geçerli aralıkta tut)
  const setPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPageState(newPage);
    }
  };

  // Limit değiştirme (sayfa 1'e sıfırla)
  const setLimit = (newLimit: number) => {
    setLimitState(newLimit);
    setPageState(1); // Limit değişince sayfayı 1'e sıfırla
  };

  // İlk sayfaya git
  const goToFirstPage = () => setPageState(1);

  // Son sayfaya git
  const goToLastPage = () => setPageState(totalPages);

  // Önceki sayfaya git
  const goToPrevPage = () => {
    if (hasPrevPage) setPageState(page - 1);
  };

  // Sonraki sayfaya git
  const goToNextPage = () => {
    if (hasNextPage) setPageState(page + 1);
  };

  // Reset (başlangıç değerlerine dön)
  const reset = () => {
    setPageState(initialPage);
    setLimitState(initialLimit);
  };

  return {
    page,
    limit,
    totalPages,
    setPage,
    setLimit,
    goToFirstPage,
    goToLastPage,
    goToPrevPage,
    goToNextPage,
    offset,
    hasNextPage,
    hasPrevPage,
    reset,
  };
};

export default usePagination;
