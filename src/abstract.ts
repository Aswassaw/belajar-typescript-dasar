// Vehicle Class (Parent) Abstract
abstract class Vehicle {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
  abstract wheels: number;

  start(): void {
    console.log("Machine Start!");
    console.log(`${this.name} have ${this.wheels} wheels.`);
  }
}

// Car Class (Child)
class Car extends Vehicle {
  constructor(name: string) {
    super(name);
  }

  wheels: number = 4;
}
const ferrari = new Car("Ferrari");
ferrari.start();

// Motor Class (Child)
class Motor extends Vehicle {
  constructor(name: string) {
    super(name);
  }
  wheels: number = 2;
}
const supra = new Motor("Supra");
supra.start();

// Class Bicycle (Child)
class Bicycle extends Vehicle {
  constructor(name: string) {
    super(name);
  }

  wheels: number = 2;
}
const polygon = new Bicycle("Polygon");
polygon.start();
