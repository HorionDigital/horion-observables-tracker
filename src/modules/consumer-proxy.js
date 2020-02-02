/**
 * Objerves Chnages in the object.
 * @param {Object} obj The first number.
 * @return {String} Returns values accordingly.
 */
export default function ConsumerProxy(obj) {
  return new Proxy(obj, {
    get: function(target, prop) {
      // console.log('target', target)
      console.log('inner prop', prop)
      console.log('REDING', target.reading)
      if (target && target.reading) {
        target.reading.call(prop);
      }
      return target[prop];
    },

    // set: function(obj, prop, value) {
    //   // console.log('consumer setting', Object.assign(obj), prop, value);
    //   if (['onChange'].indexOf(prop) !== -1) {
    //     obj[prop] = value;
    //     return true;
    //   }
    //   if (obj && obj[prop] && obj[prop].value) {
    //     return obj[prop].value = value;
    //   }
    //   obj[prop] = value;
    //   return true;
    // },

    // apply: function(target, thisArg, argumentsList) {
    //   console.log('function', target, thisArg, argumentsList);
    //   return target(argumentsList).bind(thisArg);
    // },
  });
}
