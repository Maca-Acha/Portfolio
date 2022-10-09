import Navigation from './componentes/Navegacion'
import Inicio from './componentes/inicio'
import SobreMi from './componentes/sobreMi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Proyectos from './componentes/Proyectos'
import Contacto from './componentes/Contacto'
import Footer from './componentes/Footer'

function App() {
  return (
      <div className='App' >
        <Navigation/>
        <Inicio />
        <SobreMi/>
        <Proyectos/>
        <Contacto className="contenedor-contacto"/>
        <Footer />
      </div>
  )
}

export default App
