// Function Return
function getName(name: string): string {
  return name;
}
function getAge(age: number): number {
  return age;
}
console.log(`My name is ${getName("Andry Pebrianto")}`);
console.log(`My age is ${getAge(parseInt("18"))}`);

// Function Void
function noReturn(): void {
  console.log(5 + 5);
}
console.log(noReturn());

// Function Argument
const multiply = (num1: number, num2: string): number => {
  return num1 * parseInt(num2);
};
console.log(multiply(10, (25).toString()));

// Function sebagai Type Data
type Str = string;
type Num = number;
type ArrNumStr = [string, number];
type Bio = (val1: Str, val2: Num) => ArrNumStr;
let getBio: Bio = (val1, val2) => {
  return [val1, val2];
};
console.log(getBio("Andry Pebrianto", 18));

// Default Parameter
const getFullName = (
  firstName: string,
  lastName: string = "Bambang"
): string => {
  return firstName + " " + lastName;
};
console.log(getFullName("Andry", "Pebrianto"));

// Optional Parameter
const getHero = (val1: string, val2?: string): string[] => {
  return [val1, val2 || "Babibabu"];
};
console.log(getHero("Arlong"));
