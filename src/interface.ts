// Interface Laptop
interface Laptop {
  name: string;

  on(): void;
  off(): void;
}

// Class Asus Implements Laptop
class Asus implements Laptop {
  name: string = "Asus U31SD";
  rayTracing: boolean = true;

  on(): void {
    console.log("Machine Start");
  }
  off(): void {
    console.log("Machine Shutdown");
  }
}
new Asus().on();
new Asus().off();

// Class Acer Implements Laptop
class Acer implements Laptop {
  name: string = "Acer L43TV";
  keyboardRgb: boolean = true;

  on(): void {
    console.log("Machine Start");
  }
  off(): void {
    console.log("Machine Shutdown");
  }
}
console.log(new Acer().keyboardRgb);
