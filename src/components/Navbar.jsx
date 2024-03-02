import { links } from '../data'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleLinkClick = () => {
    setToggleMenu(!toggleMenu) // Close the menu when a link is clicked
  }
  return (
    <nav className=" bg-emerald-100 dark:bg-neutral-900 sticky top-0">
      <div className="align-component flex justify-between py-2">
        <div className="py-4 flex gap-16 items-center">
          <h2 className="text-3xl font-bold dark:text-neutral-200">
            About<span className=" text-emerald-600">Me</span>
          </h2>
          <div className=" hidden md:flex gap-8 ">
            {links.map((link) => {
              const { id, href, text } = link
              return (
                <a
                  key={id}
                  href={href}
                  className=" capitalize text-lg hover:text-emerald-600 dark:text-neutral-200 tracking-wide  dark:hover:text-emerald-600 "
                >
                  {text}
                </a>
              )
            })}
          </div>
        </div>
        {/* Mobile navigation toggle */}
        <div className=" flex items-center gap-4">
          <ThemeToggle></ThemeToggle>
          <div className="md:hidden flex items-center">
            <button onClick={handleLinkClick}>
              <Bars3Icon className="h-6  dark:text-neutral-200" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute z-40 w-full bg-emerald-100 dark:bg-neutral-900 overflow-hidden flex flex-col gap-12  origin-top transition-opacity duration-700 ease-in-out ${
          !toggleMenu ? ' opacity-0 h-0' : ' opacity-100 h-screen'
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            {links.map((link) => {
              const { id, href, text } = link
              return (
                <a
                  key={id}
                  href={href}
                  className=" capitalize text-lg tracking-wide  dark:text-neutral-200 hover:text-emerald-600 duration-300"
                  onClick={handleLinkClick}
                >
                  {text}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
