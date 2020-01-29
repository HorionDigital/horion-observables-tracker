
/*
Horion Hidration - SSR first javascript framework
Author: Audrius Rackauskas
*/

const IndexedObject = new Proxy(obj, {
        get: function (target, prop) {
            console.log(target, prop)
            return target[name]
        }
    }
})
  