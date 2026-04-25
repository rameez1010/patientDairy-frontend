/**
 * Validate an email address.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Validate that a password meets minimum length.
 * @param {string} password
 * @param {number} minLength
 * @returns {boolean}
 */
export const isValidPassword = (password, minLength = 6) => {
  return typeof password === 'string' && password.length >= minLength;
};
