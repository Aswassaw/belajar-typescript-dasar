// String
let nama: string = "Andry Pebrianto";
console.log(`Nama: ${nama}`);

// Number
let usia: number;
usia = 18;
console.log(`Usia: ${usia}`);

// Boolean
let menikah: boolean;
menikah = false;
console.log(`Menikah: ${menikah ? "Sudah Menikah" : "Belum Menikah"}`);

// Any (Hybrid/Apapun)
let apapun: any = "Saya Any dan saya String";
console.log(apapun);
apapun = 66;
console.log(apapun);
apapun = false;
console.log(apapun);

// Union
let phone: number | string;
phone = 6285617263525;
console.log(phone);
phone = "085662534223";
console.log(phone);
