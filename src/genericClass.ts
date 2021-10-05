class List<T> {
  constructor(...elements: T[]) {
    this._data = elements;
  }

  private _data: T[];

  add(val: T): void {
    this._data.push(val);
  }

  addMultiple(...val: T[]): void {
    this._data.push(...val);
  }

  get data(): T[] {
    return this._data;
  }
}

// List dengan hanya number
const listStr = new List<number>(1, 2, 3, 4);
console.log(listStr.data);
listStr.add(5);
console.log(listStr.data);
listStr.addMultiple(6, 7, 8, 9, 0);
console.log(listStr.data);

// List dengan type apapun
const listRandom = new List<any>("Bambang", 18, "Trenggalek", true);
console.log(listRandom.data);
listRandom.addMultiple("Hujan", null, undefined, ["Hehe", "Boi"]);
console.log(listRandom.data);
