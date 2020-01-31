/**
 * Objerves Chnages in the object.
 * @param {Object} obj The first number.
 * @return {String} Returns values accordingly.
 */
const IndexedObject = new Proxy(obj, {
  get: (target, prop) => {
    console.log(target, prop);
    return target[name];
  },
});
export default IndexedObject;
