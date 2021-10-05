"use strict";
// Enum
// Numeric Enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 1] = "FEB";
    Month[Month["JUN"] = 5] = "JUN";
    Month[Month["JUL"] = 6] = "JUL";
    // AUG,
    // MAR = 2,
    // APR,
    // MAY,
    // SEP = 8,
    // OKT,
    // NOV,
    // DEC,
})(Month || (Month = {}));
// console.log(Month);
// console.log(Month[0], Month.FEB);
// console.log(Month["JAN"], Month[1]);
// console.log(Month[100]);
// String Enum
var Day;
(function (Day) {
    Day["SUN"] = "Minggu";
    Day["MON"] = "Senin";
    Day["TUE"] = "Selasa";
    Day["WED"] = "Rabu";
    Day[Day["THU"] = 4] = "THU";
    Day[Day["FRI"] = 5] = "FRI";
    Day["SAT"] = "Sabtu";
})(Day || (Day = {}));
console.log(Day["SUN"]);
console.log(Day.MON);
console.log(Day.THU);
console.log(Day.FRI);
