import type { Cell } from '../types'

const isLive = (cell: Cell): boolean => cell === 1
const isDead = (cell: Cell): boolean => !isLive(cell)

const getCountOfNeighbours = (
  row: number,
  column: number,
  board: readonly Cell[][]
): number => {
  let count: number = 0

  const previousRow = board[row - 1]
  const currentRow = board[row]
  const nextRow = board[row + 1]

  if (previousRow) {
    if (previousRow[column - 1] && isLive(previousRow[column - 1])) {
      count++
    }
    if (previousRow[column] && isLive(previousRow[column])) {
      count++
    }
    if (previousRow[column + 1] && isLive(previousRow[column + 1])) {
      count++
    }
  }

  if (currentRow[column - 1] && isLive(currentRow[column - 1])) {
    count++
  }
  if (currentRow[column + 1] && isLive(currentRow[column + 1])) {
    count++
  }

  if (nextRow) {
    if (nextRow[column - 1] && isLive(nextRow[column - 1])) {
      count++
    }
    if (nextRow[column] && isLive(nextRow[column])) {
      count++
    }
    if (nextRow[column + 1] && isLive(nextRow[column + 1])) {
      count++
    }
  }

  return count
}

export const life = (board: readonly Cell[][]): Cell[][] =>
  board.map((row, rowIndex): Cell[] =>
    row.map((cell, cellIndex): Cell => {
      const countOfNeighbours = getCountOfNeighbours(rowIndex, cellIndex, board)

      if (isLive(cell) && (countOfNeighbours < 2 || countOfNeighbours > 3)) {
        return 0
      }

      if (isDead(cell) && countOfNeighbours === 3) {
        return 1
      }

      return cell
    })
  )
