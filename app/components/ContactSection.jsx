import ContactForm from "./ContactForm"
import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function ContactSection() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-4">
          <span className="text-xl font-roboto-mono font-bold text-[#2854C5]">04.</span>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
              <div className="text-center md:text-start">
                <h1 className="mb-5 text-4xl font-semibold font-recursive">Contact me</h1>
                <p className="font-semibold">Let's work together</p>
                <p className="mb-8">Feel free to contact me trough this form, or by <Link className="text-[#2854C5] visited:text-purple-500" href="mailto:jalvesdsilva@gmail.com">email</Link> !</p>
                <p>// some socials</p>
                <div className="flex space-x-8 mt-5 justify-center md:justify-start">
                  <a className="flex items-center space-x-2 p-2.5 rounded-xl bg-[#FC9A2F] text-[#F1EEE9]" href="https://www.linkedin.com/in/jimmy-alves-da-silva-ba2834255/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        <span>Linkedin</span>
                  </a>
                  <a className="flex items-center space-x-2 p-2.5 rounded-xl bg-[#FC9A2F] text-[#F1EEE9]" href="https://github.com/jads27" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      <span>Github</span>
                  </a>
                </div>
              </div>
              <div className="relative mx-auto sm:w-3/6 w-full">
                <ContactForm />
              </div>
            </div>
        </section>
    )
}