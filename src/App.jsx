import Navigation from './componentes/Navegacion'
import Inicio from './pages/Inicio'
import SobreMi from './pages/Sobremi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

function App() {
  return (
      <div className='App' >
        <Navigation/>
        <Inicio />
        <SobreMi/>
        <Proyectos/>
        <Contacto className="contenedor-contacto"/>
      </div>
  )
}

export default App
