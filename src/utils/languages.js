/*eslint-env node*/

const languages = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  en_GB: { name: 'English', direction: 'ltr' },
  // eslint-disable-next-line @typescript-eslint/camelcase
  fa_IR: { name: 'فارسی', direction: 'rtl' },
  ar: { name: 'العربية', direction: 'rtl' },
  // eslint-disable-next-line @typescript-eslint/camelcase
  fr_FR: { name: 'Français', direction: 'ltr' }
};

/**
 * Get a list of available locale codes.
 *
 * @returns {(keyof languages)[]} A list
 */
function getLocaleList() {
  return Object.keys(languages);
}

/**
 * Get the display name of the given locale code.
 *
 * @param {keyof languages} locale Locale code to lookup
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
 * @param {keyof languages} locale Locale code
 */
function getTextDirection(locale) {
  return locale && languages[locale] ? languages[locale].direction : 'ltr';
}

/**
 * Get the primary locale that will be used for default values for incomplete locales.
 *
 * @returns {keyof languages}
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
