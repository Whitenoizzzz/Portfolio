const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold dark:text-neutral-200">{title}</h4>
      <p className="mt-2 text-slate-500 dark:text-neutral-400">{text}</p>
    </article>
  )
}
export default SkillsCard
