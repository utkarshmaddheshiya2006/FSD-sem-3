console.log('1. Synchronous code');

process.nextTick(() => {
  console.log('2. process.nextTick');
});

setTimeout(() => {
  console.log('3. setTimeout');
}, 0);

setImmediate(() => {
  console.log('4. setImmediate');
});

console.log('5. End of synchronous code');
