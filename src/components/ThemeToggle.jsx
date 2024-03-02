import { useGlobalContext } from '../context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button
        className=" cursor-pointer w-8 h-8 grid place-items-center bg-transparent border border-transparent"
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <BsFillMoonFill className=" text-xl dark:text-neutral-100 dark:hover:text-emerald-600" />
        ) : (
          <BsFillSunFill className=" text-xl dark:text-neutral-100 hover:text-emerald-600" />
        )}
      </button>
    </section>
  )
}
export default ThemeToggle
