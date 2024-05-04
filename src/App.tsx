import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import ProjectList from './components/ProjectList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProjectPage from './components/ProjectPage'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Featured from './components/Featured'
import BuyMeCoffee from './components/BuyMeCoffee'

const App: React.FC = () => {
  return (
    <Router>
      <div className="pt-20 bg-secondary text-primary">
        <Header />

        <main className='snap-mandatory snap-y overflow-scroll'>
          <Routes>
            <Route path="/cs1300-v2-portfolio" element={<>
              <Hero title="Hi, I'm Nico!" subtitle="An award-winning software engineer" imageMobile="images/home/hero_image_mobile.png" imageDesktop="images/home/hero_image_desktop.png"/>
              <Featured />
              <AboutMe />
              <ProjectList />
              <Testimonials />
              <Contact />
              <BuyMeCoffee />
            </>}>
            </Route>
            <Route path="/cs1300-v2-portfolio/projects/:slug" element={<ProjectPage />}>
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
