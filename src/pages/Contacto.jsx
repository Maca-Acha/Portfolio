import Footer from '../componentes/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import fondo from '../assets/img4.svg'

/* const estilo = {
    backgroundsize: contain,
    backgroundrepeat: no-repeat,
} */

export default function Contacto() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <Parallax bgImage={fondo} strength={100} bgClassName="fondo-parallax">
            <div className=" contenedor-contacto" id='contacto'>
                <div className="contenedor-textos-contacto">
                    <div>
                        <h2 className="titulo-contacto">Contacto</h2>
                    </div>
                    <div className="cont-formulario">
                        <div className="cont-texto-contacto" data-aos="fade-right">
                            <h5>Espero se contacten</h5>
                            <p>Busco la oportunidad de insertarme laboralmente dispuesta a capacitarme para mejorar mis capacidades, e integrarme en el mundo digital que es lo que me apasiona. </p>
                        </div>
                        <form className="formulario" data-aos="fade-left">
                            <div className="inputs">
                                <input type="text"  required minLength="3" maxLength="25" className="input input1" name="nombre" placeholder="Nombre completo"/>
                                <input type="text"  className="input" name="email"  required maxLength="25" placeholder="Email" />
                                <input type="text" className="input" name="asunto" required placeholder="Asunto"/>
                                <textarea className="input input-area" name="texto" placeholder="Tu mensaje"/>
                            <div className='submit'>
                                <input type="submit" value="Enviar" className='btn-submit'  />
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </Parallax>
    )
}