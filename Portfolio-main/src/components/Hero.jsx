import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center container mx-auto z-10"
      style={{ paddingTop: '100px' }}
    >
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Léo Chouarbi
      </motion.h1>
      <motion.p
        className="text-2xl md:text-3xl font-medium mb-10 text-white/90 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Cybersecurity Engineer & Creative Developer, passionné par la tech, l’automatisation, et le design immersif.
      </motion.p>
      <motion.a
        href="#about"
        className="px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full text-black font-bold shadow-2xl text-2xl hover:scale-110 transition-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Découvrir ↓
      </motion.a>
    </section>
  )
}
