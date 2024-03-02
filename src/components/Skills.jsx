import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section
      className="py-20 align-component z-0 dark:bg-neutral-800"
      id="skills"
    >
      <SectionTitle text="tech stack"></SectionTitle>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 dark:text-neutral-800">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill}></SkillsCard>
        })}
      </div>
    </section>
  )
}
export default Skills
