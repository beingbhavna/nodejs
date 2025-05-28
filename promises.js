let a = 20;
let b = 0;
console.log("execution started");

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
});
waitingData.then((data) => {
    b = data;
    console.log("logic execution", a + b)
})
console.log('execution end');


//output : 50