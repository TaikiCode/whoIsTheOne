import { ReactNode, VFC } from 'react'
import './customButton.scss'

interface Props {
  className: string
  onClick: () => void
  children: ReactNode
  disabled?: boolean
}

const CustomButton: VFC<Props> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default CustomButton
