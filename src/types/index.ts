export const ALIVE = 1
export const DEAD = 0

type Cell = typeof ALIVE | typeof DEAD
export type Board = Cell[][]
