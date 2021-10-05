import BaseLaptop from "./BaseLaptop";

class MacBook<T> extends BaseLaptop<T> {
  constructor(
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    super("MacBook", type, withNumeric, withTouchButton);
  }
}

export default MacBook;
