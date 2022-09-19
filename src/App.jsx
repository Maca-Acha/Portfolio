import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './componentes/Navegacion'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation/>
      
    </div>
  )
}

export default App
