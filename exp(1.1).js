const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
myEmitter.on('exit', () => {
  console.log('Exit event triggered. Program finished.');
});

myEmitter.emit('greet', 'Namiruddin');
myEmitter.emit('exit');
