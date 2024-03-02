import aboutSvg from '../assets/about.svg'
import Tea from '../assets/Tea.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className="bg-white py-20 dark:bg-neutral-800" id="about">
      <div className="align-component grid md:grid-cols-2 items-center gap-16">
        <img src={Tea} className="w-full h-64" />
        <article>
          <SectionTitle text="code and tea" />
          <p className="text-slate-600 mt-8 leading-loose md:pr-4  dark:text-neutral-400">
            Guten Tag! 👋 I'm a student and aspiring software developer
            currently based in Germany, with roots tracing back to the colorful
            landscapes of India. Embracing the fusion of cultures, I find
            inspiration in the rich flavors of chai, the rhythmic beats of
            music, and the endless possibilities of coding. Though still
            navigating the early stages of my journey, I'm passionate about
            leveraging technology to craft meaningful experiences. When I'm not
            buried in textbooks or lines of code, you can often find me
            exploring new cafes in search of the perfect cup of tea or unwinding
            to the tunes of my favorite playlist.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
