import Footer from '../componentes/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import fondo from '../assets/img4.svg'
import axios from "axios"
import {toast } from 'react-toastify';


const handleSubmit = async (e)=> {
    e.preventDefault()
    const data = {
        nombre: e.target.nombre.value,
        asunto: e.target.asunto.value,
        email: e.target.email.value,
        mensaje: e.target.mensaje.value,
    }
    try{
        if(data.nombre && data.asunto && data.email && data.mensaje){
            const response = await axios.post(`${import.meta.env.VITE_SOME_KEY}contacts`,data)
            toast.success(response.data.response)
            e.target.reset()
        }else{
            toast.error("Faltan campos por completar")
        }
    }catch(error){
        toast.error(error.message)

    }
}

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
                            <p>Busco la oportunidad de insertarme laboralmente dispuesta a capacitarme para mejorar mis capacidades, e integrarme en el mundo digital que es lo que me apasiona. </p>
                        </div>
                        <form className="formulario" data-aos="fade-left" onSubmit={handleSubmit}>
                            <div className="inputs">
                                <input type="text"  required minLength="3" maxLength="25" className="input input1" name="nombre" placeholder="Nombre completo"/>
                                <input type="email"  className="input" name="email"  required maxLength="25" placeholder="Email" />
                                <input type="text" className="input" name="asunto" required placeholder="Asunto"/>
                                <textarea className="input input-area" name="mensaje" placeholder="Tu mensaje"/>
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