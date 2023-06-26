import { useRef, useState } from 'react'
import heroArrows from '/icons/hero-arrows.svg'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const Contact = ({ section }) => {
  //TODO: Add form validation
  const form = useRef()

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setContactForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_g6fg5ij',
        'contact_form',
        form.current,
        'tKd3aCBCFcnLeJTnn'
      )
      .then(
        (result) => {
          toast.success('Message sent! Thanks for your message!')
          setContactForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          toast.error('Error sending your message. Please try again later')
        }
      )
  }

  return (
    <section
      id={section.title}
      ref={section.ref}
      className="flex flex-col my-12"
    >
      <div className="w-full flex-1 flex flex-col self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          ✉️ contact me.
        </h1>
        <div className="flex-1 flex flex-col items-center self-center max-w-2xl">
          <p className="font-medium text-xl m-2 text-center">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>

          <form
            className="flex-1 flex flex-col mx-2 my-8 gap-4 font-normal w-full"
            onSubmit={sendEmail}
            ref={form}
          >
            <input
              className="p-2 border-b-2 border-almostGrey bg-almostWhite"
              type="text"
              placeholder="NAME"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
            />
            <input
              className="p-2 border-b-2 border-almostGrey bg-almostWhite"
              type="email"
              placeholder="EMAIL"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
            />
            <textarea
              className="p-2 border-b-2 border-almostGrey bg-almostWhite flex-1"
              placeholder="MESSAGE"
              name="message"
              value={contactForm.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn-primary flex gap-2 font-semibold px-4 py-2 rounded-xl hover:bg-amaranthPink focus:bg-amaranthPink self-end"
            >
              Send Message
              <img className="w-6" src={heroArrows} alt="See more" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
