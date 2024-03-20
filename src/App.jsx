
import Home from './components/Home';
import Instituto from './components/Instituto';
import Navbar from './components/Navbar'
import { Routes, Route } from'react-router-dom';
import Noticias from './components/Noticias';
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      {/* rutas */}

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/instituto' element={<Instituto/>}></Route>
        <Route path='/noticias' element={<Noticias/>}></Route>
      </Routes>
    </div>
  )
}

export default App