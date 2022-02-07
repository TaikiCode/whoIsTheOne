import { VFC } from 'react'
import { Link } from 'react-router-dom'
import "./navItem.scss"

interface Props {
  text: string
  path: string
  isMobile?: boolean
}

const NavItem: VFC<Props> = ({ text, path, isMobile }) => {
  return (
    <Link to={path}>
      <a className={isMobile ? "mobileNavItem" : "navItem"}>
        {text}
      </a>
    </Link>
  )
}

export default NavItem

