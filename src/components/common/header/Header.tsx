import { ReactNode, VFC } from 'react'
import "./header.scss"

interface Props {
  displayText: string
  headerStyle: string
  children?: ReactNode
}

const Header: VFC<Props> = ({ displayText, headerStyle, children }) => {
  return (
    <div className={headerStyle}>
      <h1>{displayText}</h1>
      {children} 
    </div>
  )
}

export default Header
