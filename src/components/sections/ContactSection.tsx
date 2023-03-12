import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { fadeIn, textContainer } from "@libs/variants";
import SectionTitle from "@components/layouts/SectionTitle";
import { AnimateWhenVisible } from "@components/layouts";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { slideIn } from '../../utils/motion'


const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }


  // template_g92dwni
  // service_bw0b7vc
  // grVbgbfuOkvQumoHk
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_bw0b7vc',
      'template_g92dwni',
      {
        from_name: form.name,
        to_name: 'Akshay',
        from_email: form.email,
        to_email: 'akshayrs096@gmail.com',
        message: form.message,
      },
      'grVbgbfuOkvQumoHk'
    ).then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    },
      (error) => {
        setLoading(false);
        console.log(error);
        alert("Ahh, something went wrong. Please try again.");
      }
    )
  }
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <motion.div className="w-full px-6 pb-6 md:px-40" id="contacts">
      <SectionTitle title=" Let's Connect :" />
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <motion.h1 variants={fadeIn("up")} className="text-4xl font-extrabold sm:text-7xl md:text-8xl">
            Get in touch 
          </motion.h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-8 mt-12'
          >
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='px-6 py-4 font-medium text-green-400 border-none rounded-lg outline-none bg-neutral-900 placeholder:text-secondary'
              />
            </label>
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-neutral-900 placeholder:text-secondary'
              />
            </label>
            <label className='flex flex-col'>
              <span className='mb-4 font-medium text-white'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-neutral-900 placeholder:text-secondary'
              />
            </label>

            <button
              type='submit'
              className='px-8 py-3 font-bold text-white shadow-md outline-none bg-neutral-900 rounded-xl w-fit shadow-primary hover:bg-green-700'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}

      <AnimateWhenVisible variants={textContainer}>
        <motion.div variants={textContainer} className="flex items-center justify-center space-x-6">
          <motion.span
            onClick={() => openLink("https://www.linkedin.com/in/akshay-sankpal-a12426259/")}
            variants={fadeIn()}
            className="p-4 border border-green-700 rounded-full hover:bg-green-700"
          >
            <FaLinkedinIn className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>{" "}
          <motion.span
            onClick={() => openLink("https://twitter.com/sankpal2812")}
            variants={fadeIn()}
            className="p-4 border border-green-700 rounded-full hover:bg-green-700"
          >
            <FiTwitter className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>{" "}
          <motion.span
            onClick={() => window.open("https://github.com/Akshay200228")}
            variants={fadeIn()}
            className="p-4 border border-green-700 rounded-full hover:bg-green-700"
          >
            <FiGithub className="w-4 h-4 md:w-6 md:h-6 " />
          </motion.span>
        </motion.div>
      </AnimateWhenVisible>
    </motion.div>
  );
};

export default ContactSection;
