import Navigation from './componentes/Navegacion'
import Inicio from './pages/Inicio'
import SobreMi from './pages/Sobremi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
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
