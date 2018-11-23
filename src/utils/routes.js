/**
 * Get path for language-specific home page.
 *
 * @param {string} lang Language code for currently active language.
 */
function getHomePath(lang: string) {
  return `${lang}`;
}

/**
 * Get path for language-specific category page.
 *
 * @param {string} lang Language code for currently active language.
 * @param {string} category Slug identifying category.
 */
function getCategoryPath(lang: string, category: string) {
  return `${getHomePath(lang)}/projects/${category}`;
}

/**
 * Get path for language-specific project page.
 *
 * @param {string} lang Language code for currently active language.
 * @param {string} category Slug identifying category.
 * @param {string} project Slug identifying project.
 */
function getProjectPath(lang: string, category: string, project: string) {
  return `${getCategoryPath(lang, category)}/${project}`;
}

module.exports = {
  getHomePath,
  getCategoryPath,
  getProjectPath
};
