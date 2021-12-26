interface Props {
  isDisabled: boolean
  onClick: () => void
}

export const Cell = ({ isDisabled, onClick }: Props) => (
  <button disabled={isDisabled} onClick={onClick} />
)
