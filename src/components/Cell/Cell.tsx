interface Props {
  isDead: boolean
  isDisabled: boolean
  onClick: () => void
}

export const Cell = ({ isDead, isDisabled, onClick }: Props) => (
  <button
    aria-label={isDead ? 'Dead' : 'Alive'}
    disabled={isDisabled}
    onClick={onClick}
  />
)
