
import Navigation from './componentes/Navegacion'
import Inicio from './componentes/inicio'
import SobreMi from './componentes/sobreMi'
import './App-blanco.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Proyectos from './componentes/Proyectos'
import Contacto from './componentes/Contacto'

function AppBlanco() {

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

export default AppBlanco
