'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
    let m = n;
    let binary = [];
    while (m>0) {
        binary.unshift(m%2)
        m = Math.floor(m/2)
    }
    let count = 0 //intitialize count
    let result = 0 //initialize max
    for (let index = 0; index < binary.length; index++) {
        if (binary[index] == 0){count = 0} // # Reset count when 0 is found
        else{
            count++;
            result = Math.max(count, result);
        }
    }
    console.log(result);
}
