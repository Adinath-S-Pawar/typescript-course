// Utility Types - built-in generic helper types that let you transform existing types instead of rewriting them manually.

// Partial - Constructs a type with all properties of Type set to optional.

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate } //overwrite
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


// Required - Constructs a type consisting of all properties of Type set to required , 
// here verified is optional property but it will be made compulsory by required

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc. 
    return assign
}

//readonly - Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :)

recordAssignment({ ...assignGraded, verified: true })

// Record - Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
}

// Pick - Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
// Omit - Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
}

// Extract - Constructs a type by extracting from Type all union members that are assignable to Union.
//Exclude - Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable - Constructs a type by excluding null and undefined from Type.

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType - Constructs a type consisting of the return type of function Type.

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters- Constructs a tuple type from the types used in the parameters of a function type Type.

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}
// because of awaited we get user array instead of promise
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
