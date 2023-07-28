interface HelloWorld {
    someText?: string
    someNumber?: number
    // hasError: boolean // DONT DO IT!!!!1
}

// extend interface (this does not work with type)
interface HelloWorld {
    aFlag: boolean
}

type PlcVariable = any // DONT DO IT!!!11
type VariableDictionary = Record<string, PlcVariable>



const hello: HelloWorld = {
    someText: "test",
    aFlag: false,
}


console.log("Hello brave new ts-node world!", hello)

// DESTRUCTURING Arrays
const [a, b]: [number, number] = [10, 20]

console.log(`a`, a);
console.log(`b`, b);

// DESTRUCTURING Objects 
// mit neuen namen vergeben
const { x, y: new_name } = { x: 1, y: 2 }; 

console.log(`x`, x);
console.log(`new_name`, new_name);
// this will result in a compile time error and also a runtime error
// console.log("y does not exist!", y)

// use template strings with ``
console.log(`formated: x: ${x} new_name: ${new_name}`);




// CONFUSING
// destructuring for one (unnamed) parameter and (redundant) type
// plus default value object literal ;)
function exampleFn({field1, field2}: {field1: string, field2: number} = {field1: "", field2: 0}) {
    console.log("in exampleFn", field1, field2)
}  

// use exampleFn like this:
exampleFn({field1: "text", field2: 23})
exampleFn() // to use default parameter