// Synchronous : in Synchronous operation tasks are performed one at a time.
// Asynchronous : in Asynchronous, second task do not wait to finish fist task.
let a = 10;
let b = 0;
setTimeout(() => {
    b = 20;
}, 2000);
console.log('addition',a + b);

//output : 10

