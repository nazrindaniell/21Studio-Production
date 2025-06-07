/**
 * Scrolls the window to the top
 * @param {Object} options - Scroll options
 * @param {string} options.behavior - Scroll behavior ('auto' or 'smooth')
 */
export function scrollToTop(options = { behavior: "smooth" }) {
  window.scrollTo({
    top: 0,
    left: 0,
    ...options,
  });
}

export default scrollToTop;
