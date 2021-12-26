import type { Cell } from '../types'

const ALIVE = 1
const DEAD = 0

const getCountOfLiveNeighbours = (
  x: number,
  y: number,
  board: readonly Cell[][]
): number => {
  let count: number = 0

  const previousRow = board[x - 1]
  const currentRow = board[x]
  const nextRow = board[x + 1]

  if (previousRow) {
    if (previousRow[y - 1] && previousRow[y - 1] === ALIVE) {
      count++
    }
    if (previousRow[y] && previousRow[y] === ALIVE) {
      count++
    }
    if (previousRow[y + 1] && previousRow[y + 1] === ALIVE) {
      count++
    }
  }

  if (currentRow[y - 1] && currentRow[y - 1] === ALIVE) {
    count++
  }
  if (currentRow[y + 1] && currentRow[y + 1] === ALIVE) {
    count++
  }

  if (nextRow) {
    if (nextRow[y - 1] && nextRow[y - 1] === ALIVE) {
      count++
    }
    if (nextRow[y] && nextRow[y] === ALIVE) {
      count++
    }
    if (nextRow[y + 1] && nextRow[y + 1] === ALIVE) {
      count++
    }
  }

  return count
}

export const next = (board: readonly Cell[][]): Cell[][] =>
  board.map((row, rowIndex): Cell[] =>
    row.map((cell, cellIndex): Cell => {
      const countOfLiveNeighbours = getCountOfLiveNeighbours(
        rowIndex,
        cellIndex,
        board
      )

      if (
        cell === ALIVE &&
        (countOfLiveNeighbours < 2 || countOfLiveNeighbours > 3)
      ) {
        return DEAD
      }

      if (cell === DEAD && countOfLiveNeighbours === 3) {
        return ALIVE
      }

      return cell
    })
  )
