const EventEmitter = require('events');

class Button extends EventEmitter {
  click() {
    this.emit('click');
  }
}

const button = new Button();


button.on('click', () => {
  console.log('Button was clicked!');
});

button.on('click', () => {
  console.log('Second click listener executed.');
});


button.click();
