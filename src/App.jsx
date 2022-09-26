import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './componentes/Navegacion'
import Inicio from './componentes/inicio'
import SobreMi from './componentes/sobreMi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Proyectos from './componentes/Proyectos'
import Contacto from './componentes/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="App">
        <Navigation/>
        <Inicio />
        <SobreMi/>
        <Proyectos/>
        <Contacto/>
      </div>

  )
}

export default App
