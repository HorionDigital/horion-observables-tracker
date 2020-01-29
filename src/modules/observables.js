
/*
Horion Hidration - SSR first javascript framework
Author: Audrius Rackauskas
*/
import ObservablesProxy from './observables-proxy.js';
import ConsumerProxy from './consumer-proxy.js';
export default class Observables {
    constructor() {
        this.observables = ConsumerProxy({});
        this.config = {
            attributeOldValue: true,
            attributes: true,
            characterData: true,
            characterDataOldValue: true,
            childList: true,
            subtree: true
        };
    }

    callback (mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                const name = mutation.target.getAttribute('hh-var');
                let bindings = document.querySelectorAll(`[hh-bind-text="${name}"]`);
                bindings.forEach((el, key) => {
                    let oldVal = null; //to-do
                    let newVal = mutation.target.value;
                    el.textContent = newVal;
                    this.observables[name].value = newVal;
                    this.observables[name].onChange.call(el, newVal, oldVal)
                    
                });
            }
        }
    }

    register() {
        let elements = document.querySelectorAll('[hh-var]');
        elements.forEach((el, key) => {
            const name = el.getAttribute('hh-var');
            this.create(name, el);
        })   
    }

    create(name, el) {
        this.observables[name] = ObservablesProxy({
            value: el.value || null,
            observer: new MutationObserver(this.callback.bind(this)),
            element: el
        })
        this.observables[name].observer.observe(el, this.config);
        this.hooks(el);
    }

    update(key) {

    }

    hooks(el) {
        el.oninput = function(event) {
            this.setAttribute('value', this.value); 
        }
    }

// Later, you can stop observing
// observer.disconnect();

}