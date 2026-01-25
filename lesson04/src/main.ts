// Type Aliases 
type stringOrNumber = string | number
//interfaces cannot create union types.
type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types (a variable can hold only specific exact values)
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// functions 
//arrow fn
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))
//normal fn
let subtract = function (c: number, d: number): number {
    return c - d
}
//alias
type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))    //15

// Rest Parameters 
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
/*
...nums: number[] - Rest parameter
Collects remaining arguments into an array of numbers
*/
logMsg(total(10, 2, 3))

//never type for fn which explicitly throw error
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}
//type -> void , if no break statement was there it would have been endless loop
// which makes type -> never
const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}

/*
throw new Error(errMsg);
    Immediately stops execution
    Throws an exception
    Must be caught using try...catch
    If not caught, the program crashes

return createError("This should never happen!");
    Returns an error object as a normal function return value
    Does not stop execution
    Caller must manually check for the error
*/
