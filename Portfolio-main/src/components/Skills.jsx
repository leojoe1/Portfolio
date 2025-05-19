import { motion } from "framer-motion"

const skills = [
  "Python", "React", "Vite", "Bash", "Linux", "Cybersécurité", "Automatisation", "Docker", "CI/CD", "Git", "PostgreSQL"
]

function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-28 flex flex-col items-center justify-center container mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        Compétences
      </h2>
      <ul className="flex flex-wrap justify-center gap-6 max-w-3xl">
        {skills.map(skill => (
          <li key={skill} className="bg-neutral-800/80 px-8 py-4 rounded-xl text-lg font-medium border border-yellow-500/10 shadow hover:bg-yellow-400 hover:text-black transition">
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  )
}

export default Skills
