import { VFC, useState } from 'react'
import { MenuIcon} from "@heroicons/react/solid"
import {LogoutIcon} from "@heroicons/react/outline"
import NavItem from './navItem/NavItem'
import "./navbar.scss"

const NAV_ITEM_LIST = [
    {
        text: "Home",
        path: "/"
    },
    {
        text: "Players",
        path: "/players"
    },
    {
        text: "Battle",
        path: "/battle"
    },
]

const Navbar: VFC = () => {
  const [profileMenu, setProfileMenu] = useState(false)
  const [navToggle, setNavToggle] = useState(false)
  return (
    <nav className="bg-gray-900 fixed w-screen z-50">
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
              <MenuIcon className="block h-6 w-6"/>
              <MenuIcon className="hidden h-6 w-6"/>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="hidden lg:block h-auto w-auto text-2xl font-serif text-white">
                Sweet Science.
              </div>
            </div>
            <div className="hidden sm:block sm:ml-64">
              <div className="flex space-x-6">
                  {NAV_ITEM_LIST.map((item, index) => <NavItem key={index} {...item}/>)}                  
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="p-1  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <LogoutIcon className="h-6 w-6"/>
            </button>
            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => setProfileMenu(!profileMenu)}
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  {/* <span className="sr-only">Open user menu</span> */}
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <div
                className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  profileMenu ? '' : 'hidden'
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                {['Your Profile', 'Settings'].map((value, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {value}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${navToggle ? 'sm:hidden' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEM_LIST.map((item, index) => <NavItem key={index} {...item} isMobile/>)}                  
        </div>
      </div>
    </nav>
  )
}

export default Navbar
