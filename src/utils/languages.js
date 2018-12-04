const languages = {
  en_GB: 'English',
  af: 'Afrikaans'
};

/**
 * Get a list of available locale codes
 */
function getLocaleList() {
  return Object.keys(languages);
}

/**
 * Get the display name of the given locale code
 *
 * @param {string} locale Locale code to lookup
 */
function getLanguageName(locale) {
  return languages[locale];
}

/**
 * Get the primary locale that will be used for default values for incomplete locales.
 */
function getPrimaryLocale() {
  return 'en_GB';
}

module.exports = {
  getLocaleList,
  getLanguageName,
  getPrimaryLocale
};
