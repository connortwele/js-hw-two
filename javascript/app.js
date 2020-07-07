var alpha = 1;
var beta = 2;



function example(argumentOne, argumentTwo){
    return argumentOne + argumentTwo;
}
console.log(example(alpha,beta));

function exampleTwo(argumentTwo, argumentOne){
    return argumentTwo - argumentOne;
}
console.log(exampleTwo(beta,alpha));

function exampleThree(argumentOne, argumentTwo){
    return argumentOne * argumentTwo;
}
console.log(exampleThree(alpha,beta));

function exampleFour(argumentOne, argumentTwo){
    return argumentOne / argumentTwo;
}

console.log(exampleFour(alpha,beta))

var low = [1,2,3];
var mid = [4,5,6];
var high = [7,8,9];

function exampleFive(argumentOne, argumentTwo){
   return argumentOne.push(argumentTwo);
}

console.log(exampleFive(low, 4));

console.log(low);

function exampleSix(argumentOne){
    return argumentOne.shift();
}

console.log(exampleSix(mid));

console.log(mid)

function exampleSeven(argumentOne){
    return argumentOne.pop();
}

console.log(exampleSeven(high));

console.log(high);