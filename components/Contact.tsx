'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Image from 'next/image';

const Contact = ({}) => {
  //TODO: Add form validation
  const form = useRef(null);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContactForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const sendEmail = (event: React.SyntheticEvent) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_g6fg5ij',
        'contact_form',
        form.current,
        'tKd3aCBCFcnLeJTnn'
      )
      .then(
        () => {
          toast.success('Message sent! Thanks for your message!');
          setContactForm({
            name: '',
            email: '',
            message: '',
          });
        },
        () => {
          toast.error('Error sending your message. Please try again later');
        }
      );
  };

  return (
    <section className="flex flex-col my-12">
      <div className="w-full flex-1 flex flex-col self-end gap-3 px-4 py-2">
        <h1 className="font-semibold text-4xl px-2 border-b-2 border-almostBlack">
          ✉️ contact me.
        </h1>
        <div className="flex-1 flex flex-col items-center self-center max-w-2xl">
          <p className="font-medium text-xl m-2 text-center">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
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
              required
            />
            <input
              className="p-2 border-b-2 border-almostGrey bg-almostWhite"
              type="email"
              placeholder="EMAIL"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="p-2 border-b-2 border-almostGrey bg-almostWhite flex-1"
              placeholder="MESSAGE"
              name="message"
              value={contactForm.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="btn-primary flex gap-2 font-semibold px-4 py-2 rounded-xl hover:bg-amaranthPink focus:bg-amaranthPink self-end"
            >
              Send Message
              <Image width={24} height={24} className="w-6" src="/hero-arrows.svg" alt="Send" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
