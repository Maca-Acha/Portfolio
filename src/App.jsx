import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './componentes/Navegacion'
import Inicio from './componentes/inicio'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="App">
        <Navigation/>
        <Inicio/>
      </div>

  )
}

export default App
