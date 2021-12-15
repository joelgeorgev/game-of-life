import { life } from './life'

type Cell = ReturnType<typeof life>[0][0]

describe('life', () => {
  describe('Given a cell is alive', () => {
    describe.each<[Cell[][]]>([
      [
        [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0]
        ]
      ],
      [
        [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 0]
        ]
      ]
    ])('When the number of neighbours is < 2', (board) => {
      test('the cell dies as if by solitude', () => {
        expect(life(board)).toEqual([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ])
      })
    })

    describe('When the number of neighbours is > 3', () => {
      test('the cell dies as if by overpopulation', () => {
        const board: Cell[][] = [
          [1, 0, 1],
          [1, 1, 0],
          [0, 1, 1]
        ]

        expect(life(board)).toEqual([
          [1, 0, 0],
          [1, 0, 0],
          [1, 1, 1]
        ])
      })
    })

    describe('When the number of neighbours is 2 or 3', () => {
      test('the cell survives', () => {
        const board: Cell[][] = [
          [1, 0, 0],
          [0, 1, 0],
          [0, 1, 0]
        ]

        expect(life(board)).toEqual([
          [0, 0, 0],
          [1, 1, 0],
          [0, 0, 0]
        ])
      })
    })
  })

  describe('Given a cell is dead', () => {
    describe('When the number of neighbours is 3', () => {
      test('the cell lives', () => {
        const board: Cell[][] = [
          [1, 0, 0],
          [1, 0, 0],
          [0, 0, 1]
        ]

        expect(life(board)).toEqual([
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0]
        ])
      })
    })
  })

  describe('Still lifes', () => {
    test('Block', () => {
      const board: Cell[][] = [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ]

      expect(life(board)).toEqual(board)
    })

    test('Bee-hive', () => {
      const board: Cell[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      expect(life(board)).toEqual(board)
    })

    test('Loaf', () => {
      const board: Cell[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      expect(life(board)).toEqual(board)
    })

    test('Boat', () => {
      const board: Cell[][] = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]

      expect(life(board)).toEqual(board)
    })

    test('Tub', () => {
      const board: Cell[][] = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]

      expect(life(board)).toEqual(board)
    })
  })

  describe('Oscillators', () => {
    test('Blinker', () => {
      const board: Cell[][] = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]

      const nextBoard: Cell[][] = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]

      expect(life(board)).toEqual(nextBoard)
      expect(life(nextBoard)).toEqual(board)
    })

    test('Toad', () => {
      const board: Cell[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      const nextBoard: Cell[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      expect(life(board)).toEqual(nextBoard)
      expect(life(nextBoard)).toEqual(board)
    })

    test('Beacon', () => {
      const board: Cell[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      const nextBoard: Cell[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      expect(life(board)).toEqual(nextBoard)
      expect(life(nextBoard)).toEqual(board)
    })
  })
})
