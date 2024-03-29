import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className=" py-4 bg-emerald-100 text-center dark:bg-neutral-900">
      <h4 className=" capitalize text-slate-700 dark:text-neutral-100">
        Made with <FaHeart className=" inline-block text-red-700 pb-1" /> in
        germany
      </h4>
    </section>
  )
}
export default Footer
