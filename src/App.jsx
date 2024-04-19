
import styles from './App.module.css'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Hero from './components/Hero/Hero.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skill from './components/Skill/Skill.jsx'

function App() {


  return (
    <div className={styles.App}>
   <Navbar/>
   <Hero/>
   <About/>
   <Skill/>
   <Projects/>
   <Contact/>
    </div>
  )
}

export default App
