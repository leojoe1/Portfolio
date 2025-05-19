import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-[60vh] flex flex-col justify-center items-center text-center container mx-auto py-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        À propos
      </h2>
      <p className="max-w-2xl text-xl text-white/90 mb-4">
        👋 Je crée des expériences web modernes, alliant cybersécurité, automatisation et créativité.<br />
        Basé à Paris, j’aime concevoir des outils et interfaces immersifs, efficaces et élégants.<br />
        <span className="italic">“Construire, automatiser, sécuriser et sublimer la tech.”</span>
      </p>
    </motion.section>
  )
}

export default About
