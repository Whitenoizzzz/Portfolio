import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Contact from '../assets/Contact.svg'
import SectionTitle from './SectionTitle'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)
  const sendEmail = (e) => {
    e.persist()
    e.preventDefault()
    setIsSubmitting(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000) // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000) // hide message after 5 seconds
        }
      )

    // Clears the form after sending the email
    e.target.reset()
  }
  return (
    <section className="py-20" id="contact">
      <div className="align-component grid md:grid-cols-2 items-center gap-16">
        <article className="hidden md:block">
          <img src={Contact} className="w-full h-64" />
        </article>
        <article className=" bg-white px-8 py-10 rounded-lg  dark:bg-neutral-700">
          <SectionTitle text="Contact" />
          <form className=" w-full mt-8 " onSubmit={sendEmail}>
            <div className=" mb-4">
              <label
                htmlFor="user_name"
                className=" capitalize block text-sm mb-2 dark:text-neutral-200"
              >
                name
              </label>
              <input
                type="text"
                placeholder="Name..."
                className="w-full bg-slate-50 rounded-lg dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-400 border border-slate-200 py-1.5 px-3 "
                name="user_name"
                id="user_name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="user_email"
                className="capitalize block text-sm mb-2 dark:text-neutral-200"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Email.."
                className=" w-full bg-slate-50 rounded-lg border border-slate-200 py-1.5 px-3  dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-400"
                name="user_email"
                id="user_email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="capitalize block text-sm mb-2 dark:text-neutral-200"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here.."
                className="w-full bg-slate-50 rounded-lg border border-slate-200 h-28 py-1.5 px-3  dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-400"
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="w-full bg-emerald-100 rounded-lg py-1.5 px-3 cursor-pointer hover:bg-emerald-600  dark:bg-emerald-600 dark:text-neutral-100"
              disabled={isSubmitting}
            />
            {stateMessage && <p>{stateMessage}</p>}
          </form>
        </article>
      </div>
    </section>
  )
}
export default ContactForm
