import { useState } from 'react'
import emailjs from '@emailjs/browser'
import ContactUs from '../assets/ContactUs.svg'
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
        <article className=" bg-white px-8 py-10">
          <SectionTitle text="Contact" />
          <form className=" w-full mt-8 " onSubmit={sendEmail}>
            <div className=" mb-4">
              <label
                htmlFor="user_name"
                className=" capitalize block text-sm mb-2"
              >
                name
              </label>
              <input
                type="text"
                placeholder="Name..."
                className="w-full bg-slate-50 border border-slate-200 py-1.5 px-3 "
                name="user_name"
                id="user_name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="user_email"
                className="capitalize block text-sm mb-2"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Email.."
                className=" w-full bg-slate-50 border border-slate-200 py-1.5 px-3 "
                name="user_email"
                id="user_email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="capitalize block text-sm mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here.."
                className="w-full bg-slate-50 border border-slate-200 h-28 py-1.5 px-3 "
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="w-full bg-emerald-100 py-1.5 px-3 cursor-pointer hover:bg-emerald-200"
              disabled={isSubmitting}
            />
            {stateMessage && <p>{stateMessage}</p>}
          </form>
        </article>
        <article className="hidden md:block">
          <img src={ContactUs} className="w-full h-64" />
        </article>
      </div>
    </section>
  )
}
export default ContactForm
