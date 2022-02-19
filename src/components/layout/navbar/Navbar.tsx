import { VFC, useState } from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import NavItem from './navItem/NavItem'
import './navbar.scss'

const NAV_ITEM_LIST = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'Players',
    path: '/players',
  },
  {
    text: 'Ratings',
    path: '/ratings',
  },
  {
    text: 'Battle',
    path: '/battle',
  },
]

const Navbar: VFC = () => {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <nav className="navbarStyle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setNavToggle(!navToggle)}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="block h-6 w-6" />
              <MenuIcon className="hidden h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="hidden lg:block h-auto w-auto text-2xl font-serif text-white">
                WhoIsTheOne?
              </div>
            </div>
            <div className="hidden sm:block sm:ml-64">
              <div className="flex space-x-6">
                {NAV_ITEM_LIST.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button className="p-1  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <LogoutIcon className="h-6 w-6" />
            </button> */}
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${navToggle ? 'sm:hidden' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {NAV_ITEM_LIST.map((item, index) => (
            <NavItem key={index} {...item} isMobile />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
