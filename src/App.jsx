import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import View from './pages/View'
import Wish from './pages/Wish'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/wish' element={<Wish />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
