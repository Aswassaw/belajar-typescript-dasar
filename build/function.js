"use strict";
// Function Return
function getName(name) {
    return name;
}
function getAge(age) {
    return age;
}
console.log("My name is " + getName("Andry Pebrianto"));
console.log("My age is " + getAge(parseInt("18")));
// Function Void
function noReturn() {
    console.log(5 + 5);
}
console.log(noReturn());
// Function Argument
var multiply = function (num1, num2) {
    return num1 * parseInt(num2);
};
console.log(multiply(10, (25).toString()));
var getBio = function (val1, val2) {
    return [val1, val2];
};
console.log(getBio("Andry Pebrianto", 18));
// Default Parameter
var getFullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Bambang"; }
    return firstName + " " + lastName;
};
console.log(getFullName("Andry", "Pebrianto"));
// Optional Parameter
var getHero = function (val1, val2) {
    return [val1, val2 || "Babibabu"];
};
console.log(getHero("Arlong"));
