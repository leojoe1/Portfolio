import { motion } from "framer-motion"

const projects = [
  {
    title: "Portfolio immersif",
    desc: "Site 3D/animé, responsive, déploiement GitHub Pages, React + Vite.",
    link: "https://leojoe1.github.io/Portfolio/",
  },
  {
    title: "Audit SSI automatisé",
    desc: "Script Bash/Python pour l’audit de conformité PostgreSQL & Apache.",
    link: "#",
  },
  {
    title: "TikTok AI Generator",
    desc: "Génération de vidéos courtes automatisées IA, Moviepy + TTS.",
    link: "#",
  },
]

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-32 px-4 bg-neutral-900/70 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        Projets
      </h2>
      <div className="flex flex-wrap gap-12 justify-center">
        {projects.map((proj, i) => (
          <motion.a
            key={proj.title}
            href={proj.link}
            className="bg-black/80 border border-yellow-500/10 rounded-2xl shadow-xl w-[320px] md:w-[360px] px-8 py-8 text-left hover:scale-105 hover:shadow-2xl transition-all group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            target="_blank"
            rel="noopener"
          >
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-yellow-400 transition">{proj.title}</h3>
            <p className="text-white/80 mb-2">{proj.desc}</p>
            <span className="text-yellow-400 font-bold">Voir →</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
