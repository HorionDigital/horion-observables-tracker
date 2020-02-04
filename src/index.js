
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
hot.pension.onChange = function(newVal) {
  calculate(newVal, null)
};
hot.age.onChange = function(newVal) {
  calculate(null, newVal)
}
let amount = 0;
let totalPension = 0;
let totalAge = 0;
/**
 * @param {Number} pension slider value
 * @param {Number} age slider value
 */
function calculate(pension, age) {
  totalPension = (pension ? pension : totalPension);
  totalAge = (age ? age : totalAge);
  amount = ((totalAge + 1) * 3.14 * (totalPension + 1));
  hot.codeOnly = amount.toLocaleString();
}
hot.codeOnly = 1;
hot.codeOnly.onChange = function(newVal) {
  console.log(newVal)
}

// hot.addEventListener('onChange', (e) => console.log(e));

// hot.codeOnly = "12321321321";
setTimeout(() => {
  // hot.testbinder = 'bulka';
  // console.log('scope', hot.testbinder)
}, 4000);