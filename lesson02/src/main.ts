let myName: string = 'Dave'
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 5150

const sum = (a: number, b: string) => {
    return a + b    //string
}

let postId: string | number    //union type
let isActive: number | boolean

let re: RegExp = /\w+/g
//Without n, the value would be treated as a regular number type.
const bigNumber: bigint = 9007199254740991n;

const id1 = Symbol('id');
const id2 = Symbol('id');
//No two symbols are ever equal, even if they have the same description.
console.log(id1 === id2); // false

const userId = Symbol('userId');

//Using Symbol as an object key
const user = {
  name: "Adinath",
  [userId]: 101
};
console.log(user[userId]); // 101

//Global Symbols
const s1 = Symbol.for("shared");
const s2 = Symbol.for("shared");
console.log(s1 === s2); // true

