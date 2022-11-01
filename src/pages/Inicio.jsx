import foto from "../assets/foto-principal.png"
import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-scroll'
import { IoIosArrowDown} from "react-icons/io";

export default function Inicio() {
    return (
        <Router>
            <div className="cont-inicio">
                <div className="inicio" id='inicio'>
                    <div className="inicio-texto">
                        <div className="primera-linea">
                            <h1>Hola, soy</h1>
                            <h1 className="nombre"> Macarena Acha</h1>
                        </div>
                        <h2>Desarrolladora Full Stack
                        </h2>
                    </div>
                    <div className="contenedor-foto">
                        <img alt="foto" src={foto} className="foto" />
                    </div>            
                </div>
                <Link to='sobremi' spy={true} smooth={true} className="cont-animacion">
                    <IoIosArrowDown className="bajar-animacion"/>
                </Link>
            </div>
        </Router>
    )
}