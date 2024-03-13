//Addition
var num1 = 5;
var num2 = 6;
var sum = num1 + num2;
console.log(num1 + num2);
//Subtraction
var num3 = 10;
var num4 = 9;
var subtract = num3 - num4;
console.log(subtract);
//Multiplication
var num5 = 5;
var num6 = 2;
var multiply = num5 * num6;
console.log(multiply);
//division
var num7 = 6;
var num8 = 6;
var division = num7 / num8;
console.log(division);
//Expomenation
var num9 = 7;
var num10 = 2;
var Expomenation = Math.pow(num9, num10);
console.log(Expomenation);
//Modulus
var num11 = 6;
var num12 = 6;
var Modulus = num11 % num12;
console.log(Modulus);
//Unary Operators
var a = 8;
var b = 5;
var c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
//Combining Operators
var result = 3 + 4 * 5;
result;
console.log(result);
//Assignment Operators
var num13 = 10;
num13 += 5;
console.log(num13);
//Comparison Operators
var d = 5;
var e = 2;
var isequal = (d == e);
console.log(isequal);
var isnotequal = (d != e);
console.log(isnotequal);
var isgreaterthan = (d > e);
console.log(isgreaterthan);
var islessthan = (d < e);
console.log(islessthan);
//Logical Operators
var f = 5;
var l = 2;
var Logicaland = (f > 0) && (l < 0);
console.log(Logicaland);
var Logicalor = (f < 0) || (l > 0);
console.log(Logicalor);
var Logicalnot = !(f > 0);
console.log(Logicalnot);
//Conditional Ternary Operators
var ishungry = true;
var snack = ishungry ? "apple" : "water";
console.log("You should have some ".concat(snack, "."));
var isnothungry = false;
var snacks = isnothungry ? "apple" : "water";
console.log("You should drink some ".concat(snacks, "."));
