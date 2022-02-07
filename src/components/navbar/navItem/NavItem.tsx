import { VFC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  text: string
  path: string
}

const NavItem: VFC<Props> = ({ text, path }) => {
  return (
    <Link to={path}>
      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium cursor-pointer">
        {text}
      </a>
    </Link>
  )
}

export default NavItem
