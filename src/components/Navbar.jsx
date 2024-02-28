import { links } from '../data'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleLinkClick = () => {
    setToggleMenu(!toggleMenu) // Close the menu when a link is clicked
  }
  return (
    <nav className="bg-emerald-100 sticky top-0">
      <div className="align-component flex justify-between py-4">
        <div className="py-4 flex gap-16 items-center">
          <h2 className="text-3xl font-bold">
            About<span className=" text-emerald-600">Me</span>
          </h2>
          <div className=" hidden md:flex gap-8">
            {links.map((link) => {
              const { id, href, text } = link
              return (
                <a
                  key={id}
                  href={href}
                  className=" capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                >
                  {text}
                </a>
              )
            })}
          </div>
        </div>
        {/* Mobile navigation toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={handleLinkClick}>
            <Bars3Icon className="h-6" />
          </button>
        </div>
      </div>
      <div
        className={`fixed z-40 w-full  bg-emerald-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? 'h-0' : 'h-full'
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
                  className=" capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
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
