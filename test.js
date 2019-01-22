function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 2;
var sumOfVals = (firstVal + secondVal).toLocaleString();
var flag = false;
console.log("Value assigned to flag is: " + flag);
var decimal = 6;
console.log("Value assigned to decimal is: " + decimal);
var hex = 0xf00d;
console.log("Value assigned to hex is: " + hex);
var binary = 10;
console.log("Value assigned to binary is: " + binary);
var octal = 484;
console.log("Value assigned to octal is: " + octal);
var textEnt = "Hello World!";
var textEnt2 = "Hello World!";
var spaceOn = false;
stringCount(textEnt);
stringCountSpace(textEnt2);
ifString(spaceOn, textEnt);
function stringCount(textEnt) {
    var letters = textEnt.length;
    console.log("Number of letters is: " + letters);
}
function stringCountSpace(textEnt2) {
    var letters2 = textEnt2.replace(/\s+/, "").length;
    console.log("Number of letters without space is: " + letters2);
}
function ifString(spaceOn, textEnt) {
    if (spaceOn == true) {
        var letters = textEnt.length;
        console.log("<IF>Number of letters is: " + letters);
    }
    else {
        var letters = textEnt.replace(/\s+/, "").length;
        console.log("<IF>Number of letters without space is: " + letters);
    }
}
addition(sumOfVals);
