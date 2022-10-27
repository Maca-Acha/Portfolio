import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-scroll'

export default function Navegacion() {
    return (
        <Router>
            <div className="nav-completo">
                <div className='nav'>
                    <div className='cont-Link-nav'>
                        <Link to="inicio" offset={-100} spy={true} smooth={true} duration={500} className="link-nav"  activeClass='activo'>Inicio</Link>
                        <div className='nav_activo-hover'></div>
                    </div>
                    <div className='cont-Link-nav'>
                        <Link to="sobremi" spy={true} offset={10} smooth={true} duration={500} id="link-nav-sobremi" className="link-nav" activeClass='activo'>Sobre mi</Link>
                        <div className='nav_activo-hover'></div>
                    </div>
                    <div className='cont-Link-nav'>
                        <Link to="proyectoss" spy={true} offset={100} smooth={true} duration={500} className="link-nav"  activeClass='activo'>Proyectos</Link>
                        <div className='nav_activo-hover'></div>
                    </div>
                    <div className='cont-Link-nav'>
                        <Link to="contacto" spy={true} offset={-10} smooth={true} duration={500} className="link-nav" activeClass='activo'>Contacto</Link>
                        <div className='nav_activo-hover'></div>
                    </div>
                </div>
            </div>
        </Router>
    )
}