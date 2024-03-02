import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import { useGlobalContext } from './context'

function App() {
  const { isDarkTheme } = useGlobalContext()
  return (
    <div className={`${isDarkTheme && 'dark'}`}>
      <div className=" dark:bg-neutral-800">
        <Navbar></Navbar>
        <Hero></Hero>
        <Skills></Skills>
        <About></About>
        <Projects></Projects>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
