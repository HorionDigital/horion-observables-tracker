# Horion Observables Tracker

SSR-first javascript framework for enabling two-way binding in uncomfortable places...

### Getting started

```sh
import hot from hot
```

or for big boys and girls only...

```sh
import hot from 'horionObservables.js'

class myBinder extends hot {
    constructor() {
        super()
    }
    
    customMethods() {
        
    }
}
```

### Usage

bind values in a familiar angular'esc style

```sh
<input type="range" hot-var="myVarName" />
```

display by binding the same value to another element or elements

```sh
<strong hot-var="myVarName"></strong>
```

the reason we are binding to an attribute is we are expecting for the initial values to come from the server on the initial load.

Assume we are using PHP rendered website here:

so we are able to fill in initial values from our server, and then HOT var will take it over as soon as first action is triggered - i.e. slider is moved.
```sh
<input type="range" hot-var="myVarName" value="<?=$someValueFromTheServer;?>" />
```

```sh
<strong hot-var="myVarName"><?=$someValueFromTheServer;?></strong>
```

### Usage in javascript
now all you need to do to chnage the value on the html is to assign a new value to the hot variable like so:

```sh
hot.myVarName = newValue
```

this will change the value in the html instantly


### Methods and Properties 


onChange
```sh
hot.myVarName.onChange(val => console.log(val))
```

element
```sh
hot.myVarName.element.style.backgroundColor = 'black'
```

observer
```sh
hot.myVarName.observer.disconnect()
```

### Plugins
Commign soon