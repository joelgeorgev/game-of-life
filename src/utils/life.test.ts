import { next, select } from './life'

type Board = ReturnType<typeof next>

describe('next', () => {
  describe('Given a cell is alive', () => {
    describe.each<[Board]>([
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
        expect(next(board)).toEqual([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ])
      })
    })

    describe('When the number of neighbours is > 3', () => {
      test('the cell dies as if by overpopulation', () => {
        const board: Board = [
          [1, 0, 1],
          [1, 1, 0],
          [0, 1, 1]
        ]

        expect(next(board)).toEqual([
          [1, 0, 0],
          [1, 0, 0],
          [1, 1, 1]
        ])
      })
    })

    describe('When the number of neighbours is 2 or 3', () => {
      test('the cell survives', () => {
        const board: Board = [
          [1, 0, 0],
          [0, 1, 0],
          [0, 1, 0]
        ]

        expect(next(board)).toEqual([
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
        const board: Board = [
          [1, 0, 0],
          [1, 0, 0],
          [0, 0, 1]
        ]

        expect(next(board)).toEqual([
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0]
        ])
      })
    })
  })

  describe('Still lifes', () => {
    test('Block', () => {
      const board: Board = [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ]

      expect(next(board)).toEqual(board)
    })

    test('Bee-hive', () => {
      const board: Board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      expect(next(board)).toEqual(board)
    })

    test('Loaf', () => {
      const board: Board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      expect(next(board)).toEqual(board)
    })

    test('Boat', () => {
      const board: Board = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]

      expect(next(board)).toEqual(board)
    })

    test('Tub', () => {
      const board: Board = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]

      expect(next(board)).toEqual(board)
    })
  })

  describe('Oscillators', () => {
    test('Blinker', () => {
      const board: Board = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]

      const nextBoard: Board = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]

      expect(next(board)).toEqual(nextBoard)
      expect(next(nextBoard)).toEqual(board)
    })

    test('Toad', () => {
      const board: Board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      const nextBoard: Board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      expect(next(board)).toEqual(nextBoard)
      expect(next(nextBoard)).toEqual(board)
    })

    test('Beacon', () => {
      const board: Board = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      const nextBoard: Board = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0]
      ]

      expect(next(board)).toEqual(nextBoard)
      expect(next(nextBoard)).toEqual(board)
    })
  })
})

describe('select', () => {
  test('kills a live cell', () => {
    const board: Board = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]
    const x = 1
    const y = 1

    expect(select(x, y, board)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
  })

  test('resurrects a dead cell', () => {
    const board: Board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const x = 1
    const y = 1

    expect(select(x, y, board)).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ])
  })
})
