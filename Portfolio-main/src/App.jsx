import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ThreeDBackground from './components/ThreeDBackground'
import ScrollIndicator from './components/ScrollIndicator'

function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden">
      <ThreeDBackground />
      <Header />
      <ScrollIndicator />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
