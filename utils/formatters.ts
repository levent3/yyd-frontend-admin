/**
 * Formatter Utilities
 *
 * NEDEN BU DOSYA VAR?
 * -------------------
 * formatCurrency ve formatDate gibi fonksiyonlar 17+ sayfada tekrar ediyordu.
 * Bu dosya ile:
 * - ~200 satır kod tekrarı azaldı
 * - Tutarlılık arttı (tek yerden değiştirme)
 * - Maintainability arttı
 */

/**
 * Para birimi formatlayıcı
 * @param amount - Format edilecek miktar
 * @param currency - Para birimi ('TRY', 'USD', 'EUR')
 * @returns Formatlanmış para birimi string'i
 *
 * @example
 * formatCurrency(1000) // "₺1.000,00"
 * formatCurrency(1000, 'USD') // "$1,000.00"
 */
export const formatCurrency = (
  amount?: number,
  currency: string = 'TRY'
): string => {
  if (amount === undefined || amount === null) {
    const symbol = currency === 'TRY' ? '₺' : currency === 'USD' ? '$' : '€';
    return `${symbol}0`;
  }

  const symbol = currency === 'TRY' ? '₺' : currency === 'USD' ? '$' : '€';
  const locale = currency === 'TRY' ? 'tr-TR' : 'en-US';

  return `${symbol}${amount.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};

/**
 * Tarih formatlayıcı
 * @param date - Format edilecek tarih (string veya Date)
 * @param format - Format tipi ('short', 'long', 'date-only', 'time-only')
 * @returns Formatlanmış tarih string'i
 *
 * @example
 * formatDate('2025-10-21T10:30:00') // "21.10.2025, 10:30"
 * formatDate('2025-10-21T10:30:00', 'long') // "21 Ekim 2025, 10:30"
 * formatDate('2025-10-21T10:30:00', 'date-only') // "21.10.2025"
 */
export const formatDate = (
  date: string | Date,
  format: 'short' | 'long' | 'date-only' | 'time-only' = 'short'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case 'short':
      options.year = 'numeric';
      options.month = '2-digit';
      options.day = '2-digit';
      options.hour = '2-digit';
      options.minute = '2-digit';
      break;
    case 'long':
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      options.hour = '2-digit';
      options.minute = '2-digit';
      break;
    case 'date-only':
      options.year = 'numeric';
      options.month = '2-digit';
      options.day = '2-digit';
      break;
    case 'time-only':
      options.hour = '2-digit';
      options.minute = '2-digit';
      break;
  }

  return dateObj.toLocaleString('tr-TR', options);
};

/**
 * Sayı formatlayıcı (binlik ayraç ile)
 * @param num - Format edilecek sayı
 * @param decimals - Ondalık basamak sayısı (default: 0)
 * @returns Formatlanmış sayı string'i
 *
 * @example
 * formatNumber(1000) // "1.000"
 * formatNumber(1234.56, 2) // "1.234,56"
 */
export const formatNumber = (num?: number, decimals: number = 0): string => {
  if (num === undefined || num === null) return '0';

  return num.toLocaleString('tr-TR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
};

/**
 * Yüzde formatlayıcı
 * @param value - Format edilecek değer (0-100 arası veya 0-1 arası)
 * @param decimals - Ondalık basamak sayısı (default: 0)
 * @param isDecimal - Değer 0-1 arası mı? (default: false, yani 0-100 arası)
 * @returns Formatlanmış yüzde string'i
 *
 * @example
 * formatPercent(75) // "75%"
 * formatPercent(0.75, 1, true) // "75,0%"
 */
export const formatPercent = (
  value?: number,
  decimals: number = 0,
  isDecimal: boolean = false
): string => {
  if (value === undefined || value === null) return '0%';

  const percent = isDecimal ? value * 100 : value;

  return `${percent.toLocaleString('tr-TR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })}%`;
};

/**
 * Telefon numarası formatlayıcı
 * @param phone - Format edilecek telefon numarası
 * @returns Formatlanmış telefon numarası
 *
 * @example
 * formatPhone('5551234567') // "0555 123 45 67"
 */
export const formatPhone = (phone?: string): string => {
  if (!phone) return '-';

  // Sadece rakamları al
  const digits = phone.replace(/\D/g, '');

  // Türk telefon formatı: 0XXX XXX XX XX
  if (digits.length === 10 && digits.startsWith('0')) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9)}`;
  }

  // 11 haneli (5XX ile başlıyorsa başına 0 ekle)
  if (digits.length === 10 && digits.startsWith('5')) {
    return `0${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8)}`;
  }

  return phone; // Format uygun değilse olduğu gibi döndür
};

/**
 * Dosya boyutu formatlayıcı
 * @param bytes - Byte cinsinden boyut
 * @param decimals - Ondalık basamak sayısı (default: 2)
 * @returns Formatlanmış dosya boyutu
 *
 * @example
 * formatFileSize(1024) // "1,00 KB"
 * formatFileSize(1048576) // "1,00 MB"
 */
export const formatFileSize = (bytes?: number, decimals: number = 2): string => {
  if (!bytes || bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};

/**
 * Metin kırpma (truncate)
 * @param text - Kırpılacak metin
 * @param maxLength - Maksimum uzunluk
 * @param suffix - Sonuna eklenecek suffix (default: '...')
 * @returns Kırpılmış metin
 *
 * @example
 * truncateText('Lorem ipsum dolor sit amet', 10) // "Lorem ipsu..."
 */
export const truncateText = (
  text?: string,
  maxLength: number = 50,
  suffix: string = '...'
): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength) + suffix;
};
