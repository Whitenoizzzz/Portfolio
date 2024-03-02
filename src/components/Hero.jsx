import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const linkedinURL = 'https://www.linkedin.com/in/lovepreetsingh24/'
const githubURL = 'https://github.com/Whitenoizzzz'

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24  dark:bg-neutral-800 " id="home">
      <div className=" align-component grid sm:grid-cols-2 items-center gap-16">
        <article className="order-2 sm:order-1">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-wider  dark:text-neutral-200">
            I'm Lovepreet
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl text-slate-700 dark:text-neutral-300 capitalize tracking-wide">
            Software Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide dark:text-neutral-300">
            Bringing ideas to life, byte by byte
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href={githubURL} target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black dark:hover:text-emerald-600 duration-300" />
            </a>
            <a href={linkedinURL} target="_blank">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black dark:hover:text-emerald-600 duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:hover:text-emerald-600" />
            </a>
          </div>
        </article>

        <article className="order-1 sm:order-2">
          <img src={heroImg} className=" w-full h-80 lg:h-96 " />
        </article>
      </div>
    </section>
  )
}
export default Hero
