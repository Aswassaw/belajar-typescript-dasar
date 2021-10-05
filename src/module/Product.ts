import Asus from "./Asus";
import MacBook from "./MacBook";

const product1 = new Asus("Zenbook", true, false);
console.log(product1);
product1.a();

const product2 = new MacBook(716252, false, true);
console.log(product2);
product2.b();
