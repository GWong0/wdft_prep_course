var name = "Gerry"
console.log ("Hello name");

var x = 1125
var answer = x%2
console.log (answer);

var a = true
var b = false
var c = true
console.log (a||b||c);

console.log (a&&b&&c);

var answer1 = 10 - 3 * 5/4 + 202 % 3
var answer2 = 10 - (3 * (5/4) + (202%3) )
console.log (answer1, answer2);

var t = String(12);
var u = Number("113");
var v = float.value("1.12356");
var x2 ="Hello World";
x2 = integer(x2);
console.log(x2);



for (var x = 1; x <= 100; x++) {
	var output = "";
  	if (x % 3 == 0)
      output += "Fizz"
    if (x % 5 == 0)
      output += "Buzz"
      console.log(output || x);
}

