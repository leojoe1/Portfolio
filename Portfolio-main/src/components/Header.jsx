import { useState } from "react"
import { motion } from "framer-motion"

function Header() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: "À propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Compétences", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      className="fixed top-0 w-full z-40 backdrop-blur-lg bg-black/60 border-b border-yellow-500/10 shadow-xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-widest drop-shadow-lg">
          LÉO CHOUARBI
        </span>
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-yellow-400 transition">{label}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)}>
          <span className="w-7 h-1 bg-yellow-400 rounded"></span>
          <span className="w-7 h-1 bg-yellow-400 rounded"></span>
          <span className="w-7 h-1 bg-yellow-400 rounded"></span>
        </button>
        {/* Mobile menu */}
        {open && (
          <ul className="absolute right-8 top-16 bg-black/90 border border-yellow-500/10 rounded-xl shadow-lg px-6 py-4 space-y-4 md:hidden z-50">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-lg font-semibold hover:text-yellow-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
