//Addition
let num1 = 5;
let num2 = 6;
let sum = num1 + num2;
console.log(num1 + num2);

//Subtraction
let num3 = 10;
let num4 = 9;
let subtract = num3 - num4;
console.log(subtract);

//Multiplication
let num5 = 5;
let num6 = 2;
let multiply = num5 * num6;
console.log(multiply);

//division
let num7 = 6;
let num8 = 6;
let division = num7 / num8;
console.log(division);

//Exponenation
let num9 = 7;
let num10 = 2;
let Exponenation = num9 ** num10;
console.log(Exponenation);

//Modulus
let num11 = 6;
let num12 = 6;
let Modulus = num11 % num12;
console.log(Modulus);

//Unary Operators
let a = 8;
let b = 5;
let c:number;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c)

//Combining Operators
let result = 3 + 4 * 5;
result
console.log(result);

//Assignment Operators
let num13 = 10;
num13 += 5;
console.log(num13);

//Comparison Operators
let d = 5;
let e = 2;

let isequal = (d == e);
console.log(isequal);

let isnotequal = (d != e);
console.log(isnotequal);

let isgreaterthan = (d > e);
console.log(isgreaterthan);

let islessthan = (d < e);
console.log(islessthan);

//Logical Operators
let f = 5;
let l = 2;

let Logicaland = (f > 0) && (l < 0);
console.log(Logicaland);

let Logicalor = (f < 0) || (l > 0);
console.log(Logicalor);

let Logicalnot = !(f > 0);
console.log(Logicalnot);

//Conditional Ternary Operators
let ishungry = true;
let snack = ishungry? "apple" : "water";
console.log(`You should have some ${snack}.`);

let isnothungry = false;
let snacks = isnothungry? "apple" : "water";
console.log(`You should have some ${snacks}.`);