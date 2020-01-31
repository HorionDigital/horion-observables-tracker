/**
 * Objerves Chnages in the object.
 * @param {Object} obj The first number.
 * @return {String} Returns values accordingly.
 */
export default function ObservablesProxy(obj) {
  return new Proxy(obj, {
    get: function(target, prop) {
      // console.log('observer getting', target, prop)
      return target[prop];
    },

    set: function(obj, prop, value) {
      // console.log('observer setting', obj, prop, value);
      if (['onChange'].indexOf(prop) !== -1) {
        obj[prop] = value;
        return true;
      }
      if (obj.element) {
        const name = obj.element.getAttribute('hh-var');
        const bindings = document.querySelectorAll(`[hh-bind-text="${name}"]`);
        bindings.forEach((el, key) => {
          el.textContent = value;
        });
        const inputs = document.querySelectorAll(`[hh-var="${name}"]`);
        inputs.forEach((el, key) => {
          el.value = value;
        });
      }
      obj[prop] = value;
      return true;
    },

    apply: function(target, thisArg, argumentsList) {
      console.log('function', target, thisArg, argumentsList);
      return target(argumentsList).bind(thisArg);
    },
  });
}
