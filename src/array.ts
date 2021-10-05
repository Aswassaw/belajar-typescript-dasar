// Array
let array: [number, number[], string[]] = [17, [1, 2, 3], ["String 1"]];
array[0] += 3;
array[1].push(4);
array[2][0] = array[2][0].slice(0, 6);
console.log(array);

// Any
let arrany: any[] = ["Any String", 44, false, ["Bambang", "Adit"]];
console.log(arrany);

// Tuples
let biodata: [string, number];
biodata = ["Trenggalek", 123];
console.log(biodata);

