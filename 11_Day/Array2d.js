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
    let arr = Array(6);
    let result = [];

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    for (let r = 0; r < 1 + Math.floor(arr[0].length/2); r++) {
        for (let c = 0; c < 1 + Math.floor(arr[0].length/2); c++) {
            let L = arr[r].slice(c,c+3).reduce((a, b)=> a+b,0)
            let W = arr[r+1][c+1]
            let C = arr[r+2].slice(c,c+3).reduce((a, b)=> a+b,0)
            result.push(L+W+C)
        }
    }
    console.log(Math.max(...result));
}

