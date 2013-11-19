
# drag

  Base drag component

## Installation

  Install with [component(1)](http://component.io):

    $ component install base-ui/drag


## Quick Start
```javascript
var Drag = require('drag');
var square = new Drag(document.querySelector('#drag-me'));

square.on('drag', function (drag) {
  console.log('on drag', drag);
});
```

## API
### drag
#### .on(event, callback)
Available events:
- drag
- activate
- deactivate

#### .off()
#### .trigger()


## Todo
- mobile drag support


## License

  MIT
