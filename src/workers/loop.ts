const {parentPort} = require("worker_threads");

let count: number = 0;

for (let i = 0; i < 400000; i++) {
    console.log("i :",i);
    count = i;
}

parentPort.postMessage({count});