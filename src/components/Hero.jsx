import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const linkedinURL = 'https://www.linkedin.com/in/lovepreetsingh24/'
const githubURL = 'https://github.com/Whitenoizzzz'

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24  ">
      <div className=" align-component grid  md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Lovepreet</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Software Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Bringing ideas to life, byte by byte
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href={githubURL} target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href={linkedinURL} target="_blank">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block ">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  )
}
export default Hero
