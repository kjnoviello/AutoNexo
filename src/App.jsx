import './App.css'
import Contact from './pages/Contact/Contact'
import Download from './pages/Download/Download'
import Features from './pages/Features/Features'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Features></Features>
      <Download></Download>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
