import Habilidades from '../componentes/Habilidades'
import extreme from '../assets/extreme.png'
import insignia from '../assets/insignia-MERN.png'
import mytinerary from '../assets/mytinerary.png'
import diplomatic from '../assets/diplomatic.png' 
import {BrowserRouter as Router, Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const proyectos =[
    {nombre: "Insignia MERN", src: insignia, link:"https://www.credly.com/badges/89f0ad1e-865a-442f-8c39-1f05f1014c96/linked_in", id: "insignia"},
    {nombre: "Extreme", src: extreme, link:"https://xtreme-games.herokuapp.com/", id: "extreme"},
    {nombre: "MyTinerary", src: mytinerary, link:"https://mytinerary-acha.netlify.app/", id: "mytinerary"},
    {nombre: "Diplomatic Week", src: diplomatic, link:"http://diplomaticweek.org/", id: "diplomatic"}
]
export default function Proyectos() {
    useEffect(()=>{
        AOS.init({duration:600})
    },[])
    return (
        <div className="contenedor-textos" id='proyectoss'>
            <div className='proyectos'>
                <h2 className="titulo">Proyectos</h2>
                <div className="subrayado"></div>
            </div>
                <p className="texto-cuerpo texto-proyectos">
                En mi paso en el bootcamp, como en la fundación FPHV, he desarrollado distintos proyectos tanto individuales como en equipo. Me han ayudado a desarrollar distintas habilidades que se pueden ver reflejadas en los ejemplos de aquí abajo, como en el certificado otorgado por el bootcamp.
                </p>
                <div className='cont-proyecto'>
                    
                        {proyectos.map((proyecto, index) => {
                            return(
                                <a href={proyecto.link} data-aos="zoom-in-up" className='cont-logo-proyecto' id={proyecto.id} key={index}>
                                    <img className="logo-proyecto" alt= {proyecto.nombre} src={proyecto.src} />
                                    <p className='nombre-proyecto' >{proyecto.nombre}</p>
                                </a>
                            )
                        })}
                    
                </div>
            <div>
                <Habilidades/>
            </div>
        </div>
    )
}
