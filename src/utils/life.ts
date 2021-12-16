import type { Cell } from '../types'

const ALIVE = 1
const DEAD = 0

const getCountOfLiveNeighbours = (
  row: number,
  column: number,
  board: readonly Cell[][]
): number => {
  let count: number = 0

  const previousRow = board[row - 1]
  const currentRow = board[row]
  const nextRow = board[row + 1]

  if (previousRow) {
    if (previousRow[column - 1] && previousRow[column - 1] === ALIVE) {
      count++
    }
    if (previousRow[column] && previousRow[column] === ALIVE) {
      count++
    }
    if (previousRow[column + 1] && previousRow[column + 1] === ALIVE) {
      count++
    }
  }

  if (currentRow[column - 1] && currentRow[column - 1] === ALIVE) {
    count++
  }
  if (currentRow[column + 1] && currentRow[column + 1] === ALIVE) {
    count++
  }

  if (nextRow) {
    if (nextRow[column - 1] && nextRow[column - 1] === ALIVE) {
      count++
    }
    if (nextRow[column] && nextRow[column] === ALIVE) {
      count++
    }
    if (nextRow[column + 1] && nextRow[column + 1] === ALIVE) {
      count++
    }
  }

  return count
}

export const life = (board: readonly Cell[][]): Cell[][] =>
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
