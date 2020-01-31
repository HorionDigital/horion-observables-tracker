import Observables from './observables.js';
/**
 * A class that mounts observables
 */
export default class HorionFront {
  /**
    * sets scope object
    */
  constructor() {
    this.scope = {};
  }

  /**
    * mounts observables
    */
  mount() {
    const observablesLib = new Observables();
    observablesLib.register();
    this.scope = observablesLib.observables;
  }

  /**
    * unmounts observables
    */
  unmount() {

  }
}
