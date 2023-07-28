export interface GameState {
    frame: number
}

export function step(state: GameState): GameState {
    const { frame } = state
    return ({
        ...state, frame: frame + 1
    })
}