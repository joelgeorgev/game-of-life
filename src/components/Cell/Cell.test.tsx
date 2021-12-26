import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Cell } from '.'

type Props = ComponentProps<typeof Cell>
type OnClick = Props['onClick']

const createDefaultProps = (): Props => ({
  isDisabled: false,
  onClick: () => {}
})

const renderCell = (props?: Partial<Props>) =>
  render(<Cell {...createDefaultProps()} {...props} />)

const findCell = (): HTMLButtonElement => screen.getByRole('button')

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

  test('invokes the callback function on click', () => {
    const onClick: jest.MockedFunction<OnClick> = jest.fn()
    renderCell({ onClick })

    userEvent.click(findCell())

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
