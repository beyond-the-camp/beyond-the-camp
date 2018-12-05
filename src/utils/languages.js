const languages = {
  en_GB: { name: 'English', direction: 'ltr' },
  af: { name: 'Afrikaans', direction: 'ltr' },
  fa_IR: { name: 'فارسی', direction: 'rtl' },
  ar: { name: 'العربية', direction: 'rtl' },
  nl_BE: { name: 'Nederlands', direction: 'ltr' }
};

/**
 * Get a list of available locale codes.
 */
function getLocaleList() {
  return Object.keys(languages);
}

/**
 * Get the display name of the given locale code.
 *
 * @param {string} locale Locale code to lookup
 */
function getLanguageName(locale) {
  if (locale && languages[locale]) {
    return languages[locale].name;
  }
  return locale;
}

/**
 * Get the text direction ('ltr' or 'rtl') for the given locale.
 *
 * @param {string} locale Locale code
 */
function getTextDirection(locale) {
  return locale && languages[locale] ? languages[locale].direction : 'ltr';
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
