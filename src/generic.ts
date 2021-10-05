// Function Any
function getData(val: any) {
  return val;
}
console.log(getData("Andry Pebrianto"));
console.log(getData(18));

// Function Generic
function myData<T>(val: T) {
  return val;
}
console.log(myData("Bambang").length);
console.log(myData(18));

// Arrow Func Generic
const yourData = <T>(val: T) => {
  return val;
};
