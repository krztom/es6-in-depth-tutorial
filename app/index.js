function hello() {
    let message= "Hello!";
    console.log(message);
}
function greeting() {
    let message = "How are you?";
    console.log(message);
    
}

hello();
greeting();

let a = 'good';
let c = `${a} moring`;
console.log( c );

let one = [20,30,40];
let two = [10, ...one, 50];
console.log( two );


function collect(...three) {
    console.log( three );
    
}

collect( 5,1,6,7,9,12,99,51);

// arrow functions

let cheer = () => {
    console.log( "whooo!");
}

cheer();

let values = [20,40,60];

let doubled = values.map( (n) =>  n*2 );
console.log(doubled);

let points = [2,10,22,15,19,1,29];
let hightscore = points.filter( (n) => n > 15 )
console.log( hightscore )

//repat method

let re = `woo${ "oo".repeat( 50 ) }`;
console.log( re );

let search = "butterfly";

console.log( search.startsWith( "butter" ) );
console.log( search.endsWith( "butter" ) );
console.log( search.includes( "ter" ) );


// modules

import multiply from './math';
console.log( multiply( 5,10 ));

class Calculator {
    static multiply_1( a,b ) {
        return a*b;
    }
    
    static add_1( a,b ) {
        return a+b;
    }
};
let math_1 = Calculator.multiply_1( 9,10);
console.log( math_1 );

function Vehicle(make, year) {
    this.make = make;
    this.year = year;
}

Vehicle.prototype.color;
Vehicle.prototype.bio = function(){
    return `A ${this.color} ${this.make} made in ${this.year}.`;
};


let s = new Vehicle("Tesla", 2017);
s.color = "black";

console.log(s.bio());


const contains = (word, letter) => {
    let letters = word.split("");
    let letter_set = new Set(letters);
    return letter_set.has(letter);
};
let true_check = contains("west", "e");
let false_check = contains("north", "e");

console.log( false_check);


//maps 

let string = 'supercalifragilisticexpialidocious';
const countLetter = (word, orig_letter) => {
    let letters = new Map();
    for (let i=0; i<word.length; i++) {
        let letter = word[i];
        if (!letters.has(letter)) {
            letters.set(letter, 1);
        } else {
            letters.set(letter, letters.get(letter) + 1);
        }
    }
    return letters.get(orig_letter);
};
let a_count = countLetter(string, 'a');
let x_count = countLetter(string, 'x');


console.log( a_count );
console.log( x_count );