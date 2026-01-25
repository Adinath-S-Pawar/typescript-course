let username = 'Dave'
console.log(username)

let a: number = 12
let b: string = '6'
let c: number = 2

/*
let a = 12;
let b = '6';
console.log(a/b) -> 2 , valid javascript conversion
*/

/*
in tsconfig.json
"noEmitOnError" : true,
will not create .js if compile errors in .ts
cmd : tsc --noEmitOnError
*/
console.log(a / b)

console.log(c * b)

//watch for changes
//tsc main.ts -w 
