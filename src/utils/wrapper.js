/**
 * Objerves Chnages in the object.
 * @param {Object} obj The first number.
 * @return {String} Returns values accordingly.
 */
import HorionFront from '../modules/core.js';
export default (function(window) {
  const horion = new HorionFront();
  horion.mount();
  window.hot = horion.scope;
  return horion.scope;
})(window);

