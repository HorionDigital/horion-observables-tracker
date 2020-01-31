
/*
Horion Hidration - SSR first javascript framework
Author: Audrius Rackauskas
*/

// import HorionFront from './modules/core.js';
import hot from './utils/wrapper.js';

// let hot = new HorionFront()
// hot.mount()

// window.hot = hot.scope;
// console.log(hot.scope)

// window.testbinder = 'bababab';


// class myApp extends HorionFront {
//     constructor() {
//         super()

//     }

//     render(...props) {
//         this.testbinder = 'bububu'
//     }
// }

// var scope = horion.mount()
hot.testbinder.onChange = function(newVal, oldVal) {
  // console.log('el', this)
  // console.log('oldVal', oldVal)
  // console.log('newVal', newVal)
};
setTimeout(() => {
  hot.testbinder = 'bulka';
  // console.log('scope', hot.testbinder)
}, 4000);
