import { MockedFunction } from 'vitest'
import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Cell } from '.'

type Props = ComponentProps<typeof Cell>
type OnClick = Props['onClick']

const createDefaultProps = (): Props => ({
  isDead: false,
  isDisabled: false,
  onClick: () => {}
})

const renderCell = (props?: Partial<Props>) =>
  render(<Cell {...createDefaultProps()} {...props} />)

const findCell = (): HTMLButtonElement => screen.getByRole('button')
const getCellLabel = () => findCell().getAttribute('aria-label')

describe('Cell', () => {
  test('renders a cell', () => {
    renderCell()

    const cell = findCell()
    expect(cell).toBeInTheDocument()
    expect(cell).toBeEnabled()
  })

  test('renders a disabled cell', () => {
    renderCell({ isDisabled: true })

    expect(findCell()).toBeDisabled()
  })

  test('invokes the callback function on click', async () => {
    const user = userEvent.setup()
    const onClick: MockedFunction<OnClick> = vi.fn()
    renderCell({ onClick })

    await user.click(findCell())

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('renders a live cell', () => {
    renderCell({ isDead: false })

    expect(getCellLabel()).toEqual('Alive')
  })

  test('renders a dead cell', () => {
    renderCell({ isDead: true })

    expect(getCellLabel()).toEqual('Dead')
  })
})
