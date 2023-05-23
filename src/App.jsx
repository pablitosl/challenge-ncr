import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Results from './components/Results'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='results' element={ <Results /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
