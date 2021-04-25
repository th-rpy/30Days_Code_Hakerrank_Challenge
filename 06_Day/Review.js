function even_odd_indexed (test){
    let even = "" 
    let odd = ""
    for (let index = 0; index < test.length; index++) {
        index%2==0 ? even +=test[index] : odd += test[index]
    }
    console.log(even + " " + odd)
}


function processData(input) {
    //Enter your code here
    const testCases = input.split('\n').slice(1);
    for (const test of testCases) {
        even_odd_indexed(test)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
