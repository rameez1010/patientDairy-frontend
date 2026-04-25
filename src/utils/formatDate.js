/**
 * Format a date string or Date object into a readable format.
 * @param {string|Date} date
 * @param {string} locale
 * @returns {string}
 */
export const formatDate = (date, locale = 'en-US') => {
  if (!date) return '';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
