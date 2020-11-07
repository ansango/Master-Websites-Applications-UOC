var i = 3;
i = 4; // Error TS2322: Type '4' is not assignable to type '3'
var j = [1, 2, 3];
j.push(4);
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
var k = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.
var l = 4;
var m = l * 2; // Error TS2571: Object is of type 'unknown'.
