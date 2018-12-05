const languages = {
  en_GB: { name: 'English', direction: 'ltr' },
  af: { name: 'Afrikaans', direction: 'ltr' },
  fa_IR: { name: 'فارسی', direction: 'rtl' },
  ar: { name: 'العربية', direction: 'rtl' }
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
  return languages[locale].name;
}

/**
 * Get the text direction ('ltr' or 'rtl') for the given locale.
 *
 * @param {string} locale Locale code
 */
function getTextDirection(locale) {
  return locale ? languages[locale].direction : 'ltr';
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
  getPrimaryLocale,
  getTextDirection
};
