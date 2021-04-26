'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification, scores) {
    super(firstName, lastName, identification); // Now 'this' is initialized by calling the parent constructor.
    this.scores = scores;
    }
    
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        let testScores = this.scores + ''
        testScores = testScores.split(',')
        testScores = testScores.map(el=>parseInt(el))
        const sum = testScores.reduce((a, b) => a + b, 0);
        const avg = (sum / testScores.length) || 0;
        if (avg < 40){return 'T'}
        if (40 <= avg & avg < 55){return 'D'}
        if (55 <= avg & avg < 70){return 'P'}
        if (70 <= avg & avg < 80){return 'A'}
        if (80 <= avg & avg < 90){return 'E'}
        if (90 <= avg & avg <= 100){return 'O'}
    }
    
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification, scores) {
    super(firstName, lastName, identification); // Now 'this' is initialized by calling the parent constructor.
    this.scores = scores;
    }
    
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        let testScores = this.scores + ''
        testScores = testScores.split(',')
        testScores = testScores.map(el=>parseInt(el))
        const sum = testScores.reduce((a, b) => a + b, 0);
        const avg = (sum / testScores.length) || 0;
        if (avg < 40){return 'T'}
        if (40 <= avg & avg < 55){return 'D'}
        if (55 <= avg & avg < 70){return 'P'}
        if (70 <= avg & avg < 80){return 'A'}
        if (80 <= avg & avg < 90){return 'E'}
        if (90 <= avg & avg <= 100){return 'O'}
    }
    
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}

