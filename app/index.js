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


