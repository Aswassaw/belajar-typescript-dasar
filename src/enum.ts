// Enum
// Numeric Enum
enum Month {
  JAN,
  FEB,
  JUN = 5,
  JUL,
  // AUG,
  // MAR = 2,
  // APR,
  // MAY,
  // SEP = 8,
  // OKT,
  // NOV,
  // DEC,
}
// console.log(Month);
// console.log(Month[0], Month.FEB);
// console.log(Month["JAN"], Month[1]);
// console.log(Month[100]);

// String Enum
enum Day {
  SUN = "Minggu",
  MON = "Senin",
  TUE = "Selasa",
  WED = "Rabu",
  THU = 4,
  FRI,
  SAT = "Sabtu",
}
console.log(Day["SUN"]);
console.log(Day.MON);
console.log(Day.THU);
console.log(Day.FRI);
