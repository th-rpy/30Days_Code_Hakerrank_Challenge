function processData(input) {
    //Enter your code here
    const data = input.split('\n');
    const n = Number(data.shift());
    const phoneBookData = new Map();
    const objData = data.reduce((target, item, index) => {
        index < n ? phoneBookData.set(item.split(' ')[0], item.split(' ')[1]) : target.push(item);

        return target;
    }, []);

    objData.forEach((val, index) => { 
        console.log(phoneBookData.get(val) ? `${val}=${phoneBookData.get(val)}` : 'Not found');
    })
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
