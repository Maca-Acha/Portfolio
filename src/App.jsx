import Navigation from './componentes/Navegacion'
import Inicio from './pages/Inicio'
import SobreMi from './pages/Sobremi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import {Parallax} from 'react-parallax'
import fondo1 from './assets/img1.svg'
import fondo2 from './assets/img2.svg'

function App() {
  return (
      <div className='App' >
        <Parallax bgImage={fondo1} strength={400}>
          <Navigation/>
          <Inicio />
        </Parallax>
        <SobreMi/>
        <Parallax bgImage={fondo2} strength={600}>
          <Proyectos/>
        </Parallax>
        <div className='margen-contacto'>
          <Contacto className="contenedor-contacto"/>
        </div>
      </div>
  )
}

export default App
