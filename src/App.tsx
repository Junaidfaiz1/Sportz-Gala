import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { lazy } from 'react'

const NavbarHead = lazy(() => import('./components/NavbarHead'))
const Navbar = lazy(() => import('./components/Navbar'))
const Poster = lazy(() => import('./components/Poster'))
const UpcomingEvents = lazy(() => import('./components/UpcomingEvents'))  
const MatchCountDown = lazy(() => import('./components/MatchCountDown'))


const Layout: React.FC = () => {

  return (
    <div>
      <NavbarHead/>
      <Navbar />
      <Poster/>
      <UpcomingEvents/>
      <MatchCountDown/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
      </Routes>

    </Router>
  )
}

export default App
