import { motion } from "framer-motion"

function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-32 bg-neutral-900/80 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        Contact
      </h2>
      <p className="mb-10 text-white/80 text-xl text-center">
        Intéressé par une collaboration, un poste ou un projet ?<br />
        Contacte-moi sur <a href="mailto:ton.email@email.com" className="text-yellow-400 font-bold underline">ton.email@email.com</a>
      </p>
      <a href="mailto:ton.email@email.com" className="px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full text-black font-bold shadow-xl text-2xl hover:scale-110 transition-transform">
        M’écrire ✉️
      </a>
    </motion.section>
  )
}

export default Contact
