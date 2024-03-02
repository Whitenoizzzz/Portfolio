import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { useGlobalContext } from '../context'

const ProjectsCard = ({ url, img, github, title, text }) => {
  const { isDarkTheme } = useGlobalContext()
  return (
    <div className={`${isDarkTheme && 'dark'}`}>
      <article className="bg-white dark:bg-neutral-700 rounded-lg shadow-md hover:shadow-xl duration-300">
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-t-lg h-64"
        />
        <div className="capitalize p-8">
          <h2 className="text-xl tracking-wide font-medium dark:text-neutral-100">
            {title}
          </h2>
          <p className="mt-4 text-slate-700 leading-loose dark:text-neutral-400">
            {text}
          </p>
          <div className="mt-4 flex gap-x-4">
            <a href={url}>
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:hover:text-emerald-600" />
            </a>
            <a href={github}>
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 dark:hover:text-emerald-600" />
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
export default ProjectsCard
