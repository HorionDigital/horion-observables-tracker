
/*
Horion Hidration - SSR first javascript framework
Author: Audrius Rackauskas
*/

import HorionFront from '../modules/core.js';
export default (function (window) {
    let horion = new HorionFront()
    horion.mount()
    window.hot = horion.scope;
    return horion.scope
})(window)

