process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var [i_2, d_2, s_2] = input_stdin_array //use the javascript decomposition for  declare all variables in one line of code
    // Print the sum of both integer variables on a new line.
    var int_sum = parseInt(i) + parseInt(i_2) // parse the two vars to integer then use '+' to sum up tow integers.
    console.log(int_sum) // console.log for display the result.
    // Print the sum of the double variables on a new line.
    var float_sum = parseFloat(d) + parseFloat(d_2) // parse the two vars to float then use'+' to sum up tow floats.
    float_sum.toString().includes('.') ? float_sum = float_sum.toString() : float_sum = float_sum.toString() + '.0' 
    console.log(float_sum ) // console.log for display the result.
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    var string_concat = s + s_2 // like python we can use '+' to concatenate two strings
    console.log(string_concat) // console.log for display the result.

}