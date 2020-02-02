/**
 * Objerves Chnages in the object.
 * @param {Object} obj The first number.
 * @return {String} Returns values accordingly.
 */
export default function ObservablesProxy(obj) {
  return new Proxy(obj, {
    get: function(target, prop) {
      console.log('observer get', target[prop]);
      return target[prop];
    },

    set: function(obj, prop, value) {
      console.log('observer set', obj, prop, value);
      if (['onChange'].indexOf(prop) !== -1) {
        obj[prop] = value;
        return true;
      }

      if (obj && obj[prop] && obj[prop].element) {
        console.log('element', value);
        const name = obj[prop].element.getAttribute('hh-var');
        const bindings = document.querySelectorAll(`[hh-bind-text="${name}"]`);
        bindings.forEach((el, key) => {
          el.textContent = value;
        });
        const inputs = document.querySelectorAll(`[hh-var="${name}"]`);
        inputs.forEach((el, key) => {
          el.value = value;
        });
      }
      if (obj && obj[prop] && obj[prop].value) {
        obj[prop].value = value;
        return true;
      }

      obj[prop] = value;
      return true;
    },
    apply: function(target, thisArg, argumentsList) {
      return target(argumentsList).bind(thisArg);
    },
  });
}
