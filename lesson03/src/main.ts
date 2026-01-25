let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]    //arr of union type

let mixedData = ['EVH', 1984, true]
/*
    guitars = mixedData invalid
    mixedData = guitars valid
*/

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim') //add at beginning

let test = []    //type : any
let bands: string[] = []
bands.push('Van Halen')

// Tuple  fixed length
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]
//err
myTuple[1] = 42

// Objects
let myObj: object
myObj = []    
console.log(typeof myObj)    //object
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John'
// interface or type
interface Guitarist {
    name?: string,    //optional
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp))

// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}
/*
Objects store actual data at runtime, types define data structure at compile time, and enums define named constant values available at runtime.
*/

console.log(Grade.U)
