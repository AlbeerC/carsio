import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
// Components
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import DetailContainer from './components/DetailContainer/DetailContainer'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <BrowserRouter>
      <Hero />
      <Routes>
        <Route path='/' element={ <ProductsContainer /> } />
        <Route path='/detail/:id' element={ <DetailContainer /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
