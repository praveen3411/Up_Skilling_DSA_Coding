// Data types: Number,String,Boolean,undefined,null,void,any;

let One: number = 23;
let Two: number = 45;
let Three: string = "Praveen Kumar";
let Four: string = "JavaScript";
let five: boolean = true;
let Six: null = null;
let Seven: undefined = undefined;
console.log(One);
console.log(Two);
console.log(Three);
console.log(Four);
console.log(five);
console.log(Six);
console.log(Seven);

let Boom = (a: number, b: number): void => {
  console.log(a + b);
};
Boom(10, 20);

var Bool: any = "Hello";
console.log(Bool);

let Arrayone: string[] = ["one", "two", "three", "four"];
let arraytwo: Array<string | number | boolean> = ["one", 34, true];

//object

let objectone: { name: string; age: number; marrage: boolean } = {
  name: "praveen",
  age: 23,
  marrage: false,
};

let arrayofobj: { name: string; age: number; city: string; marry: boolean }[] =
  [
    { name: "r", age: 3, city: "bangalore", marry: false },
    { name: "b", age: 4, city: "bom", marry: true },
  ];
console.log(arrayofobj);

interface User {
  readonly Id: number;
  name: string;
  age: number;
  marry: boolean;
  GoogleId?: number;
  TrailFun():string
}
const UserOne: User = {
  Id: 34,
  name: "praveen",
  age: 23,
  marry: true,,
  TrailFun:()=>{
    return "Praveen"
  }
};
