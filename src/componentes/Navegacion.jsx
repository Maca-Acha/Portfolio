import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-scroll'

export default function Navegacion() {
    return (
        <Router>
            <div className="nav-completo">
                <div className='nav'>
                    <Link to="inicio" spy={true} smooth={true} duration={500} className="link-nav">Inicio</Link>
                    <Link to="sobremi" spy={true} offset={-150} smooth={true} duration={500} className="link-nav">Sobre mi</Link>
                    <Link to="proyectoss" spy={true} offset={-100} smooth={true} duration={500} className="link-nav">Proyectos</Link>
                    <Link to="contacto" spy={true} offset={-100} smooth={true} duration={500} className="link-nav">Contacto</Link>
                </div>
            </div>
        </Router>
    )
}