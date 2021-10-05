export default interface LaptopInterface<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;
}
