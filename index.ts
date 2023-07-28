import { GameState, step } from "./src/game"

interface HelloWorld {
    someText: string
    someNumber: number
}

const hello: HelloWorld = {
    someText: "test",
    someNumber: 123
}


console.log("Hello brave new ts-node world!", hello)


// TODO: finish game 

let state: GameState = {
    frame: 0
}
 
console.log("State before step", state)
state = step(state)
console.log("State after step", state)