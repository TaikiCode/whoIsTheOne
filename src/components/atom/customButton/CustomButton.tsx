import { ReactNode, VFC } from 'react'
import './customButton.scss'

interface Props {
  className: string
  onClick: () => void
  children: ReactNode
}

const CustomButton: VFC<Props> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default CustomButton
