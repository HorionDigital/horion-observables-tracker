
import observablesProxy from './observables-proxy.js';
import consumerProxy from './consumer-proxy.js';
/**
 * A class that can return the number 10
 */
export default class Observables {
  /**
    * A class that can return the number 10
    */
  constructor() {
    this.observables = consumerProxy({});
    this.config = {
      attributeOldValue: true,
      attributes: true,
      characterData: true,
      characterDataOldValue: true,
      childList: true,
      subtree: true,
    };
  }
  /**
    * It returns 10
    * @param {Object} mutationsList The first number.
    * @param {Object} observer The first number.
    */
  callback(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        const name = mutation.target.getAttribute('hh-var');
        const bindings = document.querySelectorAll(`[hh-bind-text="${name}"]`);
        bindings.forEach((el, key) => {
          const oldVal = null; // to-do
          const newVal = mutation.target.value;
          el.textContent = newVal;
          this.observables[name].value = newVal;
          this.observables[name].onChange.call(el, newVal, oldVal);
        });
      }
    }
  }
  /**
    * It returns 10
    */
  register() {
    const elements = document.querySelectorAll('[hh-var]');
    elements.forEach((el, key) => {
      const name = el.getAttribute('hh-var');
      this.create(name, el);
    });
  }
  /**
    * It returns 10
    * @param {Object} name The first number.
    * @param {Object} el The first number.
    */
  create(name, el) {
    this.observables[name] = observablesProxy({
      value: el.value || null,
      observer: new MutationObserver(this.callback.bind(this)),
      element: el,
    });
    this.observables[name].observer.observe(el, this.config);
    this.hooks(el);
  }
  /**
   * It returns 10
   * @param {Object} key The first number.
   */
  update(key) {

  }
  /**
   * It returns 10
   * @param {Object} el The first number.
   */
  hooks(el) {
    el.oninput = function(event) {
      this.setAttribute('value', this.value);
    };
  }

  // Later, you can stop observing
  // observer.disconnect();
}
