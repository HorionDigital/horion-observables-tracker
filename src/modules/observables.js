import {isInput} from '../utils/basic-utils.js';
/**
 * A class that can return the number 10
 */
export default class Observables {
  /**
    * A class that can return the number 10
    */
  constructor() {
    this.observables = this.observablesProxy({});
    this.config = {
      attributeOldValue: true,
      attributes: true,
      characterData: true,
      characterDataOldValue: true,
      childList: true,
      subtree: true,
    };
    this.selector = 'hot-var';
  }
  /**
    * It returns 10
    * @param {Object} mutationsList The first number.
    * @param {Object} observer The first number.
    */
  callback(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        const name = mutation.target.getAttribute('hot-var');
        this.observables[name] = mutation.target.value;
      }
    }
  }
  /**
    * It returns 10
    */
  register() {
    const elements = document.querySelectorAll('[hot-var]');
    elements.forEach((el, key) => {
      const name = el.getAttribute('hot-var');
      if (isInput(el)) {
        this.create(name, el);
      }
    });
  }
  /**
    * It returns 10
    * @param {Object} name The first number.
    * @param {Object} el The first number.
    */
  create(name, el) {
    this.observables[name] = {
      value: el.value || null,
      observer: new MutationObserver(this.callback.bind(this)),
      element: el,
      registered: true,
      reading: null,
      onChange: null,
    };
    this.observables[name].observer.observe(el, this.config);
    this.hooks(el);
  }
  /**
    * It returns 10
    * @param {String} name The first number.
    * @return {Object} Returns values accordingly.
    */
  add(name) {
    return this.observables[name] = {
      value: null,
      observer: null,
      element: null,
      registered: true,
      reading: null,
      onChange: null,
    };
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
  /**
   * Objerves Chnages in the object.
   * @param {Object} obj The first number.
   * @return {String} Returns values accordingly.
   */
  observablesProxy(obj) {
    const self = this;
    return new Proxy(obj, {
      get: function(target, prop) {
        // console.log('outer prop', prop);
        if (typeof target[prop] === 'object' && target[prop] !== null && target[prop]) {
          return new Proxy(target[prop], {
            get: function(childTarget, childProp) {
              // console.log('inner prop', childProp)
              // console.log('returning child');
              return childTarget[childProp];
            },
          })
        } else {
          // console.log('returning root');
          return target[prop];
        }
      },

      set: function(obj, prop, value) {
        // console.log('observer set', obj, prop, value);
        if (obj && !obj[prop] && value && !value.element && !value.observer && !value.registered) {
          // console.log('new hot var!!!');
          obj[prop] = self.add(prop);
          obj[prop].value = value;
        }

        if (obj && prop && obj[prop]) {
          const bindings = document.querySelectorAll(`[hot-var="${prop}"]`);
          bindings.forEach((el, key) => {
            if (isInput(el)) {
              el.value = value;
            } else {
              el.textContent = value;
            }
          });

          if (obj[prop].onChange && typeof obj[prop].onChange === 'function') {
            obj[prop].onChange.call(obj[prop], value)
          }
        }
        if (obj && obj[prop] && obj[prop].value) {
          obj[prop].value = value;
          return true;
        }

        obj[prop] = value;
        return true;
      },
    });
  }

  // Later, you can stop observing
  // observer.disconnect();
}
