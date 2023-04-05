import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { useRef } from 'react'

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='relative min-h-screen'>
      <Navbar handleHomeClick={handleHomeClick} handleProjectsClick={handleProjectsClick} handleContactClick={handleContactClick} />
      <Home ref={homeRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}


export default App
