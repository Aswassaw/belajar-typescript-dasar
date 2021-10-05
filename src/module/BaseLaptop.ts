import LaptopInterface from "./LaptopInterface.ts";
import { a, b, c } from "./Keyboard";

abstract class BaseLaptop<T> implements LaptopInterface<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(
    name: string,
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchButton = withTouchButton;
  }

  a() {
    console.log(a());
  }

  b() {
    console.log(b());
  }

  c() {
    console.log(c());
  }
}

export default BaseLaptop;
