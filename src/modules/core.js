
/*
Horion Hidration - SSR first javascript framework
Author: Audrius Rackauskas
*/

import Observables from './observables.js';
export default class HorionFront {
    constructor() {
        this.scope = {};
    }
 
    mount() {
        const observablesLib = new Observables()
        observablesLib.register();
        this.scope = observablesLib.observables
    }

    unmount() {

    }

}